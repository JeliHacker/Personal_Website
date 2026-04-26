# eligooch.com

My personal website — TIL, blog, and projects.

## Stack

- [Astro](https://astro.build) — Static site generator
- Markdown/MDX — Content
- Cloudflare Pages — Hosting (free)
- Buttondown — Newsletter (optional)

## Development

```bash
npm install
npm run dev
```

Site runs at http://localhost:4321

## Creating Content

### New TIL post

```bash
npm run new-til "Title of your TIL"
# Creates src/content/til/title-of-your-til.md
```

Or manually create a file in `src/content/til/`:

```markdown
---
title: "What I learned"
date: "2026-04-26"
tags: ["topic"]
---

Content here...
```

### New blog post

Create a file in `src/content/blog/`:

```markdown
---
title: "Blog Post Title"
date: "2026-04-26"
description: "A short description"
tags: ["topic"]
---

Content here...
```

## Deployment

Push to `main` and Cloudflare Pages auto-deploys.

### Setup Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect your GitHub repo
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add custom domain: `eligooch.com`

## Newsletter

Using [Buttondown](https://buttondown.com):

1. Create a free account
2. Update `BUTTONDOWN_USERNAME` in `src/components/Newsletter.astro`
3. Done!

## License

Content © Eli Gooch. Code is MIT.
