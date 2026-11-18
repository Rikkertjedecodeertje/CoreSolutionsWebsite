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

try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: 'no-preference' });
    page.on('pageerror', (error) => errors.push(error.message));
    for (const path of ['/nl/', '/', '/nl/portfolio/pillenpopper/', '/portfolio/pillenpopper/']) {
      const nl = path.startsWith('/nl/');
      await page.goto('http://127.0.0.1:8765' + path, { waitUntil: 'networkidle' });
      const region = page.getByRole('region', {name:nl?'Uitgelichte media':'Featured coverage', exact:true});
      await region.scrollIntoViewIfNeeded();
      const next = region.getByRole('button', {name:nl?'Volgend artikel':'Next story',exact:true});
      const previous = region.getByRole('button', {name:nl?'Vorig artikel':'Previous story',exact:true});
      assert.equal(await activeGroups(region).count(), width >= 1024 ? 3 : 1);
      const initial = await firstTitle(region);
      assert(await region.locator('[aria-roledescription][aria-hidden="true"]').evaluateAll((slides)=>slides.every((slide)=>slide.inert)), 'Offscreen copies must not receive focus');

      // Verify actual timed rotation before touching or focusing any controls.
      if (width === 1440 && path === '/nl/') {
        await page.mouse.move(0,0);
        await page.waitForTimeout(8500);
        assert.notEqual(await firstTitle(region), initial, 'Visible carousel must rotate automatically');
        const pause = region.getByRole('button', {name:'Automatische rotatie pauzeren'});
        await pause.click();
        await settle(page);
        const pausedTitle = await firstTitle(region);
        await page.mouse.move(0,0);
        await page.waitForTimeout(8100);
        assert.equal(await firstTitle(region), pausedTitle, 'Pause must persist');
        await region.getByRole('button', {name:'Automatische rotatie starten'}).click();
        await page.mouse.move(0,0);
        await page.waitForTimeout(8500);
        assert.notEqual(await firstTitle(region), pausedTitle, 'Play must resume rotation');
        await activeGroups(region).first().getByRole('link').first().focus();
        const focusTitle = await firstTitle(region);
        await page.mouse.move(0,0);
        await page.waitForTimeout(8100);
        assert.equal(await firstTitle(region), focusTitle, 'Keyboard readers must not lose their article');
      }

      // Navigate through a complete cycle in each direction, checking the real viewport.
      const starting = await firstTitle(region);
      for(let i=0;i<3;i++){await next.click();await settle(page);await aligned(region);}
      assert.equal(await firstTitle(region), starting, 'Forward loop must preserve content');
      for(let i=0;i<3;i++){await previous.click();await settle(page);await aligned(region);}
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
      const mentions = await details.locator('article').all();
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
  await page.goto('http://127.0.0.1:8765/media-test-fixture/',{waitUntil:'networkidle'});
  const future=page.locator('#future-carousel').getByRole('region');
  await future.scrollIntoViewIfNeeded();
  assert.equal(await activeGroups(future).count(),2);
  assert.equal(await future.getByRole('button').count(),2,'Reduced motion uses manual controls');
  const first=await firstTitle(future);
  await page.waitForTimeout(8100);
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
