# Ngenzeni Enterprise (PTY) LTD

A responsive construction company website built with Next.js 16, React 19 and Lenis. The visual direction follows the supplied TAGEX reference, adapted to Ngenzeni's construction services and contact information.

## Run locally

Requires Node.js 20.9 or newer.

```powershell
cd "C:\Users\Savhannah\Documents\my cweb\construction\ngenzeni-enterprise"
npm install
npm run dev
```

Open **http://localhost:3000**. The development server binds to this computer only. Stop it with Ctrl+C.

For a production build:

```powershell
npm run build
npm start
```

## What is included

- Floating navigation, dropdown menus and service search.
- Full-screen construction video that autoplays silently and loops without visible controls, with a still poster for loading, reduced-motion and data-saving preferences.
- Smooth scrolling, word-by-word heading reveals, section entrances and image parallax.
- Six service guides, a horizontal service carousel and enquiry links.
- Company introduction, residential/commercial information, construction process, FAQs and a downloadable planning checklist.
- Responsive navigation, keyboard-accessible dialogs and reduced-motion support.
- Local video, photos and fonts; no runtime media CDN dependency.
- Call and WhatsApp links for Director Slingene Sigubudu: **072 605 3707**.

The enquiry form prepares a WhatsApp message for the visitor to review and send. It does not send email, store enquiries, or require a backend account. It has a fallback link if a browser blocks the new WhatsApp tab.

## Edit the site

- `app/page.jsx`: page sections, navigation, interactions and enquiry form.
- `app/content.js`: services, project types and FAQs.
- `app/components/Motion.jsx`: smooth scrolling and scroll effects.
- `app/globals.css`: colours, typography, layout and responsive styles.
- `app/layout.jsx`: page title and metadata.
- `public/assets/`: local photographs and fonts.

Service scope and availability need confirmation directly with the company. Photographs are illustrative, not claims of completed company work. No unverified years of experience, certifications, projects, testimonials or address have been added.

The site is configured for local Next.js development. No online deployment has been completed.
