// ==========================================================================
// LEGAL DATA — copy for the Privacy Policy and Terms & Conditions pages.
// Kept beside site-data.ts (the rest of the site's copy) so wording is
// edited in one place and rendered by LegalDocumentComponent.
// Company details are pulled from COMPANY so they never drift.
// ==========================================================================

import { COMPANY } from './site-data';

export interface LegalSection {
  /** Anchor id used by the "On this page" list. */
  id: string;
  heading: string;
  paragraphs?: string[];
  /** Rendered after the paragraphs. */
  bullets?: string[];
}

export interface LegalDocument {
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: LegalSection[];
}

/** Update whenever either document's wording changes. */
export const LEGAL_LAST_UPDATED = '7 October 2026';

const NAME = COMPANY.name;
const CONTACT_LINE = `${COMPANY.email} · ${COMPANY.address}, ${COMPANY.address2}`;

export const PRIVACY_POLICY: LegalDocument = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  subtitle: 'How we collect, use and protect your personal information.',
  sections: [
    {
      id: 'introduction',
      heading: 'Introduction',
      paragraphs: [
        `This Privacy Policy explains how ${NAME} ("we", "us", "our") collects, uses and protects personal information when you visit ${COMPANY.domain} or contact us about our services.`,
        'By using this website you agree to the practices described here. If you do not agree, please do not use the website.',
      ],
    },
    {
      id: 'information-we-collect',
      heading: 'Information we collect',
      paragraphs: ['We collect only what you choose to give us or what is needed to run the website:'],
      bullets: [
        'Contact details you submit through our contact and enquiry forms, such as your name, email address, phone number, the service you need and your message.',
        'Your email address, if you subscribe to our newsletter.',
        'Project information you share with us while we discuss or deliver a service.',
        'Basic technical data such as browser type, device, pages visited and approximate location, collected through standard server logs and, where enabled, analytics tools.',
      ],
    },
    {
      id: 'how-we-use-information',
      heading: 'How we use your information',
      bullets: [
        'To respond to your enquiries and prepare quotes.',
        'To deliver, support and improve our services.',
        'To send newsletter updates, which you can unsubscribe from at any time.',
        'To keep the website secure and understand how it is used so we can improve it.',
        'To meet our legal and regulatory obligations.',
      ],
    },
    {
      id: 'cookies',
      heading: 'Cookies',
      paragraphs: [
        'Our website may use cookies and similar technologies to remember preferences and measure how the site is used. You can control or delete cookies in your browser settings. Some features may not work as intended if you block them.',
      ],
    },
    {
      id: 'sharing-information',
      heading: 'Sharing your information',
      paragraphs: ['We do not sell your personal information. We share it only with:'],
      bullets: [
        'Service providers that help us run the website and our business, such as hosting, email delivery and analytics providers, who are required to protect it.',
        'Professional advisers, where needed to protect our legal rights.',
        'Authorities, courts or regulators when we are required to by law.',
      ],
    },
    {
      id: 'advertising-services',
      heading: 'Advertising services',
      paragraphs: [
        'When we run advertising campaigns on your behalf, the data involved is handled under your project agreement with us and the privacy policies and terms of the advertising platforms used.',
      ],
    },
    {
      id: 'data-retention',
      heading: 'How long we keep information',
      paragraphs: [
        'We keep personal information only for as long as needed for the purposes above or as required by law, and then delete or anonymise it.',
      ],
    },
    {
      id: 'security',
      heading: 'Security',
      paragraphs: [
        'We use reasonable technical and organisational measures to protect your information. No method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.',
      ],
    },
    {
      id: 'your-rights',
      heading: 'Your rights',
      paragraphs: ['You may ask us to:'],
      bullets: [
        'Tell you what personal information we hold about you and correct it if it is inaccurate.',
        'Delete your personal information, where we are not required to keep it.',
        'Stop sending you newsletters or withdraw consent you have given us.',
      ],
    },
    {
      id: 'exercising-your-rights',
      heading: 'Exercising your rights',
      paragraphs: [
        `To make a request, contact us at ${COMPANY.email}. We handle requests in line with applicable Indian data-protection law, including the Digital Personal Data Protection Act, 2023.`,
      ],
    },
    {
      id: 'children',
      heading: "Children's privacy",
      paragraphs: [
        'Our website is not directed at children under 18, and we do not knowingly collect their personal information. If you believe a child has given us personal information, contact us and we will delete it.',
      ],
    },
    {
      id: 'third-party-links',
      heading: 'Third-party links',
      paragraphs: [
        'Our website may link to other sites, including our social media profiles. We are not responsible for the content or privacy practices of those sites.',
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this policy',
      paragraphs: [
        'We may update this policy from time to time. The "Last updated" date at the top of this page shows when it last changed. Continuing to use the website after an update means you accept the revised policy.',
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      paragraphs: [`Questions about this policy? Reach us at ${CONTACT_LINE}.`],
    },
  ],
};

export const TERMS_AND_CONDITIONS: LegalDocument = {
  eyebrow: 'Legal',
  title: 'Terms & Conditions',
  subtitle: 'The terms that apply to using our website and working with us.',
  sections: [
    {
      id: 'acceptance',
      heading: 'Acceptance of these terms',
      paragraphs: [
        `These Terms & Conditions govern your use of ${COMPANY.domain} and the services provided by ${NAME} ("we", "us", "our"). By using the website or engaging us, you agree to these terms. If you do not agree, please do not use the website or our services.`,
      ],
    },
    {
      id: 'our-services',
      heading: 'Our services',
      paragraphs: [
        'We provide web development, advertising and related digital services as described on this website. Descriptions on the website are for general information. The scope, timeline, deliverables and fees for each project are set out in a written quote, proposal or agreement (a "Project Agreement").',
        'If a Project Agreement conflicts with these terms, the Project Agreement prevails for that project.',
      ],
    },
    {
      id: 'quotes-and-payments',
      heading: 'Quotes and payments',
      paragraphs: [
        'Quotes are estimates and are valid for the period stated in them. Fees, payment schedule and applicable taxes are as set out in the Project Agreement. We may pause work while an invoice remains unpaid.',
      ],
    },
    {
      id: 'client-responsibilities',
      heading: 'Your responsibilities',
      paragraphs: ['To deliver on time and to a good standard, you agree to:'],
      bullets: [
        'Provide accurate information, content and assets, and respond to requests and feedback promptly.',
        'Make sure you have the right to use any text, images, logos or other material you give us.',
        'Use our services only for lawful purposes.',
      ],
    },
    {
      id: 'advertising-services',
      heading: 'Advertising services',
      paragraphs: [
        'The results of advertising depend on factors outside our control, including platform policies, competition, budget and market conditions. We do not guarantee specific rankings, impressions, clicks, leads or sales.',
        'Advertising spend paid to third-party platforms is separate from our fees unless the Project Agreement states otherwise, and each platform\'s own terms and policies apply.',
      ],
    },
    {
      id: 'intellectual-property',
      heading: 'Intellectual property',
      paragraphs: [
        'Unless the Project Agreement says otherwise, once we have been paid in full you own the final deliverables created specifically for you.',
        'We keep ownership of our pre-existing tools, code libraries, frameworks and know-how, and grant you a licence to use them as part of the deliverables. Third-party and open-source components remain under their own licences.',
        'We may show completed work in our portfolio unless you ask us in writing not to.',
      ],
    },
    {
      id: 'third-party-services',
      heading: 'Third-party services',
      paragraphs: [
        'Our work may rely on third-party services such as hosting providers, payment gateways, analytics tools and advertising platforms. These are governed by their own terms, and we are not responsible for their outages, changes or policies.',
      ],
    },
    {
      id: 'website-use',
      heading: 'Using this website',
      paragraphs: ['When using our website you must not:'],
      bullets: [
        'Use it for any unlawful purpose or in a way that harms others.',
        'Attempt to gain unauthorised access to it, or disrupt or damage it or its servers.',
        'Introduce viruses or other harmful code.',
        'Copy, scrape or republish its content without our written permission.',
      ],
    },
    {
      id: 'disclaimer',
      heading: 'Disclaimer',
      paragraphs: [
        'The website is provided "as is" and "as available". We aim to keep its content accurate and up to date but do not warrant that it will be error-free or uninterrupted.',
      ],
    },
    {
      id: 'limitation-of-liability',
      heading: 'Limitation of liability',
      paragraphs: [
        'To the extent permitted by law, we are not liable for any indirect, incidental or consequential loss, including loss of profits, revenue or data. Our total liability for any claim relating to a service is limited to the fees you paid us for that service.',
      ],
    },
    {
      id: 'termination',
      heading: 'Suspension and termination',
      paragraphs: [
        'Either party may end a project as set out in the Project Agreement. We may suspend or end your access to our services if you breach these terms. Fees for work already completed remain payable.',
      ],
    },
    {
      id: 'governing-law',
      heading: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of India. We will try to resolve any dispute informally and in good faith first. Failing that, the courts of competent jurisdiction in India will have jurisdiction.',
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to these terms',
      paragraphs: [
        'We may update these terms from time to time. The "Last updated" date at the top of this page shows when they last changed. Continuing to use the website or our services after an update means you accept the revised terms.',
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      paragraphs: [`Questions about these terms? Reach us at ${CONTACT_LINE}.`],
    },
  ],
};
