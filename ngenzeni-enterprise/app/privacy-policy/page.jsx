import Link from 'next/link';
import Brand from '../components/Brand';
import styles from './privacy.module.css';

export const metadata = {
  title: 'Privacy Policy | Ngenzeni Enterprise (PTY) LTD',
  description: 'Company registration details, how our website and WhatsApp enquiries handle personal information, and how to contact Ngenzeni Enterprise about privacy.',
  openGraph: {
    title: 'Privacy Policy | Ngenzeni Enterprise (PTY) LTD',
    description: 'Our company details, your personal information and your privacy rights.',
    type: 'website',
    locale: 'en_ZA',
  },
};

const PHONE = '+27726053707';
const PRIVACY_WHATSAPP = 'https://wa.me/27726053707?text=Hello%20Slingene%2C%20I%20have%20a%20privacy%20enquiry.';
const contents = [
  ['information', 'Information you provide'],
  ['purpose', 'How we use information'],
  ['whatsapp', 'WhatsApp and sharing'],
  ['cookies', 'Cookies and website data'],
  ['retention', 'Security and retention'],
  ['rights', 'Your privacy rights'],
  ['contact', 'Contact and complaints'],
  ['updates', 'Updates to this policy'],
];

function PolicySection({ index, children }) {
  const [id, title] = contents[index];
  return <section className={styles.section} id={id} aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`}><span>{String(index + 1).padStart(2, '0')}</span>{title}</h2>
    {children}
  </section>;
}

export default function PrivacyPolicy() {
  return <>
    <a href="#privacy-content" className="skip-link">Skip to privacy policy</a>
    <header className={`site-header ${styles.header}`}>
      <div className="nav-inner">
        <Brand href="/" />
        <nav className={styles.headerLinks} aria-label="Privacy page navigation">
          <Link href="/" className={styles.homeLink}><span aria-hidden="true">←</span> Home</Link>
          <a href={`tel:${PHONE}`} className={`button button-primary ${styles.headerContact}`}>Contact us <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>

    <main id="privacy-content" className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.intro}>
          <span className="section-label"><i /> YOUR INFORMATION, HANDLED WITH CARE</span>
          <h1>Privacy policy<span>.</span></h1>
          <p>Clear information about our company, the details you share with us, and your choices when you use this website.</p>
          <div className={styles.updated}>Last updated <time dateTime="2026-11-08">8 November 2026</time><span>South Africa · POPIA</span></div>
        </div>

        <section className={styles.companyCard} aria-labelledby="company-title">
          <div className={styles.companyHeading}>
            <div><span className={styles.eyebrow}>WHO WE ARE</span><h2 id="company-title">Ngenzeni Enterprise (PTY) LTD</h2></div>
            <span className={styles.companyTag}>Company information</span>
          </div>
          <p>For enquiries we receive through this website, Ngenzeni Enterprise is the responsible party for the personal information it handles.</p>
          <dl className={styles.companyDetails}>
            <div><dt>Company registration number</dt><dd>2021/619191/07</dd></div>
            <div><dt>Enterprise type</dt><dd>Private company</dd></div>
            <div><dt>Registration date</dt><dd><time dateTime="2021-06-21">21 June 2021</time></dd></div>
            <div><dt>Financial year end</dt><dd>June</dd></div>
            <div><dt>Director &amp; privacy contact</dt><dd>Slingene Sigubudu</dd></div>
            <div><dt>Contact number</dt><dd><a href={`tel:${PHONE}`}>072 605 3707</a></dd></div>
            <div className={styles.office}><dt>Registered office &amp; postal address on the certificate</dt><dd><address>Unit 13, Complex 2926, Cornflower Crescent<br />Fleurhof, Gauteng, 1709<br />South Africa</address></dd></div>
          </dl>
          <p className={styles.certificateNote}>Registration particulars and the office address are taken from the CIPC disclosure certificate issued on 23 June 2021.</p>
        </section>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <nav aria-label="On this page">
              <h2>On this page</h2>
              <ol>{contents.map(([id, title]) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}</ol>
            </nav>
            <div className={styles.helpCard}><strong>A question about your details?</strong><p>Speak directly with Slingene.</p><a href={`tel:${PHONE}`}>072 605 3707 <span aria-hidden="true">↗</span></a></div>
          </aside>

          <div className={styles.policyBody}>
            <div className={styles.summary}><strong>Your enquiry, at a glance</strong><p>The form prepares a WhatsApp message. Opening WhatsApp passes the entered details to that service; Ngenzeni receives your message when you choose to send it.</p></div>

            <PolicySection index={0}>
              <p>When you use the project enquiry form, you enter your name, phone number, project location, the service you need, preferred timing and a description of your project. If you contact us directly, we receive the details you choose to share in that conversation, including any photos or drawings you send.</p>
              <p>Making an enquiry is voluntary. Fields marked with an asterisk are required to prepare the form’s message; without them, that option cannot be completed. You can also call us instead. Please share only information relevant to your enquiry and avoid including identity numbers, banking details or information about other people without their permission.</p>
            </PolicySection>

            <PolicySection index={1}>
              <p>We use enquiry information to respond, understand the proposed work, discuss a quotation or site visit, and communicate about a project you ask us to consider. If you proceed, relevant information may also be needed to manage the agreed work, keep business records and meet legal obligations.</p>
              <p>Depending on the circumstances, processing is based on your consent, steps towards or performance of an agreement, a legal duty, or a legitimate interest in responding to and managing your enquiry. Submitting an enquiry does not sign you up to marketing.</p>
            </PolicySection>

            <PolicySection index={2}>
              <p>The form builds your message in your browser. It does not submit your entries to a Ngenzeni website database. Selecting “Prepare WhatsApp enquiry” opens a WhatsApp link containing those details. You can review or edit the message in WhatsApp before sending it to us. An unsent draft on this website is not an enquiry received by Ngenzeni.</p>
              <p>WhatsApp is a separate service with its own data practices. It may process information outside South Africa, including in countries with different privacy protections. Read <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">WhatsApp’s Privacy Policy</a> before using it. You can use the telephone contact if you prefer.</p>
              <p>Information received by Ngenzeni may be shared where needed with people assisting with your enquiry or agreed project, service providers, professional advisers, or authorities where legally required. Any transfer arranged by Ngenzeni must have a lawful basis and the safeguards required by POPIA.</p>
            </PolicySection>

            <PolicySection index={3}>
              <p>The current website does not include advertising trackers or analytics scripts. Its images, video and fonts are served with the website. The form uses temporary page state rather than a website account or saved enquiry history.</p>
              <p>When a page loads, the hosting service may process technical information such as your IP address, browser information, requested pages and access times to deliver and protect the website. Browser features such as autofill or history operate under your device settings. External services you open, including WhatsApp, may use their own cookies and similar technologies under their own policies.</p>
            </PolicySection>

            <PolicySection index={4}>
              <p>Although form entries are not saved to a website database, messages you send to us and records needed for your project may be retained in our business communications and records. We retain personal information only for as long as it is needed for the enquiry, agreed work, applicable recordkeeping duties or a legitimate legal matter, then delete or de-identify it when it is no longer required.</p>
              <p>Access should be limited to people who need the information for those purposes, with reasonable safeguards against loss, misuse or unauthorised access. Where a security compromise requires notification under POPIA, we will notify the Information Regulator and affected people as required. Contact us about the handling or retention of a particular record.</p>
            </PolicySection>

            <PolicySection index={5}>
              <p>Subject to POPIA and any applicable limits, you can:</p>
              <ul>
                <li>Ask whether we hold personal information about you and request access to it.</li>
                <li>Request correction of inaccurate details or deletion of information that may no longer lawfully be kept.</li>
                <li>Object to processing where the law allows, or withdraw consent where processing depends on it.</li>
                <li>Complain to South Africa’s Information Regulator.</li>
              </ul>
              <p>Withdrawal of consent does not undo earlier lawful processing or override another valid reason to keep a record. We may need to verify your identity before acting on a request. These rights arise under the <a href="https://www.gov.za/documents/protection-personal-information-act" target="_blank" rel="noopener noreferrer">Protection of Personal Information Act 4 of 2013</a>.</p>
            </PolicySection>

            <PolicySection index={6}>
              <p>For a privacy question or request, contact Director <strong>Slingene Sigubudu</strong> on <a href={`tel:${PHONE}`}>072 605 3707</a>, or send a written request through <a href={PRIVACY_WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a>. Describe the information or request concerned; we can explain what is needed to verify and respond to it. The company’s registered office details are provided above.</p>
              <div className={styles.regulator}>
                <h3>Information Regulator, South Africa</h3>
                <p>You may raise a POPIA complaint directly with the Regulator. Its <a href="https://inforegulator.org.za/complaints/" target="_blank" rel="noopener noreferrer">complaints page</a> explains the current process and links to the eServices portal.</p>
                <a href="mailto:POPIAComplaints@inforegulator.org.za">POPIAComplaints@inforegulator.org.za</a>
                <a href="tel:+27100235200">010 023 5200</a>
                <a href="https://inforegulator.org.za/contact-us/" target="_blank" rel="noopener noreferrer">Regulator contact details <span aria-hidden="true">↗</span></a>
              </div>
            </PolicySection>

            <PolicySection index={7}>
              <p>This policy covers this website and the enquiries it directs to Ngenzeni Enterprise. Other services you choose to use have their own policies. If the way this website handles information changes, this page will be updated with a new revision date and any further notice required by law.</p>
            </PolicySection>
          </div>
        </div>

        <div className={styles.bottomCallout}><div><h2>Let’s keep the conversation clear.</h2><p>Contact us about your personal information or your next project.</p></div><a href={`tel:${PHONE}`} className="button button-primary">Call Slingene <span aria-hidden="true">↗</span></a></div>
      </div>
    </main>
    <footer className={styles.footer}><div className={styles.shell}><span>© 2026 Ngenzeni Enterprise (PTY) LTD</span><span>Registration 2021/619191/07</span><Link href="/">Back to the website <span aria-hidden="true">↗</span></Link></div></footer>
  </>;
}
