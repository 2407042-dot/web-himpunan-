---
name: Obsidian Maroon
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e2bfb9'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a98984'
  outline-variant: '#5a413d'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690000'
  primary-container: '#800000'
  on-primary-container: '#ff8371'
  inverse-primary: '#b22b1d'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#3b3d3d'
  on-tertiary-container: '#a6a7a8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#8f0f07'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  button:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
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
  margin-mobile: 16px
  margin-desktop: 64px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is engineered for a modern student organization that values prestige, academic rigor, and forward-thinking energy. The aesthetic is "Sleek Professionalism," utilizing a dark-mode-first approach to create a premium, high-tech environment that feels more like a creative agency or a modern tech collective than a traditional student body.

The visual style blends **Minimalism** with **Glassmorphism**. By leaning into deep blacks and high-contrast typography, the interface achieves a "low-light" sophistication. Emotional responses should range from a sense of belonging to a feeling of empowerment. Subtle maroon accents provide a "heartbeat" to the dark canvas, ensuring the organization’s identity is felt throughout the user journey without being overwhelming.

## Colors

This design system utilizes a high-contrast, dark-dominant palette designed for impact and focus.

*   **Primary (Maroon):** Used exclusively for high-priority actions, active states, and brand signatures. It is a deep, saturated maroon that symbolizes strength and heritage.
*   **Neutral (Deep Black):** The foundation of the UI. Backgrounds use a true black (#000000) for maximum contrast, while surfaces use a slightly elevated "Obsidian" (#0A0A0A).
*   **Secondary (Dark Grey):** Used for borders and lower-tier surface areas to provide structural definition without breaking the dark aesthetic.
*   **Highlights (White):** Pure white is reserved for primary text and critical icons to ensure AAA accessibility against the dark backgrounds.

Gradients should be used sparingly, typically transitioning from the Primary Maroon to a transparent or darker shade to create a sense of depth and "glow" on interactive elements.

## Typography

The typography strategy pairs the geometric authority of **Montserrat** for headings with the systematic clarity of **Inter** for body text.

Headlines should be bold and impactful, often using tight letter-spacing to create a "locked-in" professional look. Use `display-lg` for hero sections to make a definitive brand statement. 

Body text must maintain high legibility; hence, Inter is used for its excellent performance on screens. For navigational elements and metadata, the `label-md` style uses uppercase and increased tracking to provide a technical, modern feel that differentiates functional text from narrative content.

## Layout & Spacing

The design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy emphasizes spaciousness and "breathing room" to maintain the premium, minimal aesthetic.

Horizontal margins are generous on desktop (64px) to center the focus on the content. Vertical rhythm is driven by a 8px base unit, ensuring all components align to a consistent mathematical scale. Glassmorphism cards should have consistent internal padding (24px or 32px) to ensure content within them does not feel cramped against the frosted edges.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows.

1.  **Base Layer:** The true black background (#000000).
2.  **Surface Layer:** Elevated sections use #0A0A0A or #1A1A1A.
3.  **Glass Layer:** Interactive cards use a semi-transparent background (White at 5% opacity) with a `20px` backdrop-blur. 
4.  **Edge Treatment:** All glass elements must feature a 1px solid border (White at 10% opacity) to define the shape against the dark background. 

When an element is hovered, a subtle Maroon outer glow (`box-shadow: 0 0 20px rgba(128, 0, 0, 0.3)`) may be used to indicate interactivity and "charge" the element with brand energy.

## Shapes

The design system uses **Soft (0.25rem)** roundedness for standard UI elements like inputs and buttons, maintaining a sharp, professional edge. 

Larger containers and Glassmorphism cards use `rounded-lg` (0.5rem) or `rounded-xl` (0.75rem) to soften the layout slightly and prevent the interface from appearing overly aggressive. This balance between sharp internals and slightly softer containers mirrors modern high-end hardware design.

## Components

*   **Buttons:** Primary buttons are solid Maroon with White text. Secondary buttons are "ghost" style with a 1px White or Maroon border and a backdrop-blur effect.
*   **Glass Cards:** The signature component. These must have a `backdrop-filter: blur(20px)`, a thin 1px border, and a subtle gradient fill from top-left (White 5%) to bottom-right (White 2%).
*   **Inputs:** Fields are dark (#0A0A0A) with a 1px border that turns Maroon on focus. Placeholders are low-contrast grey.
*   **Navigation:** A fixed top-bar with a heavy backdrop-blur. Links use the `label-md` typography. The active link is indicated by a small Maroon dot or a 2px underline.
*   **Chips/Badges:** Small, high-contrast pills. Use Maroon backgrounds for "Live" or "Urgent" statuses, and dark-grey for category tags.
*   **Progress Bars:** Thin, sleek lines. The background track is dark grey, and the progress fill is a Maroon-to-Bright Red gradient to simulate light and movement.