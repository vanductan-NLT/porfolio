# Modern Premium Design System & UI Rules
*Version 2.0 - "Neon Noir" Scalable Specification*

This document serves as the **absolute source of truth** for the design system. It is designed to be modular, scalable, and precise. All development must strictly adhere to these specifications.

---

## 1. Design Philosophy (Triết lý thiết kế)
- **Core Vibe:** Modern, Premium, Youthful, Tech-forward.
- **Key Principle:** "Content is King, Motion is Queen."
- **Aesthetic:** Deep Dark Backgrounds + Neon Mint Accents + High Contrast Typography.
- **Anti-AI:** Avoid generic layouts by using asymmetry, noise textures, and organic motion.

---

## 2. Typography System (Hệ thống Font chữ)

**Font Families:**
- **Headings:** `Outfit` (Geometric, Bold).
- **Body:** `Manrope` (Clean, Readable).
- **Code:** `JetBrains Mono` (Technical details).

### Type Scale (Tỷ lệ chữ)
*Based on a Major Third (1.250) scale.*

| Role | Element | Font Size (Desktop) | Font Size (Mobile) | Line Height | Weight | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `.display` | `64px` (4rem) | `40px` (2.5rem) | `1.1` | ExtraBold (800) | `-0.02em` |
| **H1** | `h1` | `48px` (3rem) | `32px` (2rem) | `1.2` | Bold (700) | `-0.02em` |
| **H2** | `h2` | `32px` (2rem) | `24px` (1.5rem) | `1.3` | Bold (700) | `-0.01em` |
| **H3** | `h3` | `24px` (1.5rem) | `20px` (1.25rem) | `1.4` | SemiBold (600) | `-0.01em` |
| **H4** | `h4` | `20px` (1.25rem) | `18px` (1.125rem) | `1.4` | SemiBold (600) | `0` |
| **Body L** | `.body-lg` | `18px` (1.125rem) | `16px` (1rem) | `1.6` | Medium (500) | `0` |
| **Body M** | `p`, `body` | `16px` (1rem) | `16px` (1rem) | `1.6` | Medium (500) | `0` |
| **Body S** | `.body-sm` | `14px` (0.875rem) | `14px` (0.875rem) | `1.6` | Regular (400) | `0` |
| **Caption** | `small` | `12px` (0.75rem) | `12px` (0.75rem) | `1.5` | Medium (500) | `0.02em` |
| **Button** | `.btn` | `16px` (1rem) | `16px` (1rem) | `1.0` | SemiBold (600) | `0.02em` |

---

## 3. Spacing & Geometry (Khoảng cách & Hình khối)

### Spacing Scale (Hệ thống khoảng cách)
*Base unit: 4px (0.25rem).*

| Token | Size | Pixels | Usage |
| :--- | :--- | :--- | :--- |
| `xs` | `1` | `4px` | Tight grouping (icon + text) |
| `sm` | `2` | `8px` | Small gaps, padding inside buttons |
| `md` | `4` | `16px` | Standard padding, card gaps |
| `lg` | `6` | `24px` | Section gaps (mobile), large padding |
| `xl` | `8` | `32px` | Section gaps (desktop) |
| `2xl` | `12` | `48px` | Major component separation |
| `3xl` | `20` | `80px` | Section padding (Mobile) |
| `4xl` | `32` | `128px` | Section padding (Desktop) |

### Border Radius (Bo góc)
- **None:** `0px` (Sharp edges for brutalist accents).
- **Sm:** `8px` (Inner elements, checkboxes).
- **Md:** `12px` (Inputs, small cards).
- **Lg:** `16px` (Standard cards).
- **Xl:** `24px` (Large containers, modals).
- **Full:** `9999px` (Buttons, Badges, Avatars).

---

## 4. Component Specifications (Chi tiết thành phần)

### 4.1. Buttons
*Shape: Pill (Full Radius). Font: Manrope SemiBold.*

| Variant | Height | Padding X | Padding Y | Background | Text Color | Border | Hover Effect |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary** | `48px` | `32px` | `12px` | Neon Mint (`#7AF298`) | Black (`#000000`) | None | Scale 1.05 + Glow |
| **Secondary** | `48px` | `32px` | `12px` | Transparent | White (`#FFFFFF`) | 1px Solid `#333333` | Bg `#222222` + Border White |
| **Small** | `36px` | `20px` | `8px` | (Same as above) | (Same as above) | (Same as above) | (Same as above) |
| **Icon Only** | `48px` | `12px` | `12px` | Surface (`#222222`) | White (`#FFFFFF`) | None | Bg Neon Mint + Text Black |

### 4.2. Cards
- **Padding:** `24px` (Desktop) / `20px` (Mobile).
- **Background:** Surface (`#1A1A1A`).
- **Border:** 1px Solid Subtle (`#333333`).
- **Radius:** `24px` (Xl).
- **Hover:** Translate Y `-8px`, Border Color -> Neon Mint.

### 4.3. Inputs
- **Height:** `48px`.
- **Padding:** `0 16px`.
- **Radius:** `12px` (Md).
- **Background:** `#222222`.
- **Border:** None (Default) -> 2px Neon Mint (Focus).
- **Placeholder:** `#666666`.

---

## 5. Layout & Breakpoints (Bố cục)

### Breakpoints (Tailwind Default)
- **Mobile:** `< 640px`
- **Tablet:** `640px - 1024px`
- **Desktop:** `> 1024px`
- **Wide:** `> 1280px`

### Container Max-Widths
- **Standard:** `max-w-7xl` (1280px) - *Main content wrapper.*
- **Narrow:** `max-w-4xl` (896px) - *Blog posts, focused reading.*
- **Full:** `w-full` - *Hero backgrounds, marquees.*

### Grid System
- **Desktop:** 12 Columns (`grid-cols-12`), Gap `32px`.
- **Tablet:** 6 Columns (`grid-cols-6`), Gap `24px`.
- **Mobile:** 4 Columns (`grid-cols-4`) or 1 Column (`grid-cols-1`), Gap `16px`.

---

## 6. Color Palette (Màu sắc)

**Dark Mode (Primary Preference)**
- **Background:** `#111111` (Rich Black)
- **Surface:** `#1A1A1A` (Card Bg)
- **Surface Highlight:** `#222222` (Input/Hover Bg)
- **Primary Accent:** `#7AF298` (Neon Mint)
- **Secondary Accent:** `#B5B5B5` (Soft Gray)
- **Text Primary:** `#FFFFFF` (White)
- **Border:** `#333333` (Subtle Dark Border)
- **Error:** `#FF5555`
- **Success:** `#7AF298`

**Tailwind Config:**
```js
colors: {
  background: "#111111",
  surface: {
    DEFAULT: "#1A1A1A",
    highlight: "#222222",
  },
  primary: {
    DEFAULT: "#7AF298", // Neon Mint
    foreground: "#000000",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#B5B5B5",
  },
  border: "#333333",
}
```

---

## 7. Motion & Interaction (Chuyển động)

- **Global Timing:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (Ease Out).
- **Duration:** `300ms` (Standard), `500ms` (Large transitions).

### Specific Animations
1.  **Staggered Reveal:**
    - Items appear one by one with `100ms` delay.
    - Start: `opacity: 0`, `y: 40px`.
    - End: `opacity: 1`, `y: 0`.
2.  **Curtain Reveal (Loading):**
    - Overlay slides up (`y: -100%`).
    - Content scales down (`scale: 1.1` -> `1.0`).
3.  **Hover Lift:**
    - `transform: translateY(-8px)`.
    - `transition: all 0.3s ease-out`.

---

## 8. Anti-AI Aesthetic Strategy
- **Asymmetry:** Use 40/60 or 30/70 column splits.
- **Noise:** Overlay `noise.png` (3% opacity) on backgrounds.
- **Glow:** Use colored shadows (`shadow-[0_0_30px_rgba(122,242,152,0.2)]`) instead of black shadows.
- **Typography:** Mix huge Display fonts with tiny technical labels.

---

## 9. Style Keywords Reference
- **Core:** Dark Mode, Retro-Futurism, Neon Noir.
- **Supporting:** Aurora UI (Gradients), Glassmorphism (Blur).
- **Avoid:** Neumorphism, Claymorphism, Brutalism.
