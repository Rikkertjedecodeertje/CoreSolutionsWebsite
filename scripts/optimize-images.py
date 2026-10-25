"""Build responsive assets from immutable originals. Run with Pillow 12.3.0."""
from pathlib import Path
from PIL import Image, ImageOps
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
def plan(name):
 if "logo" in name:
  return ([96, 192, 320] if "core-solutions" in name else [160, 320, 600]), "160px", "Logo; retain alpha and crisp edges"
 if "profile" in name:
  return [100,200], "200px", "Founder portrait, displayed up to 200 CSS pixels"
 if "skyline" in name:
  return [640,960,1600], "(min-width: 1280px) 760px, (min-width: 768px) 60vw, calc(100vw - 40px)", "Contact-page panorama, up to about 760 CSS pixels"
 if name.startswith("stores/"):
  return [480,800], "(min-width: 1280px) 390px, (min-width: 768px) 45vw, calc(100vw - 40px)", "Retail cards, about 390 CSS pixels"
 return [480,800,1200], "(min-width: 1280px) 560px, (min-width: 768px) 45vw, calc(100vw - 40px)", "Home and product heroes; card-specific sizes supplied in markup"
manifest, audit = {}, []
for original in sorted(ORIGINALS.rglob("*")):
 if not original.is_file() or original.suffix.lower() == ".svg": continue
 name=original.relative_to(ORIGINALS).as_posix()
 source=REPLACEMENTS.get(name,original)
 with Image.open(source) as img:
  img=ImageOps.exif_transpose(img)
  if img.mode=="P": img=img.convert("RGBA" if "transparency" in img.info else "RGB")
  elif img.mode not in ("RGB","RGBA"): img=img.convert("RGB")
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
    if fmt=="avif": resized.save(path,"AVIF",quality=85 if "logo" in name else 72,speed=6,subsampling="4:4:4" if "logo" in name else "4:2:0")
    elif fmt=="webp": resized.save(path,"WEBP",quality=88 if "logo" in name else 82,method=6,lossless=alpha)
    elif fmt=="png": resized.save(path,"PNG",optimize=True)
    else: resized.convert("RGB").save(path,"JPEG",quality=86,optimize=True,progressive=True)
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
   else: legacy_image.convert("RGB").save(legacy,"JPEG",quality=86,optimize=True,progressive=True)
  audit.append({"path":"/images/"+name,"source":str(source.relative_to(ROOT)).replace("\\","/"),"originalBytes":original.stat().st_size,"sourceWidth":img.width,"sourceHeight":img.height,"widths":widths,"largestAvifBytes":(ROOT/"public"/largest["avif"].lstrip("/")).stat().st_size,"largestWebpBytes":(ROOT/"public"/largest["webp"].lstrip("/")).stat().st_size,"purpose":purpose})
(ROOT/"src/data/images.generated.json").write_text(json.dumps(manifest,indent=2)+"\n",encoding="utf-8")
(ROOT/"assets/image-audit.json").write_text(json.dumps(audit,indent=2)+"\n",encoding="utf-8")
print(json.dumps({"images":len(audit),"variants":sum(len(v["variants"])*3 for v in manifest.values()),"originalBytes":sum(a["originalBytes"] for a in audit),"largestAvifBytes":sum(a["largestAvifBytes"] for a in audit)}))
