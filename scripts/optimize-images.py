"""Build responsive assets from immutable originals. Run with Pillow 12.3.0."""
from pathlib import Path
from PIL import Image, ImageOps
import argparse
import difflib
import json
ROOT = Path(__file__).resolve().parents[1]
ORIGINALS = ROOT / "assets/originals/images"
PUBLIC = ROOT / "public/images"
OUT = PUBLIC / "optimized"
OUT.mkdir(parents=True, exist_ok=True)
REPLACEMENTS = {
 "batbox-product.png": ROOT / "assets/originals/replacements/batbox_tester_product.png",
 "iheel-product.png": ROOT / "assets/originals/replacements/iHeel_pads_product.jpg",
 "pillenpopper-product.webp": ROOT / "assets/source-images/pillenpopper-cleaned.png",
}
EXTRA_SOURCES = {
 "rik-van-wieren-founder.jpg": ROOT / "assets/originals/replacements/rik-van-wieren-founder.jpg",
 "press-logos/haagse-dingen-logo.png": ROOT / "assets/source-images/media-logos/haagse-dingen-logo.png",
 "media-haagse-dingen.jpg": ROOT / "assets/source-images/media-haagse-dingen.jpg",
 "press-logos/ad-logo.png": ROOT / "assets/source-images/media-logos/ad-logo.png",
 "press-logos/omroep-delft-logo.png": ROOT / "assets/source-images/media-logos/omroep-delft-logo.png",
 "press-logos/dnhc-logo.png": ROOT / "assets/source-images/media-logos/dnhc-logo.png",
 "press-logos/den-haag-fm-logo.png": ROOT / "assets/source-images/media-logos/den-haag-fm-logo.png",
 "press-logos/hague-online-logo.png": ROOT / "assets/source-images/media-logos/hague-online-logo.png",
 "press-logos/impactcity-logo.png": ROOT / "assets/source-images/media-logos/impactcity-logo.png",
 "split-detail-place.jpg": ROOT / "assets/source-images/split-detail-place.jpg",
 "split-detail-ready.jpg": ROOT / "assets/source-images/split-detail-ready.jpg",
 "media-hague-online.jpg": ROOT / "assets/source-images/media-hague-online.jpg",
 "media-impactcity.jpg": ROOT / "assets/source-images/media-impactcity.jpg",
 "pillenpopper-blister.jpg": ROOT / "assets/originals/replacements/pillenpopper-blister.jpg",
}
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--only", nargs="+", help="Regenerate only the named image keys; preserve other assets")
args = parser.parse_args()
def plan(name):
 if name.startswith("press-logos/"):
  return [80,160,320], "146px", "Media source logos; retain alpha, trim empty margins, never upscale"
 if name.startswith("split-detail-"):
  return [160,320,480], "110px", "Pill-splitting detail insets"
 if name.startswith("media-"):
  return [320,640,960], "(min-width: 1280px) 290px, (min-width: 768px) 45vw, calc(100vw - 40px)", "Press article thumbnails"
 if "logo" in name:
  return ([96, 192, 320] if "core-solutions" in name else [160, 320, 600]), "160px", "Logo; retain alpha and crisp edges"
 if "profile" in name:
  return [100,200], "200px", "Founder portrait, displayed up to 200 CSS pixels"
 if "skyline" in name:
  return [320,480,800], "(min-width: 1280px) 760px, (min-width: 768px) 60vw, calc(100vw - 40px)", "Contact-page panorama; capped at 800 pixels for faster loading"
 if name.startswith("stores/"):
  return [480,800], "(min-width: 1280px) 390px, (min-width: 768px) 45vw, calc(100vw - 40px)", "Retail cards, about 390 CSS pixels"
 return [480,800,1200], "(min-width: 1280px) 560px, (min-width: 768px) 45vw, calc(100vw - 40px)", "Home and product heroes; card-specific sizes supplied in markup"
manifest_path = ROOT / "src/data/images.generated.json"
audit_path = ROOT / "assets/image-audit.json"
manifest = json.loads(manifest_path.read_text()) if args.only and manifest_path.exists() else {}
audit = json.loads(audit_path.read_text()) if args.only and audit_path.exists() else []
sources = {p.relative_to(ORIGINALS).as_posix(): p for p in ORIGINALS.rglob("*") if p.is_file() and p.suffix.lower() != ".svg"}
sources.update(EXTRA_SOURCES)
if args.only:
 unknown = set(args.only) - sources.keys()
 if unknown: parser.error("Unknown image keys: " + ", ".join(sorted(unknown)))
 sources = {name: sources[name] for name in args.only}
 audit = [item for item in audit if item["path"] not in {"/images/" + name for name in sources}]
for name, original in sorted(sources.items()):
 source=REPLACEMENTS.get(name,original)
 with Image.open(source) as img:
  img=ImageOps.exif_transpose(img)
  if img.mode=="P": img=img.convert("RGBA" if "transparency" in img.info else "RGB")
  elif img.mode not in ("RGB","RGBA"): img=img.convert("RGB")
  if name=="rik-van-wieren-founder.jpg":
   img=ImageOps.fit(img,(1536,1152),Image.Resampling.LANCZOS,centering=(0.78,0.5))
  widths,sizes,purpose=plan(name)
  widths=sorted(set(min(w,img.width) for w in widths))
  alpha=img.mode=="RGBA" and img.getextrema()[3][0]<255
  if not alpha: img=img.convert("RGB")
  slug=name.rsplit(".",1)[0].replace("/","--")
  variants=[]
  for width in widths:
   height=round(img.height*width/img.width)
   resized=img.resize((width,height),Image.Resampling.LANCZOS)
   row={"width":width,"height":height}
   for fmt in ("avif","webp","png" if alpha else "jpg"):
    path=OUT/f"{slug}-{width}.{fmt}"
    if fmt=="avif": resized.save(path,"AVIF",quality=85 if "logo" in name else 44 if "skyline" in name else 56 if "founder" in name else 72,speed=6,subsampling="4:4:4" if "logo" in name else "4:2:0")
    elif fmt=="webp": resized.save(path,"WEBP",quality=88 if "logo" in name else 66 if "skyline" in name else 80 if "founder" in name else 82,method=6,lossless=alpha)
    elif fmt=="png": resized.save(path,"PNG",optimize=True)
    else: resized.convert("RGB").save(path,"JPEG",quality=72 if "skyline" in name else 86,optimize=True,progressive=True)
    with Image.open(path) as check: check.verify()
    row[fmt]="/images/optimized/"+path.name
   variants.append(row)
  largest=variants[-1]
  manifest["/images/"+name]={"width":largest["width"],"height":largest["height"],"sizes":sizes,"fallback":largest["png" if alpha else "jpg"],"variants":variants}
  # Retain legacy URLs with a resized fallback. The requested homepage PNG stays byte-for-byte unchanged.
  legacy=PUBLIC/name
  legacy.parent.mkdir(parents=True,exist_ok=True)
  if name!="core-solutions-products-hero.png":
   legacy_image=img.resize((largest["width"],largest["height"]),Image.Resampling.LANCZOS)
   if legacy.suffix==".png": legacy_image.save(legacy,"PNG",compress_level=4)
   elif legacy.suffix==".webp": legacy_image.save(legacy,"WEBP",quality=84,method=6)
   else: legacy_image.convert("RGB").save(legacy,"JPEG",quality=72 if "skyline" in name else 86,optimize=True,progressive=True)
  audit.append({"path":"/images/"+name,"source":str(source.relative_to(ROOT)).replace("\\","/"),"originalBytes":original.stat().st_size,"sourceWidth":img.width,"sourceHeight":img.height,"widths":widths,"largestAvifBytes":(ROOT/"public"/largest["avif"].lstrip("/")).stat().st_size,"largestWebpBytes":(ROOT/"public"/largest["webp"].lstrip("/")).stat().st_size,"purpose":purpose})
def write_json(path, value):
 old = path.read_bytes().decode("utf-8").splitlines(keepends=True) if path.exists() else []
 new = (json.dumps(value,indent=2)+"\n").splitlines(keepends=True)
 output = []
 matcher = difflib.SequenceMatcher(a=[line.rstrip("\r\n") for line in old], b=[line.rstrip("\r\n") for line in new], autojunk=False)
 for tag,i,j,k,l in matcher.get_opcodes():
  output.extend(old[i:j] if tag == "equal" else new[k:l])
 path.write_bytes("".join(output).encode("utf-8"))
write_json(manifest_path, manifest)
write_json(audit_path, audit)
print(json.dumps({"images":len(audit),"variants":sum(len(v["variants"])*3 for v in manifest.values()),"originalBytes":sum(a["originalBytes"] for a in audit),"largestAvifBytes":sum(a["largestAvifBytes"] for a in audit)}))
