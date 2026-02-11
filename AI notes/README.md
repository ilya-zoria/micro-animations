# Record Animation

Next.js app with **shadcn-style** structure, **Tailwind CSS**, and **TypeScript**. Includes the `AIVoiceInput` component in `components/ui`.

## Project structure

- **Components (UI):** `components/ui/` — reusable UI primitives (e.g. `ai-voice-input.tsx`)
- **Styles:** `app/globals.css` — global Tailwind; component-level styles via Tailwind classes
- **Utils:** `lib/utils.ts` — `cn()` for class names (clsx + tailwind-merge)
- **Path alias:** `@/*` → project root (see `tsconfig.json`)

### Why `components/ui`?

Using `components/ui` is the standard for shadcn-style projects:

- Keeps design system components in one place
- Matches shadcn CLI default (`npx shadcn@latest add button` adds to `components/ui`)
- Makes it clear which components are shared UI vs. page-specific

If your project used a different path (e.g. `src/components`), you’d need to either move UI components to `components/ui` or configure shadcn to use your path so addons and imports stay consistent.

## Setup (already done in this repo)

If you were starting from scratch:

1. **Next.js + TypeScript + Tailwind (e.g. via Create Next App):**
   ```bash
   npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
   ```

2. **shadcn-style setup:**
   - Create `components/ui` and `lib/utils.ts`
   - Add `cn()` in `lib/utils.ts` using `clsx` and `tailwind-merge`
   - Or use shadcn CLI: `npx shadcn@latest init` (choose no `src/`, use `@/*`)

3. **Install dependencies:**
   ```bash
   npm install lucide-react clsx tailwind-merge
   ```

## Run

```bash
npm install   # if not done yet
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The home page renders `AIVoiceInputDemo` with `AIVoiceInput`.

## AIVoiceInput component

- **Location:** `components/ui/ai-voice-input.tsx`
- **Demo:** `components/ai-voice-input-demo.tsx` (used in `app/page.tsx`)

**Props:**

| Prop               | Type              | Default  | Description                          |
|--------------------|-------------------|----------|--------------------------------------|
| `onStart`          | `() => void`      | —        | Called when recording starts         |
| `onStop`           | `(duration) => void` | —     | Called when recording stops (seconds)|
| `visualizerBars`   | `number`          | `6`      | Number of bars in the visualizer     |
| `demoMode`         | `boolean`         | `false`  | Auto-run recording animation         |
| `demoInterval`     | `number`          | `3000`   | Demo “recording” length (ms)         |
| `className`        | `string`          | —        | Extra class names                    |

**Dependencies:** `lucide-react` (Mic icon), `@/lib/utils` (cn). No image assets; responsive via Tailwind.

## Design

- **Background Color:** `#EEF0F6` (applied to body element)
- **Visualizer Color:** `#859933` (active), `rgba(133, 153, 51, 0.25)` (inactive)
- **Animation:** Smooth transitions with CSS animations and requestAnimationFrame for visualizer bars

## Repository Structure

```
micro-animations/
└── AI notes/
    ├── app/
    ├── components/
    ├── lib/
    └── ... (all project files)
```

The project is organized within the `AI notes` folder in the GitHub repository.
