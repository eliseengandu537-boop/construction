import Link from 'next/link';
import { notFound } from 'next/navigation';
import Brand from '../../components/Brand';
import StructuredData from '../../components/StructuredData';
import { services } from '../../content';
import { serviceGuides } from '../../lib/service-guides';
import { site, absoluteUrl, businessSchema, pageMetadata } from '../../lib/site';
import styles from './service.module.css';

export const dynamicParams = false;
export const generateStaticParams = () => services.map(({ slug }) => ({ slug }));

function getService(slug) {
  const service = services.find(item => item.slug === slug);
  if (!service) notFound();
  return { ...service, ...serviceGuides[service.id] };
}

export async function generateMetadata({ params }) {
  const service = getService((await params).slug);
  return pageMetadata({ title: service.seoTitle, description: service.description, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }) {
  const service = getService((await params).slug);
  const url = absoluteUrl(`/services/${service.slug}`);
  const whatsapp = `https://wa.me/${site.phone.replace('+', '')}?text=${encodeURIComponent(`Hello Slingene, I would like to enquire about ${service.title.toLowerCase()} with Ngenzeni Enterprise. My project is in: `)}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      businessSchema,
      { '@type': 'Service', '@id': `${url}#service`, name: service.heading, serviceType: service.title, description: service.description, url, provider: { '@id': businessSchema['@id'] }, areaServed: { '@type': 'Country', name: 'South Africa' } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: service.heading, item: url },
      ] },
    ],
  };
  return <>
    <StructuredData data={structuredData} />
    <a href="#main" className="skip-link">Skip to content</a>
    <header className={styles.header}><div className={styles.headerInner}>
      <Brand href="/" />
      <nav aria-label="Service navigation"><Link href="/#services">All services</Link><a className="button button-primary" href={`tel:${site.phone}`}>Call us <span aria-hidden="true">↗</span></a></nav>
    </div></header>
    <main id="main" className={styles.main}>
      <div className={styles.shell}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}><ol><li><Link href="/">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">{service.title}</li></ol></nav>
        <section className={styles.hero} aria-labelledby="service-heading">
          <div><span className="section-label"><i /> Construction across South Africa</span><h1 id="service-heading">{service.heading}<span>.</span></h1><p className={styles.intro}>{service.intro}</p><div className={styles.actions}><a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Discuss your project <span aria-hidden="true">↗</span></a><Link className="text-link" href="/#contact">Request a quotation <span aria-hidden="true">↗</span></Link></div></div>
          <figure className={styles.photo}><img src={`/assets/${service.image}`} alt={service.alt} width={800} height={640} fetchPriority="high" /><figcaption>Illustrative image; not a completed Ngenzeni project.</figcaption></figure>
        </section>
        <div className={styles.contentGrid}>
          <div className={styles.article}>
            {service.sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}
            <section><h2>What to share with your enquiry</h2><ul className={styles.checklist}>{service.details.map(detail => <li key={detail}>{detail}</li>)}</ul><p>Include your town or area, preferred timing and any photographs or drawings. Director {site.director} will discuss suitability, availability and any further information needed for your project.</p></section>
            <section><h2>Your questions, answered</h2><div className={styles.faqs}>{service.questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
          </div>
          <aside className={styles.contact} aria-label="Company contact details"><span className="mini-label">LET’S TALK ABOUT YOUR BUILD</span><h2>A clear starting point.</h2><p>Speak directly with {site.director}, Director of {site.legalName}.</p><a className={styles.phone} href={`tel:${site.phone}`}>{site.displayPhone}</a><a className={styles.email} href={`mailto:${site.email}`}>{site.email}</a><a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp <span aria-hidden="true">↗</span></a><h3>Based in Fleurhof</h3><address>{site.address.streetAddress}<br />{site.address.addressLocality}, {site.address.addressRegion}, {site.address.postalCode}<br />South Africa</address><p>Serving South Africa. Project availability and site arrangements are confirmed after reviewing your location and requirements.</p><Link className="text-link" href="/privacy-policy">Privacy policy <span aria-hidden="true">↗</span></Link></aside>
        </div>
        <section className={styles.related}><span className="section-label">Plan the whole project</span><h2>Explore our other services.</h2><div>{services.filter(item => item.id !== service.id).map(item => <Link href={`/services/${item.slug}`} key={item.id}>{item.title}<span aria-hidden="true">↗</span></Link>)}</div></section>
      </div>
    </main>
    <footer className={styles.footer}><div className={styles.shell}><Brand footer href="/" /><div><p>{site.legalName}</p><p>Registration {site.registration}</p><Link href="/">Back to the website <span aria-hidden="true">↗</span></Link></div></div></footer>
  </>;
}
