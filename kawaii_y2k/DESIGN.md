---
name: Kawaii Y2K
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#3a4a49'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#6a7a7a'
  outline-variant: '#b9cac9'
  surface-tint: '#006a6a'
  primary: '#006a6a'
  on-primary: '#ffffff'
  primary-container: '#00ffff'
  on-primary-container: '#007272'
  inverse-primary: '#00dddd'
  secondary: '#a13470'
  on-secondary: '#ffffff'
  secondary-container: '#fc7ebd'
  on-secondary-container: '#770c4e'
  tertiary: '#666000'
  on-tertiary: '#ffffff'
  tertiary-container: '#f5ea46'
  on-tertiary-container: '#6e6800'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#00fbfb'
  primary-fixed-dim: '#00dddd'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#ffd8e7'
  secondary-fixed-dim: '#ffafd2'
  on-secondary-fixed: '#3d0025'
  on-secondary-fixed-variant: '#831957'
  tertiary-fixed: '#f2e743'
  tertiary-fixed-dim: '#d5ca24'
  on-tertiary-fixed: '#1e1c00'
  on-tertiary-fixed-variant: '#4d4800'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style

This design system is a high-energy, nostalgic homage to turn-of-the-millennium teen magazines and pop-tech aesthetics. It blends the "Kawaii" culture of softness and emotional resonance with the experimental, digital-optimism of the Y2K era. 

The brand personality is **maximalist, expressive, and unapologetically fun**. It targets a trend-conscious audience that values shareability and personality over utility-first minimalism. The design style is a hybrid of **Neo-Brutalism** (thick strokes, high contrast) and **Tactile/Skeuomorphism** (glossy textures, 3D depth). This creates a "candy-coated" interface that feels premium through its richness of detail rather than its restraint.

## Colors

The palette is anchored by an **Electric Cyan** background that provides a luminous, digital foundation. **Bubblegum Pink** serves as the primary action color, while **Lemon Yellow** is used for high-attention callouts and stickers. **Soft Lilac** acts as a secondary accent to soften the high-contrast transitions.

The "Neutral" color is not a true gray but a deep, saturated charcoal to maintain vibrancy even in text and borders. All colors should be used with high saturation; there is no room for muted tones in this system.

## Typography

The typography strategy relies on the tension between "Chunky" and "Clean." **Epilogue** is utilized for headings; its geometric weight and tight letter-spacing mimic the heavy, rounded display faces of Y2K print media. Headings should often be styled with a thick text-stroke or a drop shadow to enhance the "sticker" effect.

**Plus Jakarta Sans** provides a friendly, modern balance for body copy. Its open counters and soft curves ensure readability remains high against the vibrant background colors. Labels should be set in bold, uppercase weights to stand out against the busy UI.

## Layout & Spacing

This design system uses a **Fluid Grid** model with a heavy emphasis on containerized content. The layout rhythm is tight and energetic, favoring "clustered" information over sparse whitespace. 

Margins and gutters are intentionally visible through the use of thick borders around containers. Elements should feel "packed" like a magazine spread. Use the `lg` and `xl` spacing tokens to separate major content sections, while keeping internal component spacing (`sm`, `md`) compact to maintain a high-density, tactile feel.

## Elevation & Depth

Hierarchy is achieved through **Physicality** rather than simple shadows. 
- **The Glossy Effect:** Buttons and interactive elements use a multi-layered inner glow (top-left light source) to create a "candy-like" 3D appearance.
- **Soft, Deep Shadows:** Cards use a high-blur, medium-opacity shadow tinted with the primary color (e.g., a cyan-tinted shadow on a cyan background) to make them feel like they are floating just above the surface.
- **Layering:** Use "Sticker" elevation—elements that appear to be peeled or stuck onto the UI, utilizing white outlines and hard, offset drop shadows (Neo-brutalism style) to imply a secondary layer of information.

## Shapes

The shape language is dominated by **Exaggerated Roundness**. Standard cards use a 1rem (`rounded-lg`) radius, while buttons and badges often utilize pill-shapes (`rounded-full`). 

To lean into the Y2K magazine aesthetic, every container must feature a **Thick Border** (minimum 3px) in the neutral charcoal color. This "frames" the vibrant colors and prevents them from bleeding into one another, giving the UI a structured, illustrated quality.

## Components

### Buttons
Buttons are the "hero" of this design system. They must be **Glossy and 3D**. Use a heavy 4px bottom-border in a darker shade of the button color to simulate a physical press. On hover, the button should "squish" (scale 0.98) and the shadow should tighten.

### Cards
Cards are always filled with white or a very pale version of the accent colors. They feature a 3px black border and a "floating" shadow. For a magazine feel, cards can be slightly rotated (1-2 degrees) to look like scattered photos.

### Sticker Badges
Use these for tags and labels. They feature a white 2px outer stroke *outside* of the black border, mimicking the die-cut edge of a physical sticker. 

### Input Fields
Inputs should be chunky with a thick 3px border. When focused, the border color should switch to Bubblegum Pink, and the entire field should gain a soft glow.

### Additional Components
- **Marquee Text:** Use a scrolling horizontal marquee for news or updates to mimic early web aesthetics.
- **Glitter/Sparkle Overlays:** Subtle, animated SVG "sparkles" should appear when a user completes a successful action or hovers over a primary button.