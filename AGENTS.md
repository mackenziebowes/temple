# AGENTS.md

Coding agent instructions for this repository.

## Project Overview

Full-stack TypeScript monorepo:
- **app/client**: Next.js 16 frontend (React 19, Tailwind CSS, shadcn/ui)
- **app/server**: Hono backend API running on Bun

## Build/Lint/Test Commands

### Client (app/client)

```bash
bun run dev          # Start development server (port 3000)
bun run build        # Production build
bun run start        # Start production server
bun run lint         # Run ESLint
```

### Server (app/server)

```bash
bun run dev          # Start development server with hot reload (port 3050)
```

### Running Single Tests

No test framework configured. When adding tests:
- Use Vitest with `bun test`
- Run single test: `bun test path/to/test.test.ts`
- Run matching pattern: `bun test -t "test name pattern"`

### Type Checking

```bash
bunx tsc --noEmit    # From app/client or app/server
```

## Project Structure

```
app/
├── client/                 # Next.js frontend
│   ├── app/               # App Router pages, _components/, globals.css, layout.tsx
│   ├── components/ui/     # shadcn/ui components
│   ├── hooks/             # Custom React hooks
│   └── lib/               # API client, config, utils, zustand stores
├── client-meta/           # Documentation
├── client-utility/        # Theme configurations
└── server/src/            # Hono API (config/, index.ts, root.ts)
```

## Code Style Guidelines

### Imports

```typescript
// 1. External imports first
import { Hono } from "hono";
import * as React from "react";
// 2. Internal imports (using path aliases)
import { cn } from "@/lib/utils";
```

### Naming Conventions

- **Components**: PascalCase (`Button`, `CardHeader`)
- **Functions**: camelCase (`getAPI`, `useIsMobile`)
- **Constants**: SCREAMING_SNAKE_CASE (`LOCAL_CONFIG`, `MOBILE_BREAKPOINT`)
- **Types/Interfaces**: PascalCase (`APIArgs`, `CorsOptions`)
- **Files**: kebab-case for utilities, PascalCase for components
- **Private folders**: Prefix with underscore (`_components/`)

### React Components

```tsx
// Use function declarations, not arrow functions
export default function MyComponent() {
  return <div>Content</div>
}
// Named exports for sub-components
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("base-classes", className)} {...props} />
}
export { Card, CardHeader, CardContent }
```

### TypeScript

- **Strict mode enabled** - handle potential undefined/null
- **Type imports**: Use `import type { }` for type-only imports
- **Props**: Use `React.ComponentProps<"element">` for extending native elements
- **Avoid**: `any` type, non-null assertions without guards

```typescript
type APIArgs = { route: string; resource?: "main" };
export async function getAPI(args: APIArgs): Promise<unknown> {
  const env = getEnv();
  if (args.resource == undefined || args.resource == "main") {
    return env.remote_resources.main;
  }
}
```

### Styling

- **Tailwind CSS v4** with CSS variables for theming
- **Class merging**: Use `cn()` utility from `@/lib/utils`
- **Component variants**: Use `class-variance-authority` (cva)
- **Data attributes**: Add `data-slot` for component identification

```tsx
function Button({ className, variant = "default", ...props }) {
  return <button data-slot="button" className={cn(buttonVariants({ variant, className }))} {...props} />
}
```

### State Management

- **Zustand** for global state with Zod schema validation
- **React Query** (@tanstack/react-query) for server state
- **next-themes** for theme management

```typescript
import { create } from "zustand";
import { z } from "zod";
const stateSchema = z.object({
  value: z.number(),
  setValue: z.function({ input: [z.number()], output: z.void() }),
});
type State = z.infer<typeof stateSchema>;
export const useStore = create<State>()((set) => ({
  value: 0,
  setValue: (value) => set(() => ({ value })),
}));
```

### Error Handling

```typescript
app.onError((err, c) => c.text(`${err}`, 500));
export const getEnv = (): Config => {
  switch (process.env.ENVIRONMENT) {
    case "LOCAL": return LOCAL_CONFIG;
    default:
      console.error("Unknown ENVIRONMENT env variable value.");
      throw new Error("Application Exiting.");
  }
};
```

### Other Guidelines

- **Comments**: Do not add comments unless explicitly requested
- **Environment Variables**: Client uses `NEXT_PUBLIC_` prefix; server uses standard naming
- **shadcn/ui**: Components in `@/components/ui/`, install with `bunx --bun shadcn@latest add <component>`, icons via Lucide

## Package Manager

- **Use Bun** for all package operations
- Install: `bun install` | Add: `bun add <package>` | Dev: `bun add -d <package>`
