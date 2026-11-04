"""Generate square site favicons from the original Core Solutions logo."""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
source = Image.open(ROOT / 'assets/originals/images/core-solutions-logo.png').convert('RGBA')
source = source.crop(source.getbbox())

def icon(size):
    canvas = Image.new('RGBA', (size, size), 'white')
    logo = ImageOps.contain(source, (round(size * .88), round(size * .88)), Image.Resampling.LANCZOS)
    canvas.alpha_composite(logo, ((size - logo.width) // 2, (size - logo.height) // 2))
    return canvas

for size in (96, 192):
    icon(size).save(ROOT / f'public/favicon-{size}x{size}.png', optimize=True)
icon(180).save(ROOT / 'public/apple-touch-icon.png', optimize=True)
icon(192).save(ROOT / 'public/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
print('Generated favicon.ico, 96px/192px PNG icons and 180px Apple icon.')
