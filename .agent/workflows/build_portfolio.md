---
description: Build the portfolio using UI_RULES and ui-ux-pro-max tools
---

# Portfolio Build Workflow

This workflow combines the project-specific **UI_RULES.md** with the **ui-ux-pro-max** knowledge base to build the "Neon Noir" portfolio.

## 1. The Relationship

- **`UI_RULES.md`**: Your **Constitution**. It defines *WHAT* we are building (Colors, Fonts, specific Animations).
- **`ui-ux-pro-max`**: Your **Library**. It helps you find *HOW* to build standard parts or get inspiration for things not fully defined.

## 2. Setup Phase (One-time)

Use the rules to configure the tech stack.

1.  **Initialize Project:**
    ```bash
    npx create-next-app@latest ./ --typescript --tailwind --eslint
    ```
2.  **Install Dependencies:**
    ```bash
    npm install lucide-react framer-motion clsx tailwind-merge
    ```
3.  **Configure Tailwind (`tailwind.config.ts`):**
    - Copy the `colors` and `fontFamily` sections from `UI_RULES.md`.
    - *Tip:* Use `ui-ux-pro-max` to check for best practices in tailwind config if needed:
      ```bash
      python3 .shared/ui-ux-pro-max/scripts/search.py "tailwind config best practices" --stack html-tailwind
      ```

## 3. Development Loop (Repeated)

When building a specific component (e.g., "Pricing Section"):

### Step A: Check UI_RULES.md
- Read **Section 7 (Specific Modules)** in `UI_RULES.md`.
- *Example:* "Pricing Section: 3 Cards, Center Highlight, Neon Mint border."

### Step B: Search for Implementation Details (ui-ux-pro-max)
- If you need code patterns or UX tips for that component, query the database.
- *Example:* How to make a card hover effect or grid layout?
  ```bash
  python3 .shared/ui-ux-pro-max/scripts/search.py "pricing card layout" --domain landing
  python3 .shared/ui-ux-pro-max/scripts/search.py "hover card effect" --stack html-tailwind
  ```

### Step C: Implement & Customize
- Copy the code pattern found in Step B.
- **Apply the "Neon Noir" skin:** Replace generic colors with `var(--accent-primary)` or `bg-surface` from `UI_RULES.md`.
- **Apply the Motion:** Add the `stagger` animation defined in `UI_RULES.md`.

## 4. Anti-AI Validation

Before finishing a component, check **Section 9 (Anti-AI)** in `UI_RULES.md`.
- *Check:* Is the grid too perfect? -> Add asymmetry.
- *Check:* Is it too flat? -> Add the `noise` texture or colored glow.

## 5. Example Command Sequence

To build the **Hero Section**:

1.  **Consult Rules:** `UI_RULES.md` says "Outfit ExtraBold", "Neon Mint Accent", "Staggered Reveal".
2.  **Search Pattern:**
    ```bash
    python3 .shared/ui-ux-pro-max/scripts/search.py "hero section landing" --domain landing
    ```
3.  **Code:** Write the React component using the structure from search results but the styles from `UI_RULES.md`.

---
**Note:** You can run these python scripts directly in the terminal to get quick answers while coding.
