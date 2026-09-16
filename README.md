<div align="center">

# 🎨 Portfolio & Blog

**My corner of the internet — [dhruvs-page.vercel.app](https://dhruvs-page.vercel.app/)**

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

A personal site built on the Next.js **App Router** — portfolio, résumé and a
markdown-driven blog in one deploy.

## What's in it

| Route | What it is |
|---|---|
| `/` | Landing — work, skills and specimens, all driven from typed content files |
| `/blog` | Post index, read from local markdown at build time |
| `/posts/[id]` | Individual post, rendered through `remark` |
| `/resume` | Résumé as a first-class page, not a PDF link |
| `/favorites` | Things I keep coming back to |

## How it's put together

**Content is data, not JSX.** Everything the site says about me lives in typed modules under
`content/` — `projects.ts`, `experience.ts`, `skills.ts`, `profile.ts`, `agents.ts`,
`trending.ts`. Adding a project is editing one array, not touching a component. TypeScript
catches a missing field before the page ships.

**Posts are markdown on disk.** `lib/posts.ts` reads the filesystem, `gray-matter` parses
frontmatter and `remark` + `remark-html` render the body — statically generated, no CMS, no
database, no runtime fetch.

**Theming via `next-themes`,** with a `ThemeSwitch` component and no flash of wrong theme on
load.

**Custom presentation components** — `Specimen`, `SpecPlate`, `SectionHeading`, `Slot` and
`ProjectMedia` — give the site a deliberate typographic feel rather than a template one, plus
`AgentChain` and `Leaderboard` for showing off the multi-agent and trending-dashboard projects
inline.

## Layout

```
app/
  page.tsx              # landing
  blog/page.tsx         # post index
  posts/[id]/page.tsx   # post detail
  resume/page.tsx       # résumé
  favorites/page.tsx
  providers.tsx         # theme provider
content/                # typed content — projects, experience, skills, profile
components/             # Specimen, SpecPlate, AgentChain, Leaderboard, ThemeSwitch, …
lib/posts.ts            # markdown loader (gray-matter + remark)
```

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Stack

`Next.js 16` · `React 19` · `TypeScript` · `Tailwind CSS` + `@tailwindcss/typography`
· `next-themes` · `gray-matter` · `remark` · `lucide-react` · deployed on `Vercel`

---

<div align="center">
Built by <a href="https://github.com/dhruv9097">Dhruv Singh</a>
</div>
