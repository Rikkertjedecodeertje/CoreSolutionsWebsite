import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

if (process.argv.includes('--fixture')) {
  mkdirSync('src/app/media-test-fixture', { recursive: true });
  writeFileSync('src/app/media-test-fixture/page.tsx', `
import { MediaCarousel } from '@/components/MediaCarousel';
import { MediaCard } from '@/components/MediaCards';
import { projects } from '@/data/projects';
export default function MediaFixture() {
  const mentions = projects.find((p) => p.slug === 'pillenpopper')!.mediaMentions.slice(0, 5);
  return <main style={{maxWidth:1200,margin:'40px auto',padding:20}}>
    <div id="future-carousel"><MediaCarousel>{mentions.map((mention) => <MediaCard featured mention={mention} key={mention.source} />)}</MediaCarousel></div>
    <div id="single-carousel"><MediaCarousel><MediaCard featured mention={mentions[0]} /></MediaCarousel></div>
    <div id="empty-carousel"><MediaCarousel>{[]}</MediaCarousel></div>
  </main>;
}
`);
  process.exit(0);
}

const browser = await chromium.launch({ headless: true });
const errors = [];
const reports = [];
const header = 'Dankzij ondernemer Rik (23) zijn PillenPopper hoeft reumapatiënt niet meer te worstelen met medicijnstrips';
const settle = (page) => page.waitForTimeout(1000);
const rotationCheckDelay = 5000;
const firstTitle = async (region) => region.locator('[aria-roledescription="artikel"]:not([aria-hidden="true"]), [aria-roledescription="slide"]:not([aria-hidden="true"])').first().locator('h3').innerText();
const activeGroups = (region) => region.locator('[aria-roledescription="artikel"]:not([aria-hidden="true"]), [aria-roledescription="slide"]:not([aria-hidden="true"])');
async function screenshot(page, region, name) {
  const buffer = await region.locator('..').screenshot({ type: 'jpeg', quality: 78 });
  const data = buffer.toString('base64');
  for (let offset = 0; offset < data.length; offset += 24000) {
    console.log('MEDIASHOT ' + JSON.stringify({name,offset,total:data.length,data:data.slice(offset,offset+24000)}));
  }
}
async function aligned(region) {
  const first = await activeGroups(region).first().boundingBox();
  const viewport = await region.locator('[tabindex="0"]').boundingBox();
  assert(first && viewport && Math.abs(first.x - viewport.x) < 2, 'Leading article must align after wrapping');
}

async function checkWebsiteAnalytics() {
  const page = await browser.newPage();
  const site = 'http://127.0.0.1:8765';
  let requests = 0;
  await page.route('https://www.googletagmanager.com/gtm.js?id=GTM-WMSNWHWJ', async route => {
    requests++;
    await route.fulfill({ contentType: 'application/javascript', body: '' });
  });

  try {
    await page.context().addCookies([{ name: '_ga', value: 'legacy-cookie', url: site }]);
    await page.goto(site + '/nl/', { waitUntil: 'networkidle' });
    assert.equal(requests, 1, 'Analytics starts without waiting for a visitor choice');
    assert.equal(await page.locator('#analytics-consent-title').count(), 0, 'The site has no consent banner');
    const commands = await page.evaluate(() => window.dataLayer.map(entry => Array.from(entry)));
    assert.equal(commands[0][2].analytics_storage, 'denied');
    assert.equal(commands[0][2].ad_user_data, 'denied');
    assert(!commands.some(entry => entry[0] === 'consent' && entry[1] === 'update'));
    assert.equal((await page.context().cookies()).some(cookie => cookie.name === '_ga'), false);

    await page.goto(site + '/nl/cookie-policy/#website-analytics', { waitUntil: 'networkidle' });
    assert.equal(requests, 2);
    await Promise.all([
      page.waitForEvent('load'),
      page.getByRole('button', { name: 'Webstatistieken uitzetten', exact: true }).click(),
    ]);
    await page.getByRole('button', { name: 'Webstatistieken weer aanzetten', exact: true }).waitFor();
    assert.equal(await page.evaluate(() => window['ga-disable-G-MBPRCG2KGY']), true);
    await page.goto(site + '/cookie-policy/', { waitUntil: 'networkidle' });
    assert.equal(requests, 2, 'Opt-out applies to both locales after navigation');
    await Promise.all([
      page.waitForResponse(response => response.url().includes('GTM-WMSNWHWJ')),
      page.getByRole('button', { name: 'Turn website analytics back on', exact: true }).click(),
    ]);
    assert.equal(requests, 3);
    await page.evaluate(() => localStorage.setItem('coresolutions.analytics-consent', JSON.stringify({
      choice: 'decline', expiresAt: Date.now() + 10 * 60 * 1000,
    })));
    await page.reload({ waitUntil: 'networkidle' });
    assert.equal(requests, 3, 'An earlier refusal is respected');
    reports.push({ websiteAnalytics: 'pass' });
  } finally {
    await page.close();
  }
}

try {
  await checkWebsiteAnalytics();
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: 'no-preference' });
    page.on('pageerror', (error) => errors.push(error.message));
    await page.route('https://www.googletagmanager.com/gtm.js?id=GTM-WMSNWHWJ', route => route.fulfill({ body: '' }));
    for (const path of ['/nl/', '/', '/nl/portfolio/pillenpopper/', '/portfolio/pillenpopper/']) {
      const nl = path.startsWith('/nl/');
      const radioPage = (nl ? '/nl' : '') + '/portfolio/pillenpopper/radio/';
      await page.goto('http://127.0.0.1:8765' + path, { waitUntil: 'networkidle' });
      const region = page.getByRole('region', {name:nl?'Uitgelichte media':'Featured coverage', exact:true});
      await region.scrollIntoViewIfNeeded();
      const next = region.getByRole('button', {name:nl?'Volgend artikel':'Next story',exact:true});
      const previous = region.getByRole('button', {name:nl?'Vorig artikel':'Previous story',exact:true});
      assert.equal(await activeGroups(region).count(), width >= 1024 ? 3 : 1);
      const initial = await firstTitle(region);
      const featuredCount = Number(await region.evaluate(element => element.style.getPropertyValue('--available')));
      const westSlides = region.locator('article').filter({ has: page.locator('img[alt="Omroep West"]') });
      assert.equal(await westSlides.count(), 3, 'Omroep West appears once in each carousel sequence');
      assert.equal(await westSlides.locator(`a[href="${radioPage}#radio-west"]`).count(), 3,
        'The Omroep West interview opens the local audio player');
      assert.equal(await region.locator(`a[href="${radioPage}#omroep-delft"]`).count(), 0,
        'The Omroep Delft radio interview stays out of the featured carousel');
      assert.equal(await region.locator('a[href^="https://www.omroepdelft.nl/delft/rik-23-bedenkt-pillenpopper"]').count(), 3,
        'The Omroep Delft article remains featured');
      assert(await region.locator('[aria-roledescription][aria-hidden="true"]').evaluateAll((slides)=>slides.every((slide)=>slide.inert)), 'Offscreen copies must not receive focus');

      // Verify actual timed rotation before touching or focusing any controls.
      if (width === 1440 && path === '/nl/') {
        await page.mouse.move(0,0);
        await page.waitForTimeout(rotationCheckDelay);
        assert.notEqual(await firstTitle(region), initial, 'Visible carousel must rotate automatically');
        const pause = region.getByRole('button', {name:'Automatische rotatie pauzeren'});
        await pause.click();
        await settle(page);
        const pausedTitle = await firstTitle(region);
        await page.mouse.move(0,0);
        await page.waitForTimeout(rotationCheckDelay);
        assert.equal(await firstTitle(region), pausedTitle, 'Pause must persist');
        await region.getByRole('button', {name:'Automatische rotatie starten'}).click();
        await page.mouse.move(0,0);
        await page.waitForTimeout(rotationCheckDelay);
        assert.notEqual(await firstTitle(region), pausedTitle, 'Play must resume rotation');
        await activeGroups(region).getByRole('link').first().focus();
        const focusTitle = await firstTitle(region);
        await page.mouse.move(0,0);
        await page.waitForTimeout(rotationCheckDelay);
        assert.equal(await firstTitle(region), focusTitle, 'Keyboard readers must not lose their article');
      }

      // Navigate through a complete cycle in each direction, checking the real viewport.
      const starting = await firstTitle(region);
      for(let i=0;i<featuredCount;i++){await next.click();await settle(page);await aligned(region);}
      assert.equal(await firstTitle(region), starting, 'Forward loop must preserve content');
      for(let i=0;i<featuredCount;i++){await previous.click();await settle(page);await aligned(region);}
      assert.equal(await firstTitle(region), starting, 'Backward loop must preserve content');
      const viewport = region.locator('[tabindex="0"]');
      await viewport.focus();
      await page.keyboard.press('ArrowRight');
      await settle(page);
      assert.notEqual(await firstTitle(region), starting, 'Arrow key must navigate');
      await page.keyboard.press('ArrowLeft');
      await settle(page);
      assert.equal(await firstTitle(region), starting);
      assert.equal(await region.locator('h3').filter({hasText:header}).count(), 3);

      const details = page.locator('details').filter({has:page.locator('summary').filter({hasText:/overige|more media/})});
      assert.equal(await details.getAttribute('open'), null);
      await details.locator('summary').focus();
      await page.keyboard.press('Enter');
      assert.notEqual(await details.getAttribute('open'), null);
      const delftAudio = details.locator('article').filter({
        has: page.locator(`a[href="${radioPage}#omroep-delft"]`),
      });
      assert.equal(await delftAudio.count(), 1, 'The Omroep Delft radio interview appears once in the full media list');
      assert.equal(await delftAudio.getByText(nl ? '4 november 2026' : '4 November 2026', { exact: true }).count(), 1);
      const mentions = await details.locator('article').all();
      const onHome = path === '/' || path === '/nl/';
      if (!onHome) {
        const milestone = page.locator('article').filter({
          hasText: nl ? 'Twee prijzen gewonnen' : 'Won two awards',
        });
        assert.equal(await milestone.getByText(nl ? 'PRIJZEN' : 'AWARDS', { exact: true }).count(), 1);
      }
      for (const area of [region, details]) {
        const labels = area.getByText('PillenPopper', { exact: true });
        assert.equal(await labels.count(), onHome ? await area.locator('article').count() : 0,
          'Each homepage media card shows its product label');
      }
      for (const [paper, domain] of [['Rijswijks Dagblad', 'rijswijksdagblad.nl'], ['Zoetermeers Dagblad', 'zoetermeersdagblad.nl']]) {
        const row = details.locator('article').filter({ has: page.getByRole('img', { name: paper, exact: true }) });
        assert.equal(await row.count(), 1, `${paper} should have one media card`);
        const links = await row.getByRole('link').evaluateAll(anchors => anchors.map(link => link.href));
        assert.equal(links.length, 2, `${paper} should link to the nomination and the win`);
        assert(links.every(link => new URL(link).hostname === domain));
        assert(links.some(link => new URL(link).pathname.includes('/nominaties-voor-')) && links.some(link => new URL(link).pathname.includes('/winnaars-')));
      }
      const dnhc = details.locator('article').filter({ has: page.getByRole('img', { name: 'De Nieuwe Haagse Courant', exact: true }) });
      assert.equal(await dnhc.count(), 1, 'Both De Nieuwe Haagse Courant articles share one card');
      assert.equal(await dnhc.getByText(nl ? '19 november 2026' : '19 November 2026', { exact: true }).count(), 1);
      assert.deepEqual(await dnhc.getByRole('link').evaluateAll(anchors => anchors.map(link => link.href)),
        ["https://dnhc.nl/voorpagina/haagse-innovatie-pillenpopper-wint-publieksprijs-the-hague-innovators-awards/", "https://dnhc.nl/voorpagina/haagse-rik-23-ontwikkelt-hulpmiddel-waarmee-mensen-zelfstandig-pillen-kunnen-uitdrukken/"]);
      assert.equal(await details.locator('a[href*="202611171900.mp3#t=2601,3190"]').count(), 1,
        'The latest Den Haag FM interview appears in all media sections');
      const toggleCount = (await details.locator('summary').textContent()).match(/\d+/);
      assert.equal(mentions.length, Number(toggleCount?.[0]), 'The toggle counts all secondary mentions');
      for (const item of mentions) {
        const images = item.locator('img');
        const imageCount = await images.count();
        assert(imageCount <= 1, 'Secondary rows must avoid large thumbnails');
        await item.scrollIntoViewIfNeeded();
        if (imageCount === 1) {
          await images.evaluate((img) => img.decode());
        } else {
          assert((await item.locator(':scope > div').first().innerText()).trim(), 'A text source label replaces a missing logo');
        }
      }
      const desktopHeight = await details.boundingBox();
      if (width === 1440) {
        const gridRows = Math.ceil(mentions.length / 2);
        assert(desktopHeight.height < 60 + gridRows * 130, 'Expanded desktop rows must remain compact');
      }
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth), false);
      if(path==='/nl/')await screenshot(page,region,'expanded-'+width);
      await details.locator('summary').click();
      await region.scrollIntoViewIfNeeded();
      if(path==='/nl/')await screenshot(page,region,'collapsed-'+width);
      reports.push({path,width,navigation:'pass',loop:'pass',keyboard:'pass',logos:'pass',compactList:'pass',overflow:false});
    }
    await page.close();
  }

  const page=await browser.newPage({viewport:{width:768,height:1000},reducedMotion:'reduce'});
  page.on('pageerror',(error)=>errors.push(error.message));
  await page.route('https://www.googletagmanager.com/gtm.js?id=GTM-WMSNWHWJ', route => route.fulfill({ body: '' }));
  await page.goto('http://127.0.0.1:8765/media-test-fixture/',{waitUntil:'networkidle'});
  const future=page.locator('#future-carousel').getByRole('region');
  await future.scrollIntoViewIfNeeded();
  assert.equal(await activeGroups(future).count(),2);
  assert.equal(await future.getByRole('button').count(),2,'Reduced motion uses manual controls');
  const first=await firstTitle(future);
  await page.waitForTimeout(rotationCheckDelay);
  assert.equal(await firstTitle(future),first,'Reduced-motion preference disables autoplay');
  const titles=new Set();
  for(let i=0;i<5;i++){
    titles.add(await firstTitle(future));;
    await future.getByRole('button',{name:'Next story',exact:true}).click();
    await page.waitForTimeout(100);
    await aligned(future);
  }
  assert.equal(titles.size,5,'Every future featured story must be reachable');
  assert.equal(await firstTitle(future),first,'Five-story carousel must loop');
  assert.equal(await page.locator('#single-carousel').getByRole('button').count(),0);
  assert.equal(await page.locator('#empty-carousel').getByRole('region').count(),0);
  reports.push({fixture:'five stories, single story, empty',width:768,reducedMotion:'pass',futureExpansion:'pass'});
  await page.close();
  assert.deepEqual(errors,[]);
  console.log('MEDIARESULT '+JSON.stringify(reports));
} finally {
  await browser.close();
}
