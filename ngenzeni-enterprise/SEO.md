# Search setup

Canonical website: **https://www.ngenzeni.co.za**. This matches the existing Vercel setup, where the apex domain redirects to `www`. Keep the URL in `app/lib/site.js` consistent with the final production domain.

## Implemented

- Unique server-rendered titles, descriptions, canonical URLs, Open Graph and Twitter metadata for the homepage, six service pages and privacy page.
- `/robots.txt` and `/sitemap.xml`, listing only real canonical pages. Sitemap dates are intentionally omitted rather than claiming content changes on every deployment.
- Static, linked service guides under `/services/`: general building, renovations, roofing, brickwork, paving and painting. Each has its own visible content, FAQs, related links and contact actions.
- GeneralContractor, WebSite, Service and BreadcrumbList JSON-LD. Business details come from the owner and supplied certificate. South Africa service coverage and the Fleurhof contact address were confirmed by the owner on 8 November 2026.
- Branded 1200 × 630 PNG sharing card at `/opengraph-image`, rendered locally by Next.js without external image/font requests.
- Vercel preview builds use `noindex, nofollow` and disallow crawling. Production pages allow indexing.
- Optional `GOOGLE_SITE_VERIFICATION` support for a genuine Search Console HTML verification token. Omit the variable until a token exists; never add placeholder verification codes.
- Google's owner-downloaded HTML verification file is served at `/google6c800cb304be1a1a.html`. Keep this file in `public/` after verification so Google can continue checking ownership. Publishing the file does not itself complete the Verify step in the owner's Search Console account.

## After production DNS works

1. Confirm both `ngenzeni.co.za` and `www.ngenzeni.co.za` have valid DNS and HTTPS in Vercel. The apex should redirect once to the `www` production site.
2. Open [Google Search Console](https://search.google.com/search-console). Add the `ngenzeni.co.za` domain property and publish Google's exact verification TXT record at the active DNS provider. Alternatively, verify the `https://www.ngenzeni.co.za/` URL-prefix property using the optional HTML verification token and redeploy.
3. Submit `https://www.ngenzeni.co.za/sitemap.xml`. Use URL Inspection for the homepage and service pages. Submission and verification still require the owner's Google account; they have not been performed by this code change.
4. Check the homepage in [Rich Results Test](https://search.google.com/test/rich-results) and inspect Search Console indexing reports after Google recrawls. Schema does not guarantee a rich result or ranking.
5. Create or update the company's [Google Business Profile](https://business.google.com/) using accurate contact and service-area details. Confirm whether the Fleurhof address receives customers before displaying it as a public customer-facing location. Add only real opening hours, project photographs and customer reviews.

Keep service details and business contact information current. Do not add unsupported certifications, invented ratings, fake project portfolios or duplicate town pages.

## References

- [Google: crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Google: local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google: organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google: build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
