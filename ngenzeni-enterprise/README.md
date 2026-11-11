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
- The supplied Ngenzeni roof logo, orange controls and accents, warm cream backgrounds, and dark navy text across the homepage and privacy page.
- Full-screen construction video that autoplays silently and loops without visible controls, with a still poster for loading, reduced-motion and data-saving preferences.
- Smooth scrolling, word-by-word heading reveals, section entrances and image parallax.
- Six permanent service pages with practical guides, a horizontal service carousel and enquiry links.
- Search metadata, canonical URLs, structured business data, a sitemap, robots.txt and a branded social sharing image. See [SEO.md](SEO.md) for Google Search Console setup after DNS is connected.
- Company introduction, residential/commercial information, construction process, FAQs and a downloadable planning checklist.
- Responsive navigation, keyboard-accessible dialogs and reduced-motion support.
- Local video, photos and fonts; no runtime media CDN dependency.
- Call and WhatsApp links for Director Slingene Sigubudu: **010 516 0856**.
- A dedicated `/privacy-policy` page with company registration details, the WhatsApp enquiry flow, POPIA rights and privacy contacts. Linked from the footer and enquiry form.

The enquiry form prepares a WhatsApp message for the visitor to review and send. It does not send email, store enquiries, or require a backend account. It has a fallback link if a browser blocks the new WhatsApp tab.

## Edit the site

- `app/page.jsx`: homepage metadata, structured data and server-rendered entry point.
- `app/components/Home.jsx`: homepage sections, navigation, interactions and enquiry form.
- `app/lib/site.js`: canonical domain, company information and shared search metadata.
- `app/lib/service-guides.js`: detailed service content and questions.
- `app/services/[slug]/page.jsx`: static service pages and service/breadcrumb structured data.
- `app/content.js`: services, project types and FAQs.
- `app/privacy-policy/page.jsx`: privacy policy, company particulars and page metadata.
- `app/privacy-policy/privacy.module.css`: responsive privacy page styling.
- `app/components/Brand.jsx`: shared company mark and homepage link.
- `app/components/Motion.jsx`: smooth scrolling and scroll effects.
- `app/globals.css`: colours, typography, layout and responsive styles.
- `app/layout.jsx`: page title and metadata.
- `public/assets/`: local photographs and fonts.

Service scope and availability need confirmation directly with the company. Photographs are illustrative, not claims of completed company work. The privacy page uses registration particulars from the user-provided CIPC disclosure certificate issued on 23 June 2021 and the contact address confirmed by the owner on 8 November 2026; it does not reproduce the certificate scan, personal identity number or tax number. No unverified years of experience, certifications, projects or testimonials have been added.

The policy reflects the current browser-to-WhatsApp form. Update it when collection, hosting, tracking, retention or business contact details change. Legal references: [POPIA](https://www.gov.za/documents/protection-personal-information-act), [Information Regulator rights guidance](https://inforegulator.org.za/privacy-notice/), [complaints](https://inforegulator.org.za/complaints/), [contact details](https://inforegulator.org.za/contact-us/) and [WhatsApp privacy policy](https://www.whatsapp.com/legal/privacy-policy), checked on 8 November 2026.

The project runs locally and has an existing Vercel deployment. The intended custom domain is `https://www.ngenzeni.co.za`; DNS activation and Google Search Console verification must be completed before confirming public indexing.
