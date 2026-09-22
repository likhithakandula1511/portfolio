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

The contact form is wired to send email via [Resend](https://resend.com).
To make it functional:

1. Sign up for a free Resend account at [resend.com](https://resend.com)
   and create an API key.
2. Copy `.env.local.example` to `.env.local` and fill in:
   - `RESEND_API_KEY` — your Resend API key
   - `CONTACT_RECEIVER_EMAIL` — the email address that should receive
     messages submitted through the form
3. Restart the dev server so the new environment variables are picked up.

Until these are set, the form will show a clear error asking visitors to
email you directly instead of silently failing.

**Deploying to Vercel:** add the same two environment variables in your
Vercel project's Settings → Environment Variables. Never commit `.env.local`
or expose these values to client-side code — they are gitignored by default.

## Build & Deploy

```bash
npm run build
npm run start
```

Deploy directly to [Vercel](https://vercel.com) by importing this repository.
Add `RESEND_API_KEY` and `CONTACT_RECEIVER_EMAIL` as environment variables
in your Vercel project settings for the contact form to work in production.
