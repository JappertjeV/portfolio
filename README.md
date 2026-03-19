# jasper.dev — Portfolio Site

My personal portfolio built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**.

**Live site:** [jasperveldhuizen.nl](https://jasperveldhuizen.nl)

---

## Features

- Single-page layout with smooth scroll (Hero → About → Projects → Skills → Contact)
- **GitHub Projects page** — live repo grid pulled from the GitHub API with ISR
- **Blog** — file-based Markdown blog, no CMS needed, just drop `.md` files in `content/blog/`
- Dark theme (zinc/slate palette), fully responsive, mobile-first
- Scroll-triggered fade-in animations via Framer Motion
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- SEO metadata + Open Graph tags

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Blog | gray-matter + remark (Markdown → HTML) |
| Deployment | Vercel |

## Getting Started

```bash
git clone https://github.com/JappertjeV/portfolio-site
cd portfolio-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout + SEO metadata
│   ├── page.tsx                # Home (all sections)
│   ├── not-found.tsx           # 404 page
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog post
│   └── projects/
│       └── page.tsx            # GitHub repos grid
├── components/
│   ├── Navigation.tsx          # Sticky nav with mobile menu
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── FadeIn.tsx              # Framer Motion scroll wrapper
├── content/
│   └── blog/                   # Add .md files here
├── lib/
│   ├── github.ts               # GitHub API utilities
│   ├── blog.ts                 # Markdown blog utilities
│   └── utils.ts                # cn() helper
└── public/
    └── robots.txt
```

## Writing Blog Posts

Create a `.md` file in `content/blog/`:

```markdown
---
title: "My Post Title"
date: "2026-03-20"
excerpt: "Short summary shown in the listing."
tags: ["automation", "javascript"]
---

Your content here...
```

The post is automatically available at `/blog/your-filename`.

## GitHub Projects Page

`/projects` fetches your public repos live from the GitHub API (non-forks, sorted by stars). Revalidates every hour via ISR.

To avoid rate limiting, set a GitHub token:

```bash
# .env.local  (never commit this file)
GITHUB_TOKEN=ghp_yourtoken
```

The token only needs `public_repo` read scope.

## Deploying to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push the repo to GitHub
2. Import it in [vercel.com](https://vercel.com)
3. Optionally add `GITHUB_TOKEN` in Project → Settings → Environment Variables

That's it — Vercel handles the rest.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GITHUB_TOKEN` | No | GitHub PAT to raise API rate limit (60 → 5000 req/hr) |

## License

MIT — feel free to use this as a template for your own portfolio.
