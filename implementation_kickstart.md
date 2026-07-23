# Apex Flow Plumbing - Implementation Kickstart

## 1. Design Decision: Accent Color

**Selected: Safety Orange (#FF7A00)**

Why: Conveys urgency and professionalism while maintaining modern, approachable aesthetic. Works exceptionally well with dark theme and glass morphism effects. Less clinical than red, more energetic and trustworthy.

---

## 2. Design Token System

### Color Palette

```
Primary Brand Color:
- Orange: #FF7A00 (Safety Orange - All CTAs, accents, highlights)

Neutrals & Dark Theme:
- Background: #0F0F0F (Deep Black)
- Surface: #1A1A1A (Dark Card/Section Background)
- Surface Light: #2A2A2A (Elevated Surface)
- Text Primary: #F5F5F5 (Off-White)
- Text Muted: #A0A0A0 (Muted Gray)
- Text Subtle: #707070 (Subtle Gray)
- Border: #333333 (Dark Border)
- Divider: #282828 (Subtle Divider)

Glass Morphism:
- Glass Background: rgba(26, 26, 26, 0.7)
- Glass Border: rgba(255, 122, 0, 0.2)
- Glass Blur: 12px backdrop blur

Semantic Colors:
- Success: #10B981
- Warning: #F59E0B
- Error: #EF4444
```

### Typography

**Font Stack Recommendation: Inter + Source Code Pro**

- **Headings (H1-H6):** Inter, 600-700 weight
  - H1: 48px / 56px (Desktop), 36px / 44px (Tablet), 28px / 36px (Mobile), weight 700, tracking -0.02em
  - H2: 36px / 44px (Desktop), 28px / 36px (Tablet), 24px / 32px (Mobile), weight 700, tracking -0.01em
  - H3: 28px / 36px (Desktop), 24px / 32px (Tablet), 20px / 28px (Mobile), weight 600
  - H4: 24px / 32px, weight 600
  - H5: 20px / 28px, weight 600
  - H6: 18px / 26px, weight 600

- **Body Text:** Inter, 400-500 weight
  - Large: 18px / 28px, weight 400 (CTAs, callouts)
  - Base: 16px / 26px, weight 400 (Standard body)
  - Small: 14px / 22px, weight 400 (Secondary text)
  - Tiny: 12px / 18px, weight 400 (Captions, metadata)

- **Monospace:** Source Code Pro, 400 weight (Code snippets if needed)

**Why Inter + Source Code Pro:**
- Inter: Modern, highly legible, excellent hinting at small sizes, perfect for dark UI
- Clean, professional aesthetic suitable for emergency services
- Excellent OpenType features and variable font support
- Wide language support

### Spacing Scale (Tailwind Default)

```
xs: 4px (0.25rem)
sm: 8px (0.5rem)
md: 16px (1rem)
lg: 24px (1.5rem)
xl: 32px (2rem)
2xl: 48px (3rem)
3xl: 64px (4rem)
```

### Border Radius

```
sm: 4px
md: 8px
lg: 12px
xl: 16px
2xl: 24px
full: 9999px
```

### Shadows

```
sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
lg: 0 10px 15px -3px rgba(0, 0, 0, 0.15)
xl: 0 20px 25px -5px rgba(0, 0, 0, 0.2)
glass: 0 8px 32px rgba(0, 0, 0, 0.3)
```

### Transitions

```
Base: 150ms ease-in-out
Button: 200ms ease-in-out
Card: 300ms ease-in-out
Page: 400ms ease-in-out
```

---

## 3. Component Architecture

### File Structure

```
src/
├── app/
│   ├── layout.tsx                 (Root layout, fonts, metadata)
│   ├── page.tsx                   (Home page - main landing)
│   ├── contact/
│   │   └── page.tsx              (Contact page)
│   └── globals.css               (Design tokens, animations)
├── components/
│   ├── layout/
│   │   ├── Header.tsx            (~150 lines - Logo, Nav, Mobile Menu)
│   │   ├── Hero.tsx              (~180 lines - Hero section with CTA)
│   │   ├── Navigation.tsx         (~80 lines - Nav menu items)
│   │   └── Footer.tsx            (~120 lines - Footer links, contact)
│   ├── sections/
│   │   ├── Services.tsx          (~150 lines - Service cards with glass)
│   │   ├── Testimonials.tsx      (~140 lines - Customer reviews)
│   │   ├── WhyChooseUs.tsx       (~130 lines - USP section)
│   │   ├── CTA.tsx               (~100 lines - Secondary CTA block)
│   │   └── FAQ.tsx               (~160 lines - Accordion section)
│   ├── ui/
│   │   ├── Button.tsx            (~50 lines - Reusable button)
│   │   ├── GlassCard.tsx         (~80 lines - Glass morphism card)
│   │   ├── Modal.tsx             (~120 lines - Booking modal)
│   │   ├── ContactForm.tsx       (~180 lines - Contact form)
│   │   ├── BookingForm.tsx       (~200 lines - Booking form with validation)
│   │   ├── Burger.tsx            (~60 lines - Burger menu icon)
│   │   └── BackToTop.tsx         (~80 lines - Back to top button)
│   └── animations/
│       └── scroll-effects.tsx     (~50 lines - Scroll animations)
├── hooks/
│   ├── useScrollAnimation.ts      (~40 lines - Scroll trigger hook)
│   ├── useMediaQuery.ts           (~30 lines - Responsive hook)
│   └── useModal.ts                (~50 lines - Modal state hook)
├── lib/
│   └── utils.ts                   (cn() utility)
└── public/
    └── images/                    (Generated service images)
```

### Component Size Guidelines

- **Layout Components:** 150-200 lines max
- **Section Components:** 130-180 lines max
- **UI Components:** 50-120 lines max
- **Forms:** 180-220 lines max

---

## 4. Responsive Breakpoints Strategy

### Tailwind Breakpoints (Mobile-First)

```
- Mobile: Base (< 640px)
- Tablet: md: (≥ 768px)
- Desktop: lg: (≥ 1024px)
- Wide: xl: (≥ 1280px)
```

### Responsive Behavior

**Header:**
- Mobile: Burger menu (collapsed nav)
- Tablet: Horizontal nav with smaller font
- Desktop: Full horizontal nav, logo left, nav right

**Hero:**
- Mobile: Single column, 100% width, stacked CTA
- Tablet: 2-column with adjusted spacing
- Desktop: 2-column with large typography

**Services Grid:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns with glass effects

**Testimonials:**
- Mobile: Carousel (1 visible)
- Tablet: 2 columns
- Desktop: 3 columns

**Full Width:** All sections extend edge-to-edge with padding management (no max-width wrapper except content inside)

---

## 5. Animation Strategy

### Scroll Animations

```css
Fade In + Slide Up:
- Opacity: 0 → 1
- Transform: translateY(20px) → translateY(0)
- Trigger: On scroll into viewport
- Duration: 600ms, ease-out

Parallax:
- Hero section background: slower scroll speed (0.5x)
- Subtle movement only (15-20px max)

Stagger Children:
- Card animations offset by 50-100ms each
- Creates cascading effect
```

### Interactive Animations

```css
Button Hover:
- Background: color shift
- Scale: 1 → 1.02
- Shadow: sm → md
- Duration: 200ms

Card Hover (Glass):
- Border: opacity 0.2 → 0.4
- Shadow: glass → glass elevated
- Background: opacity 0.7 → 0.8
- Duration: 300ms

Modal:
- Enter: Fade in + scale (0.95 → 1)
- Exit: Fade out + scale (1 → 0.95)
- Backdrop: Fade 0 → 0.5
- Duration: 300ms

Burger Menu:
- Hamburger → X rotation on click
- Nav slide in from left (mobile)
- Duration: 300ms
```

### Scroll Behavior

- Smooth scrolling enabled site-wide
- Navigation links scroll to sections smoothly
- Back-to-top button smooth scroll to top

---

## 6. CTA Placement Strategy

### Minimum 3 CTAs (Primary: Orange #FF7A00)

1. **Hero Section CTA** (Above Fold)
   - "Claim My Fast Dispatch" button
   - Opens booking modal
   - Position: Right side on desktop, below hero copy on mobile
   - Style: Solid orange, large (lg size)

2. **Services Section CTA** (Mid-Page)
   - "Book Your Service" button below service cards
   - Opens booking modal
   - Style: Outlined orange becoming solid on hover

3. **Final CTA Section** (Bottom)
   - "Don't Wait - Schedule Now" full-width CTA block
   - Opens booking modal
   - Background: Glass surface with orange accent border
   - Style: Large, prominent

**Optional Additional CTAs:**
- "Call Now" link in header (tel: link, shows phone number)
- "Get Help" button in service cards
- Contact page form submission

---

## 7. Form Implementation

### Booking Modal Form

**Fields:**
- Name (required, text)
- Phone (required, tel)
- Email (optional, email)
- Service Type (required, select)
- Preferred Date (optional, date)
- Description (optional, textarea)

**Behavior:**
- Local state only (no submission)
- Client-side validation
- Success message on submit
- Auto-closes after 3 seconds

### Contact Page Form

**Fields:**
- Name (required, text)
- Phone (required, tel)
- Service Type (required, select)
- Message (required, textarea)
- Checkbox: "I'd like a callback"

**Behavior:**
- Local state only
- No email capture
- Clear form after submission
- Success notification

---

## 8. SEO Optimization

### Meta Tags (Root Layout)

```
Title: "Apex Flow Plumbing | Emergency Plumbing Services & Solutions"
Description: "Fast, reliable emergency plumbing services. Available 24/7 for repairs, drain cleaning, water heaters, and more. Call now for same-day dispatch."
Viewport: responsive
Theme Color: #FF7A00
```

### Schema Markup

- Organization schema (name, logo, contact)
- LocalBusiness schema (address, phone, opening hours)
- Service schema (plumbing services offered)
- FAQPage schema (FAQ section)

### On-Page SEO

- Semantic HTML (header, main, section, article, footer)
- H1 in hero (once per page)
- H2/H3 for sections
- Image alt text (service images)
- Internal linking (Contact page link in footer)
- Proper heading hierarchy

### Performance

- Image optimization (webp, lazy loading)
- Font subsetting (Inter + Source Code Pro)
- Minified CSS/JS
- No external dependencies (minimal third-party scripts)

---

## 9. Feature Checklist

### Pages & Sections

- [x] Hero section with CTA and value prop
- [x] Services showcase (3+ service cards with glass effect)
- [x] Why Choose Us section (USPs)
- [x] Testimonials carousel/grid
- [x] FAQ accordion section
- [x] CTA block (mid-page secondary CTA)
- [x] Header with navigation + burger menu
- [x] Footer with links and contact info
- [x] Contact page (no email capture)
- [x] Back-to-top button

### Interactions

- [x] Booking modal with form
- [x] Form validation
- [x] Burger menu toggle (mobile)
- [x] Smooth scrolling navigation
- [x] Scroll animations (fade-in, slide-up)
- [x] Hover effects on cards and buttons
- [x] Modal open/close animations

### Styling

- [x] Dark theme (dark gray + black)
- [x] Orange accent (#FF7A00) for CTAs
- [x] Glass morphism on cards
- [x] Responsive design (mobile, tablet, desktop)
- [x] Proper color contrast (will verify post-build)
- [x] Consistent spacing and typography

### Technical

- [x] Fully responsive (no max-width, full-bleed sections)
- [x] Semantic HTML
- [x] Accessibility basics (ARIA labels, alt text)
- [x] SEO optimized
- [x] No state management (local component state only)
- [x] Reusable components (DRY, future-proof)
- [x] Animation library (Framer Motion or CSS)

---

## 10. Development Roadmap

### Phase 1: Foundation (Setup & Layout)

1. Configure layout.tsx with fonts (Inter, Source Code Pro)
2. Create globals.css with design tokens and animations
3. Build Header component with burger menu
4. Build Navigation component
5. Build Footer component
6. Create useMediaQuery hook for responsive behavior

**Deliverable:** Responsive layout framework with nav

### Phase 2: Core Sections (Mid-Priority)

7. Build Hero section with CTA button
8. Build Services section with GlassCard component
9. Build WhyChooseUs section
10. Build Testimonials section
11. Generate service images (plumber, drain, water heater)

**Deliverable:** Full landing page with sections (no modals yet)

### Phase 3: Interactive Elements (High-Priority)

12. Build Modal component
13. Build BookingForm component with validation
14. Integrate booking modal into CTAs
15. Build BackToTop component with scroll tracking
16. Build useScrollAnimation hook for fade-in effects
17. Add animations across all sections

**Deliverable:** Interactive landing page with booking modal

### Phase 4: Contact & Polish (Final)

18. Create contact page with ContactForm
19. Build FAQ section with accordion
20. Add CTA block (secondary CTA)
21. Implement smooth scrolling for nav links
22. Add SEO meta tags and schema
23. Test color contrast and responsiveness

**Deliverable:** Production-ready landing page + contact page

### Phase 5: Refinement (Post-Launch)

- Collect feedback on glass effects and color contrast
- Adjust animations based on performance
- Optimize images
- Add analytics if needed

---

## 11. Technical Notes

### State Management

- **None required for MVP.** Use local component state (useState) for:
  - Modal visibility
  - Form inputs
  - Mobile menu toggle
  - Active tab in FAQ

### Animation Library

**Recommendation: CSS + Tailwind animations for simplicity**
- Use CSS keyframes in globals.css
- Tailwind animation utilities for hover states
- IntersectionObserver API for scroll animations (useScrollAnimation hook)
- No external animation library needed

### Form Handling

- **Client-side only** - no backend submission
- Use React Hook Form for cleaner form state
- Zod for validation (lightweight)
- Success/error messages via local state

### Routing

- **Next.js App Router** (default)
- Landing page: `/` (page.tsx)
- Contact page: `/contact` (contact/page.tsx)
- No other routes needed for MVP

### Mobile Menu

- Collapse at `md` breakpoint (≥768px)
- Slide-in from left on mobile
- Close on link click
- Animated burger icon (hamburger ↔ X)

---

## 12. Color Contrast Notes

**Accent on Dark Theme:**
- Orange (#FF7A00) on Dark Background (#1A1A1A): ✓ High contrast (WCAG AA+)
- Test with text contrast checker post-build
- If needed, adjust to #FF8C1A or #FF6B00

**Glass Cards:**
- Background: rgba(26, 26, 26, 0.7) maintains readability
- Will verify text legibility in preview
- Adjust opacity if needed

---

## 13. Future-Proofing & Extensibility

### Component Reusability

- **GlassCard:** Can be used for any glass-effect content
- **Button:** Flexible with variants (solid, outline, ghost)
- **Modal:** Generic, can be used for other modals (images, video, etc.)
- **Form:** Reusable with configurable fields

### Easy Additions

- Additional services: Add cards to Services.tsx
- More testimonials: Add to Testimonials.tsx array
- New FAQ items: Add to FAQ.tsx array
- Additional CTA blocks: Duplicate CTA.tsx section
- New pages: Create new route in app/ directory

### Scalability

- Component structure allows easy migration to state management (Redux, Zustand) later
- Form validation can be enhanced with server-side submission
- Analytics can be added to CTAs/links easily
- SEO schema can be expanded with more structured data

---

## 14. Build Order Summary

```
1. Setup: Layout, fonts, design tokens, globals.css
2. Layout: Header, Navigation, Footer, BackToTop
3. Sections: Hero, Services, WhyChooseUs, Testimonials, CTA, FAQ
4. UI: Button, GlassCard, Modal, Forms (Booking, Contact)
5. Hooks: useScrollAnimation, useMediaQuery, useModal
6. Contact Page: Full contact page layout
7. Images: Generate 3 service images
8. Animations: Add scroll effects, transitions, interactions
9. SEO: Meta tags, schema, accessibility
10. Testing & Polish: Color contrast, responsiveness, animations
```

---

## Notes

- **Prototype Status:** This is a prototype. Styles, colors, and animations can be adjusted post-build.
- **No Email:** Contact form captures info but doesn't send (placeholder behavior).
- **Local State Only:** All forms store data locally in state.
- **Full-Width Design:** No max-width containers; sections extend edge-to-edge.
- **Component Size:** Keeping components under 600 lines each for maintainability.
- **Glass Effects:** Will test contrast and adjust if needed.
- **Mobile First:** All breakpoints start mobile and enhance for larger screens.

---

**Ready to build? This document serves as the implementation blueprint. Each component can be built independently and integrated into the main landing page.**
