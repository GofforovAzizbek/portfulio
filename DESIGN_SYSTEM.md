# 🎨 Portfolio Design & Customization Guide

## Color Scheme

### Light Mode (Default)

```
Background: #ffffff (Pure white)
Foreground: #0c0f14 (Dark gray-blue)
Card Background: rgba(0, 0, 0, 0.03) (Very light gray)
Card Border: rgba(0, 0, 0, 0.08) (Light border)
Text: #0c0f14 (Dark text)
Muted Text: rgba(12, 15, 20, 0.72) (Semi-transparent)
```

### Dark Mode

```
Background: #0b0d10 (Very dark gray-blue)
Foreground: #eaeef6 (Light gray-white)
Card Background: rgba(255, 255, 255, 0.06) (Subtle white)
Card Border: rgba(255, 255, 255, 0.12) (Subtle border)
Text: #eaeef6 (Light text)
Muted Text: rgba(234, 238, 246, 0.72) (Semi-transparent)
```

### Accent Colors (Gradients)

```
Purple: #7c3aed (rgba(124, 58, 237, X))
Blue: #3b82f6 (rgba(59, 130, 246, X))
Green: #10b981 (rgba(16, 185, 129, X))
```

---

## Design System

### Typography Scale

```
Hero Heading (H1):
  - Desktop: 3rem (48px)
  - Mobile: 2.25rem (36px)
  - Font Weight: 700 (Bold)
  - Line Height: 1.05

Section Heading (H2):
  - Desktop: 1.875rem (30px)
  - Mobile: 1.5rem (24px)
  - Font Weight: 600 (Semibold)

Body Text:
  - Font Size: 1rem (16px)
  - Line Height: 1.5-1.75
  - Font Weight: 400 (Regular)

Small Text:
  - Font Size: 0.875rem (14px)
  - Font Weight: 500
  - Tracking: 0.22em (Wide spacing)
```

### Spacing System

```
Extra Small: 0.5rem (8px)
Small: 1rem (16px)
Medium: 1.5rem (24px)
Large: 2rem (32px)
Extra Large: 3rem (48px)
Extra Extra Large: 5rem (80px)

Section Gaps: 4rem (64px) desktop, 3rem (48px) mobile
Component Gaps: 1rem (16px) to 1.5rem (24px)
```

### Border Radius

```
Subtle: 0.375rem (6px) - Small elements
Medium: 1rem (16px) - Buttons
Large: 1.5rem (24px) - Cards
Extra Large: 2rem (32px) - Full cards, headers
Pill: 9999px - Fully rounded (buttons, badges)
```

---

## Component Guidelines

### Button States

**Primary Button (Dark background)**

```
Default: bg-zinc-950, text-white
Hover: bg-zinc-900
Dark Mode: bg-white, text-zinc-950 → hover:bg-zinc-200
Padding: h-12, px-6
Border Radius: rounded-full
Font Size: text-sm, font-semibold
```

**Secondary Button (Light background)**

```
Default: border, bg-white/60, text-zinc-900
Hover: bg-white/80
Dark Mode: dark:bg-white/5, dark:text-zinc-100
Backdrop: blur-sm
```

### Cards

**Standard Card (glass-morphism)**

```
Background: rgba(0, 0, 0, 0.03) / rgba(255, 255, 255, 0.06)
Border: 1px solid, rgba(0, 0, 0, 0.08) / rgba(255, 255, 255, 0.12)
Backdrop Filter: blur(12px)
Padding: 1.5rem (24px)
Border Radius: rounded-3xl
Transition: All properties 300ms
Hover: Border color increases opacity
```

### Tags/Pills

```
Background: rgba(255, 255, 255, 0.6) light / rgba(255, 255, 255, 0.05) dark
Border: 1px solid, rgba(0, 0, 0, 0.1) light / rgba(255, 255, 255, 0.1) dark
Padding: px-2.5, py-1
Border Radius: rounded-full
Font Size: text-[11px]
Font Weight: font-medium
```

---

## Animation Details

### Scroll Reveal

```css
Duration: 700ms
Timing Function: cubic-bezier(0.2, 0.8, 0.2, 1) (Smooth ease-out)
Initial State: opacity-0, translateY(12px)
Final State: opacity-1, translateY(0)
Stagger: 80ms between elements
```

### Cursor Ring

```javascript
Inner Dot:
  - Size: 8px diameter
  - Position: Fixed, no smooth follow
  - Updates: Every pointer event

Outer Ring:
  - Size: 36px diameter
  - Position: Smooth interpolated (14% per frame)
  - Hover Expansion: 50px diameter
  - Updates: requestAnimationFrame (60fps)
```

### Theme Toggle

```
Transition Duration: Immediate
Storage: localStorage with key "theme"
Auto-detection: Uses prefers-color-scheme media query
Default: System preference
```

---

## Responsive Breakpoints

```
Mobile: 0px - 639px
  - Single column layout
  - Full-width components
  - Larger touch targets (h-12 minimum)
  - Reduced padding
  - Smaller fonts

Small Tablet: 640px - 767px
  - Transitional layout
  - Some 2-column grids

Tablet/Landscape: 768px - 1023px
  - 2-3 column layouts
  - Medium padding
  - Sidebar navigation

Desktop: 1024px+
  - Full multi-column layouts
  - Maximum width container (1536px)
  - Full navigation
  - Optimal spacing
```

---

## Custom Cursor Styling

### Default Cursor

```
Dot: 8px filled circle, 75% opacity
Ring: 36px hollow circle, 22% opacity border
Color: Inherited from foreground color
Position: Follows pointer with easing
Hover Effect: Ring expands to 50px
Z-index: 60 (above all content)
```

### Pointer Events

```
Hidden on Mobile: Cursor disabled for touch devices
Fine Pointer Only: Only shows on desktop with fine pointer
Non-interactive: Uses pointer-events: none
```

---

## Hero Section Layout

```
Desktop (1.15fr + 0.85fr grid):
  - Left: Main intro card (70%)
  - Right: Highlights card (30%)
  - Gap: 2rem (32px)

Mobile (Single column):
  - Both stack vertically
  - Full width
  - Gap: 1.25rem (20px)
```

### Hero Card Content Flow

```
1. Role + Location Pills
2. Main Heading (H1)
3. Summary Paragraph
4. Action Buttons
5. Social Links
```

---

## Project Card Layout

```
Card Height: Auto, with flexbox column
Content Order:
  1. Image/Emoji (text-5xl)
  2. Title + Index number
  3. Description (flex-grow)
  4. Technology tags
  5. Action buttons (flex-row, gap-3)

Hover Effects:
  - Border color lightens
  - Background gradient animation
  - Shadow enhancement
  - Smooth transitions
```

---

## Navigation Header

```
Position: Sticky top
Background: White/60 with blur (light) / Black/30 with blur (dark)
Border: Bottom 1px solid, with opacity
Height: 60px (3rem) + padding
Max Width: 6xl container (1280px)
Content: Logo + Nav + Actions
Alignment: Space-between with gap-3
```

---

## Typography Hierarchy

```
Page Structure:
1. Main H1 - Page/Hero title
2. Section H2 - Major sections (Projects, Skills, Contact)
3. Section Eyebrow - Uppercase label
4. Section Description - Secondary text
5. Card Titles (H3) - Component titles
6. Body Text - Regular paragraphs
7. Labels - Small, muted text
8. Links - Underlined with hover
```

---

## Accessibility Considerations

```
Contrast Ratios:
- Text on background: 7:1+ (AAA compliant)
- Text on cards: 6:1+ (AA compliant)
- Links: Underlined and color-differentiated

Focus Indicators:
- All interactive elements have visible focus states
- Keyboard navigation fully supported

Touch Targets:
- Minimum 44x44px (buttons)
- Adequate spacing between interactive elements

Semantic HTML:
- Proper heading hierarchy
- Link roles and aria-labels
- Navigation landmarks
- Alt text for images
```

---

## Performance Optimizations

```
CSS:
- Tailwind purges unused styles
- Critical CSS inlined
- Non-critical deferred

JavaScript:
- Minimal client-side JS
- Only cursor interaction
- Theme toggle (localStorage)
- Reveal animations (CSS-based)

Images:
- Next.js Image optimization
- Lazy loading
- Responsive sizes
- WebP format

Fonts:
- System font stack (no custom fonts)
- Reduces HTTP requests
- Faster rendering
```

---

## Dark Mode Implementation

```
Toggle Method: ThemeToggle component
Storage: localStorage (key: "theme")
Persistence: Across sessions
Auto-detection: System preference on first visit
HTML Attribute: dark class on <html> element
CSS Variables: Color scheme adjusts via CSS custom properties
Transition: Instant (no fade effect)
```

---

## Mobile-First Design Principles

```
Base Styles: Mobile optimized
Breakpoints: min-width media queries (mobile-first)
Grid: Single column by default
Spacing: Reduced on mobile
Typography: Smaller on mobile
Navigation: Simplified on mobile
Images: Responsive sizing
Touch: Larger targets for touch interaction
```

---

## Gradient Backgrounds

```
Light Mode Gradients:
1. Purple (124, 58, 237) - 22% opacity, 1400x700px
2. Blue (59, 130, 246) - 16% opacity, 1100x700px
3. Green (16, 185, 129) - 12% opacity, 900x520px

Positions:
1. Top-left to center-right
2. Top-right
3. Bottom-left

Effect: Subtle, non-intrusive background ambience
Mask: Radial gradient for fade
```

---

## Usage Example

To apply these guidelines when customizing:

1. **Keep text sizes** from the typography scale
2. **Use spacing** from the spacing system
3. **Follow color** from the color scheme
4. **Respect animations** for consistent feel
5. **Maintain contrast** for accessibility
6. **Keep responsive breakpoints** as defined

This ensures your portfolio maintains professional consistency!

---

**Design Version**: 1.0  
**Last Updated**: May 2026
