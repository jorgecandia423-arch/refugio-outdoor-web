---
name: Refugio Outdoor
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#424844'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#496455'
  primary: '#173124'
  on-primary: '#ffffff'
  primary-container: '#2d4739'
  on-primary-container: '#98b5a3'
  inverse-primary: '#b0cdbb'
  secondary: '#685d4b'
  on-secondary: '#ffffff'
  secondary-container: '#eddec7'
  on-secondary-container: '#6c614f'
  tertiary: '#3d2713'
  on-tertiary: '#ffffff'
  tertiary-container: '#563c27'
  on-tertiary-container: '#cba78c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ccead6'
  primary-fixed-dim: '#b0cdbb'
  on-primary-fixed: '#062014'
  on-primary-fixed-variant: '#324c3e'
  secondary-fixed: '#f0e0ca'
  secondary-fixed-dim: '#d3c4af'
  on-secondary-fixed: '#221a0c'
  on-secondary-fixed-variant: '#4f4535'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#e5bfa3'
  on-tertiary-fixed: '#2b1705'
  on-tertiary-fixed-variant: '#5b412c'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e5e2e1'
  kraft-beige: '#F5EFE6'
  burnt-orange: '#D1603D'
  soft-white: '#FDFDFD'
typography:
  display-lg:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system for Refugio Outdoor is built on the concept of "The Modern Sanctuary." It bridges the gap between the rugged durability of the wilderness and the refined, warm atmosphere of a high-end physical showroom. The brand personality is professional, sustainable, and welcoming, targeting enthusiasts who value quality and longevity in their gear.

The visual style is **Minimalist with Tactile Warmth**. It avoids the sterile coldness of typical tech minimalism by using organic tones and a sophisticated interplay of textures. The UI should feel like a well-lit timber cabin—spacious, organized, and authentic. High-quality photography of mountain landscapes should be paired with warm, indoor lifestyle shots to maintain this dual-narrative of adventure and comfort.

## Colors
The color palette is grounded in earth tones to evoke stability and sustainability. 
- **Forest Green (#2D4739)** serves as the primary action color, used for headers and critical CTAs to represent the natural world.
- **Kraft Beige (#F5EFE6)** is the main canvas background, providing a warmer, more inviting alternative to pure white.
- **Earth Brown (#634832)** acts as a grounding secondary accent for dividers, iconography, and decorative borders.
- **Charcoal Black (#212121)** ensures high legibility for long-form reading.
- **Burnt Orange (#D1603D)** is reserved for emphasis, alerts, and promotional callouts, cutting through the organic palette without feeling synthetic.

## Typography
The typography strategy uses a "Serif for Emotion, Sans for Function" approach. **Literata** (chosen as a refined alternative to Lora for digital clarity) is used for headings to convey the heritage and storytelling aspect of the brand. Its organic curves reflect the showroom's warmth.

**Montserrat** is used for all body text and UI labels. It provides a clean, geometric contrast to the serif headings, ensuring technical specifications and navigation are easy to parse. For mobile, display sizes are scaled down to ensure content remains the hero without overwhelming the screen.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to mimic the curated, intentional placement of items in a showroom. A 12-column grid is used with generous 64px outer margins to create a sense of premium "breathing room."

On mobile, the system transitions to a fluid single-column layout with 20px margins. Spacing rhythm is strictly based on an 8px scale. High-value product sections should use larger vertical padding (80px+) to distinguish between different "rooms" or collections within the scroll.

## Elevation & Depth
Depth is communicated through **Tonal Layers** rather than heavy shadows. The primary surface is Kraft Beige. Elements that need to stand out, like product cards or modals, use Soft White backgrounds with extremely subtle, low-opacity Earth Brown shadows (e.g., 4% opacity) to provide just enough lift without breaking the minimalist aesthetic.

Interactive elements use "Inner Glows" or 1px Earth Brown borders to denote clickability. Glassmorphism may be used sparingly on navigation overlays to mimic high-end display cases, utilizing a light backdrop blur and a hint of white tint.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding takes the edge off sharp digital corners, echoing the sanded edges of handcrafted wooden furniture. 

Buttons and input fields use this subtle rounding to maintain a professional, architectural feel. Larger components, such as hero images or featured collection cards, can utilize `rounded-lg` (0.5rem) to feel more approachable. Circles are reserved strictly for functional icons and avatars.

## Components
- **Buttons:** Primary buttons are Forest Green with white Montserrat text (Bold, Uppercase). They have no border but use a slight Earth Brown lift on hover. Secondary buttons are Earth Brown outlines on Kraft Beige.
- **Chips:** Used for category filters (e.g., "Hiking," "Sustainable"). Use Kraft Beige backgrounds with Earth Brown borders. Active states switch to a solid Earth Brown with white text.
- **Input Fields:** Minimalist design with a bottom-only border in Earth Brown. On focus, the border thickens and transitions to Forest Green.
- **Cards:** Product cards should be borderless on the main background or use a 1px soft-white border. Use Literata for product titles and Montserrat for price and specs.
- **Icons:** Use thin-stroke, mono-line icons in Charcoal Black or Earth Brown. They should feel technical and precise, like architectural drawings.
- **Special Feature - "Sustainability Badge":** A custom component using the Burnt Orange for eco-friendly or recycled materials, presented as a small, refined label with a leaf or mountain icon.