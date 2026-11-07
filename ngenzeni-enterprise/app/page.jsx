'use client';

import { useEffect, useRef, useState } from 'react';
import Motion, { ScrollHeading } from './components/Motion';
import { services, projectTypes, faqs } from './content';

const PHONE = '+27726053707';
const WHATSAPP = 'https://wa.me/27726053707?text=Hello%20Slingene%2C%20I%27d%20like%20to%20discuss%20a%20construction%20project.';

function Icon({ name = 'arrow', className = '' }) {
  const paths = {
    arrow: <><path d="M6 18 18 6M6 6h12v12" /></>,
    down: <><path d="M12 4v16m-6-6 6 6 6-6" /></>,
    chevron: <path d="m7 10 5 5 5-5" />,
    phone: <path d="M8 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-4l-5-2-2 3a14 14 0 0 1-7-7l3-2Z" />,
    chat: <><path d="M21 11.5a9 9 0 0 1-9.5 9 10 10 0 0 1-4-.9L3 21l1.4-4.5A9.5 9.5 0 1 1 21 11.5Z" /><path d="m8 7 2 3-1 1c1 2 2 3 4 3l1-1 3 2" /></>,
    whatsapp: <><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z" /><g transform="translate(6 6) scale(.5)"><path d="M8 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-4l-5-2-2 3a14 14 0 0 1-7-7l3-2Z" /></g></>,
    shield: <><path d="m12 3 8 4v6c0 5-8 8-8 8s-8-3-8-8V7Z" /><path d="m8 12 3 3 5-6" /></>,
    plan: <><path d="M5 3h11l3 3v15H5Z M9 8h5M9 12h6M9 16h4" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v3" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    plus: <path d="M5 12h14M12 5v14" />,
    check: <path d="m5 12 4 4L19 6" />,
    pause: <path d="M9 5v14M15 5v14" />,
    play: <path d="m8 5 11 7-11 7Z" />,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></>,
  };
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.arrow}</svg>;
}

function Brand({ footer = false }) {
  return <a className={`brand ${footer ? 'brand-light' : ''}`} href="#home" aria-label="Ngenzeni Enterprise home"><svg className="brand-mark" viewBox="0 0 44 44" fill="none" aria-hidden="true"><path d="M7 36V15L17 7v29m0-29 21 14v15H28V24l-11-8M4 36h36" stroke="currentColor" strokeWidth="2.7" strokeLinejoin="round" /><path d="M30 7h8v8" stroke="#f68b4d" strokeWidth="3" /></svg><span>NGENZENI<small>ENTERPRISE (PTY) LTD</small></span></a>;
}

function Button({ children, href, secondary = false, ...props }) {
  return <a className={`button ${secondary ? 'button-secondary' : 'button-primary'}`} href={href} {...props}>{children}<span className="button-arrow"><Icon /></span></a>;
}

function SectionHeading({ label, title, description }) {
  return <div className="section-heading"><span className="section-label" data-reveal>{label}</span><ScrollHeading>{title}</ScrollHeading>{description && <p data-reveal>{description}</p>}</div>;
}

function ContactForm({ selectedService, onSelectService }) {
  const [prepared, setPrepared] = useState('');
  const [error, setError] = useState('');
  const submit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = key => String(data.get(key) || '').trim();
    if (!value('name') || !value('location') || value('details').length < 10) {
      setError('Please add your name, project location and a short description of at least 10 characters.');
      return;
    }
    const message = ['Hello Slingene, I would like to enquire about a project with Ngenzeni Enterprise.', '', `Name: ${value('name')}`, `Phone: ${value('phone')}`, `Location: ${value('location')}`, `Service: ${value('service')}`, `Timing: ${value('timing')}`, '', value('details')].join('\n');
    const url = `https://wa.me/27726053707?text=${encodeURIComponent(message)}`;
    setError('');
    setPrepared(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return <form className="quote-form" onSubmit={submit}>
    <span className="mini-label">YOUR NEXT PROJECT</span><h3>Tell us what you have in mind.</h3>
    <div className="form-row"><label>Your name <span>*</span><input name="name" autoComplete="name" placeholder="Full name" required maxLength={100} /></label><label>Phone number <span>*</span><input name="phone" type="tel" autoComplete="tel" placeholder="072 123 4567" required maxLength={30} pattern="[+0-9 \(\)\-]{7,30}" /></label></div>
    <label>Project location <span>*</span><input name="location" autoComplete="address-level2" placeholder="Town or area" required maxLength={150} /></label>
    <div className="form-row"><label>I'm interested in <span>*</span><select name="service" value={selectedService} onChange={event => onSelectService(event.target.value)} required><option value="" disabled>Select a service</option>{services.map(service => <option key={service.id}>{service.title}</option>)}<option>Other / let's discuss</option></select></label><label>Preferred timing<select name="timing" defaultValue="Just exploring"><option>Just exploring</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Later this year</option></select></label></div>
    <label>A little about your project <span>*</span><textarea name="details" rows={4} placeholder="What would you like to build or improve?" required minLength={10} maxLength={2000} /></label>
    <button className="button button-primary" type="submit">Prepare WhatsApp enquiry<span className="button-arrow"><Icon name="chat" /></span></button>
    <p className="form-note">Review and send your message in WhatsApp. Your details are not stored on this website.</p>
    {error && <p className="form-feedback error" role="alert">{error}</p>}
    {prepared && <p className="form-feedback" role="status">Your enquiry is ready. If WhatsApp did not open, <a href={prepared} target="_blank" rel="noopener noreferrer">open your prepared message here ↗</a>.</p>}
  </form>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [service, setService] = useState(null);
  const [selectedService, setSelectedService] = useState('');
  const [search, setSearch] = useState('');
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [trackPosition, setTrackPosition] = useState(0);
  const serviceDialog = useRef(null);
  const searchDialog = useRef(null);
  const privacyDialog = useRef(null);
  const track = useRef(null);
  const slides = [
    { image: 'building.jpg', alt: 'Timber framing and structure of a home under construction', caption: 'A vision taking shape' },
    { image: 'about.jpg', alt: 'Building worker beside brickwork and scaffolding', caption: 'Care in the details' },
    { image: 'exterior.jpg', alt: 'Aerial view of a building in progress', caption: 'From the ground up' },
  ];

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(preference.matches);
    const changed = () => setReducedMotion(preference.matches);
    preference.addEventListener('change', changed);
    const closeMenus = event => { if (event.key === 'Escape') { setDropdown(null); setMenuOpen(false); } };
    const outside = event => { if (!event.target.closest('.site-header')) setDropdown(null); };
    window.addEventListener('keydown', closeMenus);
    window.addEventListener('click', outside);
    return () => { preference.removeEventListener('change', changed); window.removeEventListener('keydown', closeMenus); window.removeEventListener('click', outside); };
  }, []);
  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(() => setSlide(value => (value + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, [paused, reducedMotion, slides.length]);
  useEffect(() => {
    if (service) serviceDialog.current?.showModal();
  }, [service]);

  const closeMenus = () => { setMenuOpen(false); setDropdown(null); };
  const openService = item => { closeMenus(); setService(item); };
  const enquire = item => {
    setSelectedService(item.title);
    serviceDialog.current?.close();
    closeMenus();
  };
  const scrollTrack = direction => track.current?.scrollBy({ left: direction * (track.current.clientWidth / (window.innerWidth > 760 ? 3 : 1) + 15), behavior: reducedMotion ? 'auto' : 'smooth' });
  const updateTrack = () => {
    const el = track.current;
    if (el) setTrackPosition(el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth));
  };
  const backdropClick = event => {
    if (event.target !== event.currentTarget) return;
    const box = event.currentTarget.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) event.currentTarget.close();
  };
  const downloadChecklist = () => {
    const contents = ['NGENZENI ENTERPRISE (PTY) LTD', 'YOUR PROJECT PLANNING CHECKLIST', '', '1. Your vision: what would you like to build or improve?', '2. Property location and your contact details.', '3. Photos of the existing space and approximate measurements.', '4. Drawings or plans, if available.', '5. Preferred materials, colours and reference images.', '6. Indicative budget and preferred start date.', '7. Site access and whether the property will be occupied.', '8. Questions about scope, specialist input and material supply.', '', 'Before work starts: agree the scope, inclusions, exclusions, responsibilities and programme.', 'Discuss and record changes before they are carried out.', '', 'Director: Slingene Sigubudu', 'Phone: 072 605 3707', 'WhatsApp: https://wa.me/27726053707'].join('\r\n');
    const url = URL.createObjectURL(new Blob([contents], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url; link.download = 'Ngenzeni-project-checklist.txt'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const searchResults = services.filter(item => `${item.title} ${item.description} ${item.details.join(' ')}`.toLowerCase().includes(search.toLowerCase().trim()));

  return <>
    <Motion />
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header">
      <div className="nav-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">
        <div className="nav-dropdown"><button aria-expanded={dropdown === 'services'} aria-controls="services-menu" onClick={() => setDropdown(dropdown === 'services' ? null : 'services')}>Our services <Icon name="chevron" /></button><div id="services-menu" className="dropdown-panel" hidden={dropdown !== 'services'}>{services.map(item => <button key={item.id} onClick={() => openService(item)}>{item.title}<Icon /></button>)}<a href="#services" onClick={closeMenus}>Explore all services <Icon /></a></div></div>
        <div className="nav-dropdown"><button aria-expanded={dropdown === 'spaces'} aria-controls="spaces-menu" onClick={() => setDropdown(dropdown === 'spaces' ? null : 'spaces')}>Your space <Icon name="chevron" /></button><div id="spaces-menu" className="dropdown-panel" hidden={dropdown !== 'spaces'}>{projectTypes.map((item,index) => <a key={item.label} href={`#space-${index}`} onClick={closeMenus}>{item.label}<Icon /></a>)}</div></div>
        <div className="nav-dropdown"><button aria-expanded={dropdown === 'resources'} aria-controls="resources-menu" onClick={() => setDropdown(dropdown === 'resources' ? null : 'resources')}>Plan your build <Icon name="chevron" /></button><div id="resources-menu" className="dropdown-panel" hidden={dropdown !== 'resources'}><a href="#process" onClick={closeMenus}>Our process<Icon /></a><a href="#faqs" onClick={closeMenus}>Frequently asked questions<Icon /></a><a href="#resources" onClick={closeMenus}>Project checklist<Icon /></a></div></div>
        <a href="#about" onClick={closeMenus}>About us</a>
      </nav><button className="icon-button nav-search" aria-label="Search construction services" onClick={() => searchDialog.current.showModal()}><Icon name="search" /></button><Button href="#contact" className="button button-primary nav-contact">Get in touch</Button><button className="menu-toggle icon-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <Icon name="close" /> : <span className="hamburger"><i /><i /></span>}</button></div>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!menuOpen}>{[['Home','#home'],['Our services','#services'],['About us','#about'],['Your space','#spaces'],['Plan your build','#process'],['Questions & answers','#faqs'],['Get in touch','#contact']].map(([label,href]) => <a key={href} href={href} onClick={closeMenus}>{label}<Icon /></a>)}</nav>
    </header>

    <main id="main">
      <section className="hero" id="home">
        <div className="hero-photo"><img src="/assets/hero.jpg" alt="Construction crane above the concrete structure of a new building" fetchPriority="high" /></div><div className="hero-overlay" />
        <div className="shell hero-inner"><div className="hero-copy"><span className="section-label hero-label"><i /> Your partner in building</span><h1>The foundation for<br />what comes next<span>.</span></h1><p>Construction, renovations and property improvements.<br /> Your vision. Strong foundations. New possibilities.</p><div className="hero-actions"><Button href="#services">Explore our services</Button><Button href="#contact" secondary>Let's talk about your build</Button></div><div className="hero-trust"><span><Icon name="shield" /></span><div><strong>Every project starts with a conversation</strong><small>Personal attention. A clear way forward.</small></div></div></div><a className="hero-scroll-cue" href="#about"><span><Icon name="down" /></span>Scroll to discover</a></div>
      </section>

      <section id="about" className="section-space about-section"><div className="shell"><SectionHeading label="About Ngenzeni" title="Good foundations. Great care. New possibilities." description="More than a building project. A space for your next chapter, with a personal approach from your first conversation to the final details." />
        <div className="about-grid"><div className="about-values glass-card" data-reveal>{[{icon:'plan',title:'A clear plan from the start',text:'Your ideas, site conditions and materials. A considered scope for the work ahead.'},{icon:'shield',title:'Care in the details',text:'Thoughtful preparation, from the first brick to the finishing touches.'},{icon:'people',title:'Someone you can talk to',text:'Speak directly with Director Slingene Sigubudu about what your project needs.'}].map(item => <div className="value-item" key={item.title}><span className="blue-icon"><Icon name={item.icon} /></span><h3>{item.title}</h3><p>{item.text}</p></div>)}<a className="text-link" href="#contact">Get to know Ngenzeni <Icon /></a></div>
          <div className="about-slideshow" data-reveal style={{'--reveal-delay':'100ms'}}>{slides.map((item,index) => <img src={`/assets/${item.image}`} alt={item.alt} key={item.image} loading="lazy" className={slide===index?'active':''} aria-hidden={slide!==index} />)}<div className="slideshow-bottom"><span className="section-label"><i />{slides[slide].caption}</span><div className="slide-controls"><div className="slide-dots">{slides.map((item,index) => <button key={item.image} aria-label={`Show construction image ${index+1}`} aria-pressed={slide===index} className={slide===index?'active':''} onClick={() => {setSlide(index);setPaused(true);}} />)}</div><button className="icon-button" aria-label={paused||reducedMotion?'Play image slideshow':'Pause image slideshow'} disabled={reducedMotion} onClick={() => setPaused(!paused)}><Icon name={paused||reducedMotion?'play':'pause'} /></button></div></div></div>
        </div>
      </div></section>

      <section id="services" className="section-space services-section"><div className="shell"><SectionHeading label="Our services" title="From the ground up. To the last detail." description="What do you have in mind? Explore the work you can discuss with us." />
        <div className="service-track" ref={track} onScroll={updateTrack} tabIndex={0} aria-label="Construction services. Scroll horizontally to explore all six services.">{services.map((item,index) => <article className="service-card glass-card" key={item.id} data-reveal style={{'--reveal-delay':`${Math.min(index,2)*70}ms`}}><button className="service-open" onClick={() => openService(item)} aria-label={`Explore ${item.title}`}><div className="service-image"><img src={`/assets/${item.image}`} alt={item.alt} loading="lazy" /><span className="service-index">{String(index+1).padStart(2,'0')}</span><span className="round-arrow"><Icon /></span></div><div className="service-copy"><h3>{item.title}</h3><p>{item.description}</p><span className="text-link">Explore service <Icon /></span></div></button></article>)}</div>
        <div className="range-bottom"><span>Let's find the right starting point for your project.</span><div className="range-controls"><span className="range-meter"><i style={{transform:`translateX(${trackPosition*200}%)`}} /></span><button className="icon-button" aria-label="Previous services" disabled={trackPosition<.01} onClick={() => scrollTrack(-1)}><Icon className="arrow-prev" /></button><button className="icon-button" aria-label="Next services" disabled={trackPosition>.99} onClick={() => scrollTrack(1)}><Icon className="arrow-next" /></button></div></div>
        <p className="service-note">Scope, service availability and any specialist requirements are confirmed after reviewing your project.</p>
      </div></section>

      <section id="spaces" className="section-space spaces-section"><div className="shell"><SectionHeading label="Your space. Our commitment." title="Built around the life you want to live." description="Different spaces. Different possibilities. The same care for the work ahead." />
        <div className="space-panels">{projectTypes.map((item,index) => <article id={`space-${index}`} className="space-panel glass-card" key={item.label} data-reveal><div className="space-copy"><span className="blue-icon number-icon">{String(index+1).padStart(2,'0')}</span><span className="mini-label">{item.label}</span><ScrollHeading as="h3">{item.title}</ScrollHeading><p>{item.description}</p><a className="text-link" href="#contact" onClick={() => setSelectedService(services.find(s=>s.id===item.service).title)}>{item.cta}<Icon /></a></div><div className="space-image"><img src={`/assets/${item.image}`} alt={item.alt} loading="lazy" data-parallax /></div></article>)}</div>
        <div className="spaces-foot"><span>Every project begins with your ideas</span><a href="#contact">New builds <Icon /></a><a href="#contact">Property improvements <Icon /></a><a href="#contact">Repairs & finishes <Icon /></a></div>
      </div></section>

      <section id="process" className="section-space process-section"><div className="shell"><SectionHeading label="Let's make it simple" title="A great build starts with a conversation." description="You know the space you imagine. Let's work out what comes next." /><div className="process-grid"><div className="process-photo" data-reveal><img src="/assets/about.jpg" alt="Building work and preparation on a construction site" loading="lazy" data-parallax /><div><span>Ideas into plans.<br />Plans into possibilities.</span><Icon /></div></div><div className="process-steps">{[{title:'Tell us your vision',text:'Share your location, what you want to build or improve, and any plans, photos or ideas you have.',link:'Explore our services',href:'#services'},{title:'Define the details',text:'Discuss site conditions, materials and requirements. Review the quotation, responsibilities and proposed programme.',link:'Send an enquiry',href:'#contact'},{title:'Bring it to life',text:'Keep communication open as work progresses. Agree changes before they happen and review the completed scope together.',link:'Call 072 605 3707',href:`tel:${PHONE}`}].map((step,index)=><article className="process-step glass-card" key={step.title} data-reveal><span className="blue-icon number-icon">{index+1}</span><div><h3>{step.title}</h3><p>{step.text}</p><a className="text-link" href={step.href}>{step.link}<Icon /></a></div></article>)}</div></div></div></section>

      <section id="faqs" className="section-space faq-section"><div className="shell faq-shell"><SectionHeading label="A little help" title="Your questions, answered." description="A clearer picture before the first brick is laid." /><div className="faq-list" data-reveal>{faqs.map(([question,answer],index)=><details key={question}><summary><span className="faq-number">{String(index+1).padStart(2,'0')}</span>{question}<Icon name="plus" /></summary><p>{answer}</p></details>)}</div></div></section>

      <section id="resources" className="resources-section"><div className="shell"><div className="resource-banner glass-card" data-reveal><span className="resource-icon"><Icon name="plan" /></span><div><span className="mini-label">A little planning makes a difference</span><h2>Your next build. A clearer plan.</h2><p>Location, photos, measurements, materials and timing. Keep the essentials together with our project checklist.</p></div><button className="button button-primary" onClick={downloadChecklist}>Get the checklist<span className="button-arrow"><Icon name="download" /></span></button></div></div></section>

      <section className="inspiration-section section-space"><div className="shell"><div className="inspiration-heading"><span className="section-label">From possibility to a place of your own</span><span>Spaces to inspire your next conversation <Icon /></span></div><div className="inspiration-grid">{[['home.jpg','A place to call home'],['building.jpg','A vision taking shape'],['interior.jpg','A fresh perspective'],['exterior.jpg','Room to grow']].map(([image,caption],index)=><a className="inspiration-item" href="#contact" key={caption} data-reveal style={{'--reveal-delay':`${index*70}ms`}}><img src={`/assets/${image}`} alt={caption} loading="lazy" /><div>{caption}<Icon /></div></a>)}</div><p className="image-note">Images illustrate construction and design possibilities; they are not a portfolio of completed company projects.</p></div></section>

      <section id="contact" className="contact-section section-space"><div className="shell"><SectionHeading label="Get in touch" title="Ready to build your next chapter?" description="The right conversation. A considered plan. Let's get to work." /><div className="contact-grid"><div className="contact-copy" data-reveal><span className="section-label">Let's talk about your project</span><h3>A new space starts<br />with a hello<span>.</span></h3><p>A new build, a renovation or a finishing touch. Speak directly with Slingene about what you have in mind.</p><div className="director-card"><span className="director-avatar">SS</span><div><strong>Slingene Sigubudu</strong><span>Director · Ngenzeni Enterprise (PTY) LTD</span></div></div><a className="contact-phone" href={`tel:${PHONE}`}>072 605 3707<Icon /></a><div className="contact-methods"><a href={`tel:${PHONE}`}><Icon name="phone" />Call Slingene</a><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><Icon name="chat" />WhatsApp us<Icon /></a></div><p className="contact-small">Have photos or drawings? You can share them in your WhatsApp conversation.</p></div><div className="contact-form-card glass-card" data-reveal><ContactForm selectedService={selectedService} onSelectService={setSelectedService} /></div></div></div></section>
    </main>

    <footer className="site-footer"><div className="shell"><div className="footer-grid"><div className="footer-brand"><Brand footer /><p>Strong foundations.<br />New possibilities.</p><span>Construction. With purpose.</span></div><div><h3>WHAT WE DO</h3>{services.slice(0,4).map(item=><button key={item.id} onClick={()=>openService(item)}>{item.title}</button>)}</div><div><h3>EXPLORE</h3><a href="#about">About Ngenzeni</a><a href="#process">Our process</a><a href="#resources">Project checklist</a><a href="#faqs">Questions & answers</a></div><div><h3>LET'S TALK</h3><a href={`tel:${PHONE}`}>072 605 3707</a><span>Slingene Sigubudu</span><span>Director</span><a href="#contact" className="footer-quote">Start a conversation<Icon /></a></div></div><div className="footer-bottom"><span>© 2026 Ngenzeni Enterprise (PTY) LTD. All rights reserved.</span><button onClick={()=>privacyDialog.current.showModal()}>Privacy & website information</button><a href="#home">BACK TO TOP <Icon name="down" /></a></div></div></footer>
    <a className="floating-whatsapp" href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Chat with Ngenzeni Enterprise on WhatsApp"><Icon name="whatsapp" /></a>

    <dialog className="info-dialog" ref={serviceDialog} aria-labelledby="service-title" onClose={()=>setService(null)} onClick={backdropClick} data-lenis-prevent><button className="dialog-close icon-button" aria-label="Close service information" onClick={()=>serviceDialog.current.close()}><Icon name="close" /></button>{service&&<><img className="dialog-photo" src={`/assets/${service.image}`} alt={service.alt} /><div className="dialog-body"><span className="section-label">Your next project</span><h2 id="service-title">{service.title}</h2><p>{service.description}</p><h3>What to discuss</h3><ul>{service.details.map(detail=><li key={detail}><Icon name="check" />{detail}</li>)}</ul><p className="dialog-note">We confirm the final scope, availability, materials and specialist requirements after reviewing your project.</p><Button href="#contact" onClick={()=>enquire(service)}>Enquire about this service</Button></div></>}</dialog>

    <dialog className="search-dialog info-dialog" ref={searchDialog} aria-labelledby="search-title" onClick={backdropClick} data-lenis-prevent><button className="dialog-close icon-button" aria-label="Close search" onClick={()=>searchDialog.current.close()}><Icon name="close" /></button><div className="dialog-body"><span className="section-label">Find your starting point</span><h2 id="search-title">What are you planning?</h2><label className="search-field"><Icon name="search" /><input type="search" autoFocus placeholder="Search building, painting, roofing…" value={search} onChange={event=>setSearch(event.target.value)} aria-label="Search services" /></label><div className="search-results" aria-live="polite">{searchResults.length ? searchResults.map(item=><button key={item.id} onClick={()=>{searchDialog.current.close();openService(item);}}><span>{item.title}<small>{item.description}</small></span><Icon /></button>):<p>No matching services. <a href="#contact" onClick={()=>searchDialog.current.close()}>Tell us about your project instead ↗</a></p>}</div></div></dialog>

    <dialog className="info-dialog privacy-dialog" ref={privacyDialog} aria-labelledby="privacy-title" onClick={backdropClick} data-lenis-prevent><button className="dialog-close icon-button" aria-label="Close privacy information" onClick={()=>privacyDialog.current.close()}><Icon name="close" /></button><div className="dialog-body"><span className="section-label">Website information</span><h2 id="privacy-title">Your privacy matters.</h2><p>The project form prepares a message on your device. It opens WhatsApp for you to review and send. This website does not store your form entries or use advertising trackers.</p><p>Calls and messages are handled by the services you choose; their privacy terms apply. Please avoid sending sensitive documents in an initial enquiry.</p><p>Construction information is introductory. Project scope, availability, quotation and specialist requirements are discussed directly with Ngenzeni Enterprise. Images are illustrative and do not represent completed company projects.</p><p>For questions, call Director Slingene Sigubudu on <a href={`tel:${PHONE}`}>072 605 3707</a>.</p></div></dialog>
  </>;
}
