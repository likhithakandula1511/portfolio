# Kandula Likhitha — Portfolio

A professional personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Editing Content

All personal content lives in one file: [`data/portfolio.ts`](data/portfolio.ts).
Update your name, headline, bio, skills, projects, FlowX case study, experience,
and education there — no need to touch any component.

Anything wrapped in `[ADD ...]` is a placeholder. Replace it with your real
information before deploying.

## Adding Your Resume

Drop your resume PDF at `public/resume.pdf`. The Resume section automatically
detects the file and enables the download button; until then it shows a clean
placeholder state.

## Adding Images

- Profile photo: replace `public/images/profile-placeholder.svg` (update the
  path in `data/portfolio.ts` if you use a different filename/extension).
- Project screenshots: add files under `public/projects/` and reference them
  in each project's `image` / `screenshots` fields.

## Connecting the Contact Form

The contact form posts to `app/api/contact/route.ts`, which currently
validates input and returns success without sending an email. To make it
functional, wire up an email provider (e.g. Resend, SendGrid, Postmark)
inside that route using an API key stored in an environment variable
(`.env.local`, and the equivalent in your Vercel project settings) — never
commit secrets or expose them to client-side code.

## Build & Deploy

```bash
npm run build
npm run start
```

Deploy directly to [Vercel](https://vercel.com) by importing this repository.
No environment variables are required for the base site; add them only if
you connect a contact-form email provider.
