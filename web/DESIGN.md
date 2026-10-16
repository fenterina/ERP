# ERP design system

The ERP theme ports the portfolio's navy, royal-blue, mint, yellow, and coral
visual language into semantic tokens for data-dense screens. It keeps the
portfolio's personality while using higher-contrast text and clearer states for
forms and operational data.

## Tokens

Tokens live in [`src/app/globals.css`](./src/app/globals.css). The main values
are:

- Brand: `--royal-blue`, `--night-blue`, `--royal-tint`
- Surfaces: `--background`, `--surface`, `--surface-muted`, `--surface-dark`
- Text: `--foreground`, `--foreground-muted`, `--ink`, `--muted`
- Accents: `--mint`, `--yellow`, `--coral`
- Structure: `--border`, `--border-strong`, `--radius-sm`, `--radius-md`,
  `--radius-lg`, `--radius-pill`, and the three shadow tokens
- Typography: Inter is the body font and Poppins is the display font. Both are
  loaded with `next/font/google` in `src/app/layout.tsx`.

The `html.dark` variables provide the dark theme. The existing theme toggle
persists the user's choice and falls back to the system preference.

## Components

Reusable primitives are in `src/components/ui/`:

- `Button`: `primary`, `secondary`, `ghost`, and `danger` variants
- `Card`: shared bordered surface
- `Input`: tokenized input with focus and disabled states
- `Badge`: `success`, `warning`, `error`, `info`, and `neutral` tones
- `Table`, `TableHeader`, and `TableCell`: compact, responsive table building
  blocks
- `Modal`: accessible modal shell with backdrop and close control
- `Sidebar` and `Topbar`: layout primitives for future screens

Use `Card`, `Button`, `Input`, and `Badge` instead of repeating hard-coded
surface, control, and status classes. For dense tables, keep row text at the
small size used by `DataTable` and use `Badge` for status values.
