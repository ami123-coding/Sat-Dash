# SAT Practice Site (Simple, 1 Full Test)

This is a minimal Next.js App Router site that serves a full-length SAT-style test (original content).
It includes:
- Clean, modern UI
- Question-per-page flow
- Score report and review pages
- LocalStorage-based progress
- A content generator that creates **1 full test** (54 RW + 44 Math) on `npm install`

## Getting Started

1) **Download** and unzip this project.
2) In the project folder run:
```bash
npm install
npm run dev
```
3) Open http://localhost:3000

To regenerate content:
```bash
node scripts/generate-content.mjs
```

> Note: All content is *original* and template-based. Nothing here reproduces College Board text.

## Deploy
- Vercel recommended: import the repo, set framework to Next.js, and deploy.
- The generator runs on `postinstall`, so production will have a full test too.

## Roadmap (when you're ready)
- Timing per section + pause/resume
- Calculator rules
- Admin CMS + Postgres
- Adaptive modules
- Analytics and detailed score scaling
