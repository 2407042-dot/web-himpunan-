---
name: Academic Excellence System
colors:
  surface: '#fff8f6'
  surface-dim: '#eed4d0'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ee'
  surface-container: '#ffe9e6'
  surface-container-high: '#fde2de'
  surface-container-highest: '#f7ddd8'
  on-surface: '#261816'
  on-surface-variant: '#5a413d'
  inverse-surface: '#3d2d2a'
  inverse-on-surface: '#ffedea'
  outline: '#8e706c'
  outline-variant: '#e2bfb9'
  surface-tint: '#b22b1d'
  primary: '#570000'
  on-primary: '#ffffff'
  primary-container: '#800000'
  on-primary-container: '#ff8371'
  inverse-primary: '#ffb4a8'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#00137f'
  on-tertiary: '#ffffff'
  tertiary-container: '#0021b9'
  on-tertiary-container: '#94a0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#8f0f07'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#dfe0ff'
  tertiary-fixed-dim: '#bcc2ff'
  on-tertiary-fixed: '#000c61'
  on-tertiary-fixed-variant: '#1830c2'
  background: '#fff8f6'
  on-background: '#261816'
  surface-variant: '#f7ddd8'
typography:
  display-lg:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  headline-sm:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
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
  lg: 40px
  xl: 64px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is engineered for a student organization centered on Information Systems, balancing academic authority with modern technical proficiency. The brand personality is professional, institutional, and structured, aimed at fostering a sense of community and officiality among students and faculty.

The design style follows a **Corporate / Modern** aesthetic with a high-contrast palette. It utilizes clear structural hierarchy, substantial white space to ensure legibility of academic content, and a sophisticated use of the signature maroon to denote action and identity. The interface avoids unnecessary decorative elements, favoring a "content-first" approach that reflects the logical nature of Information Systems.

## Colors

The palette is anchored by a deep Maroon, symbolizing the heritage and prestigious nature of the student association. Black is utilized for grounding elements—primarily in administrative contexts—while a range of grays manages the structural containment of information.

- **Primary Maroon**: Used for key branding, primary actions, and active navigation states.
- **Secondary Black**: Reserved for high-contrast backgrounds like the Admin Sidebar and primary text.
- **Neutral Grays**: Used for backgrounds (Light Gray) and structural dividers (Border Gray) to maintain a clean, organized appearance.
- **Semantic Palette**: Specifically tuned for administrative workflows (Draft, Pending, Published, New) using softer background tints to ensure text legibility while maintaining high visibility.

## Typography

This design system employs a pairing of **Poppins** for headings and **Inter** for body text. This combination bridges the gap between a bold, geometric identity and highly functional, neutral readability.

- **Headings (Poppins)**: Should always use Bold (700) or SemiBold (600) weights to provide a strong visual anchor. Use for page titles, section headers, and significant callouts.
- **Body & UI (Inter)**: Designed for maximum legibility in data-heavy screens. Regular (400) is the default for paragraph text, while Medium (500) is reserved for interactive elements like buttons and menu items to improve affordance.
- **Scale**: Large display sizes scale down specifically for mobile to prevent overflow and maintain a comfortable reading rhythm on small devices.

## Layout & Spacing

The layout is built on a **12-column fluid grid** for the main dashboard and public pages, with a **fixed sidebar** model for administrative views. 

- **Grid System**: Use 24px gutters for desktop to allow content to breathe. On mobile, gutters should reduce to 16px.
- **Rhythm**: All spacing follows an 8px base unit. 
- **Admin Sidebar**: Fixed at 280px width on desktop. On mobile, it should transition to a hidden drawer.
- **Public Layout**: Max-width container of 1200px for text-heavy pages to maintain an optimal line length for readability.

## Elevation & Depth

Hierarchy is established through **Low-contrast outlines** and subtle **Ambient shadows**. This design system avoids aggressive depth to maintain its "Professional/Academic" character.

- **Surface Levels**: The base background is Light Gray (#F5F5F5). Interactive components (Cards, Inputs) sit on White (#FFFFFF) surfaces.
- **Shadow Profile**: Primary elevation uses a very soft 8px blur with low opacity (8%) to gently lift cards from the background. 
- **Interactive State**: Upon hover, the elevation increases significantly, and the shadow takes on a slight Maroon tint (15% opacity) to provide clear feedback that an element is actionable.
- **Borders**: All primary containers and inputs utilize a 1px Border Gray (#E0E0E0) to provide definition without adding visual weight.

## Shapes

The design system utilizes **Rounded** geometry (base 8px radius) to soften the professional aesthetic, making the organization appear modern and approachable rather than strictly institutional.

- **Base Radius (8px)**: Applied to cards, input fields, and standard buttons.
- **Large Radius (16px)**: Applied to modals and large container sections.
- **Pill Shape**: Reserved exclusively for status badges and tags to distinguish them from interactive buttons.

## Components

### Buttons
- **Primary**: Solid Maroon (#800000) with White text. Use for the main call-to-action.
- **Secondary**: Ghost style with Maroon border and Maroon text. Use for alternative actions.
- **States**: On hover, Primary buttons darken to #4D0000. Secondary buttons gain a very light maroon background tint.

### Cards
- **Base Style**: White background, 8px border radius, and a subtle 2px shadow.
- **Hover**: Elevation increases, and the shadow shifts to a Maroon tint to signal interactivity.

### Navigation
- **Top Navbar**: White background with a prominent 2px Maroon bottom border. This creates a clear horizontal anchor for the UI.
- **Admin Sidebar**: Solid Black (#0A0A0A) background. Links use Gray text with a Maroon left-accent bar and white text for the active state.

### Input Fields
- White background with 1px Border Gray. Focus state should transition the border to Maroon and add a subtle maroon glow (ring).

### Status Badges
- Small, pill-shaped components with high-contrast text.
- **Draft**: Gray background, Dark Gray text.
- **Pending**: Light Yellow background, Deep Gold text.
- **Published**: Soft Green background, Dark Green text.
- **New**: Light Maroon background, Maroon text.

### Data Tables
- Use Inter for all data entries. Header rows should have a Light Gray (#F5F5F5) background with SemiBold text.