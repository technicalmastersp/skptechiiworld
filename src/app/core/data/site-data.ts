// ==========================================================================
// SITE DATA — single source of truth.
// Every page/component reads from here instead of hard-coding copy,
// so the whole app can be updated by editing this one file.
// ==========================================================================

export interface NavLink {
  label: string;
  path: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  path: string;
}

export interface ProductItem {
  icon: string;
  name: string;
  description: string;
}

export interface TechItem {
  key: string;
  name: string;
}

export interface TeamMember {
  photo: string;
  name: string;
  role: string;
}

export interface Testimonial {
  photo: string;
  quote: string;
  name: string;
  role: string;
}

export interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export const COMPANY = {
  name: 'SKP Techii World',
  tagline: 'Ideas to Digital Reality',
  domain: 'https://www.skptechiiworld.com',
  phone: '+91 98765 43210',
  phoneHours: 'Mon - Sat, 10:00 AM - 7:00 PM',
  email: 'info@skptechiiworld.com',
  emailNote: "We reply within few hours",
  address: 'No.172, Sector 39, Gurugram, Haryana',
  address2: 'India',
  addressNote: 'Work From Anywhere',
  socials: [
    { icon: 'linkedin', url: '#' },
    { icon: 'twitter', url: '#' },
    { icon: 'youtube', url: '#' },
    { icon: 'instagram', url: '#' },
    { icon: 'facebook', url: '#' },
  ],
};

export interface BrandImage {
  /** Path relative to the site root (resolved against <base href="/">). */
  src: string;
  /** Intrinsic display size in CSS px — set on <img> to prevent layout shift. */
  width: number;
  height: number;
}

/**
 * Brand assets — single source of truth for every logo file the app renders
 * or advertises (UI, favicons, social share cards, structured data).
 * Files live in src/assets/brand/. Swap a file or edit a path here and the
 * header, footer, SeoService and index.html references stay in sync.
 */
export const BRAND = {
  /** Square app mark, used beside the live-text wordmark in the header. */
  icon: { src: 'assets/brand/skp-icon.webp', width: 42, height: 40 } satisfies BrandImage,
  /** Icon + wordmark + tagline lockup, designed for dark surfaces (footer). */
  lockupDark: { src: 'assets/brand/skp-lockup-dark.webp', width: 280, height: 73 } satisfies BrandImage,
  /** 512px transparent icon — used as the schema.org logo and manifest icon. */
  logoSquare: '/assets/brand/icon-512.png',
  /** Open Graph / Twitter share card. `path` is root-relative; SeoService prefixes COMPANY.domain. */
  ogImage: {
    path: '/assets/brand/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'SKP Techii World — Ideas to Digital Reality',
  },
};

export interface PageMeta {
  path: string;
  title: string;
  description: string;
}

/**
 * Single source of truth for per-page SEO metadata (title + meta
 * description). Consumed by SeoService, which pushes these into the
 * document <head> and keeps the canonical URL in sync on every navigation.
 */
export const PAGE_META: PageMeta[] = [
  {
    path: '/',
    title: 'SKP Techii World | Web Development Company in Gurugram, India',
    description: 'SKP Techii World is a full-service web development & digital solutions company delivering high-performance websites, web apps and digital solutions for businesses of all sizes.',
  },
  {
    path: '/services',
    title: 'Web Development Services | SKP Techii World',
    description: 'Website creation, frontend & backend development, WordPress, e-commerce, payments, SEO, UI/UX design and advertising — explore our full service catalogue.',
  },
  {
    path: '/products',
    title: 'Our Products | SKP Techii World',
    description: 'Explore LIC Agent Dairy, LearnHub and Business Dashboard — in-house digital products built by SKP Techii World to solve real business problems.',
  },
  {
    path: '/our-work',
    title: 'Our Work & Portfolio | SKP Techii World',
    description: 'Browse e-commerce, web app, EdTech, dashboard and startup projects designed and built by SKP Techii World, plus client testimonials.',
  },
  {
    path: '/technologies',
    title: 'Our Tech Stack | SKP Techii World',
    description: 'Angular, React, TypeScript, Node.js, Express.js, MongoDB, MySQL and WordPress — the modern technologies SKP Techii World uses to build fast, secure apps.',
  },
  {
    path: '/team',
    title: 'Our Team | SKP Techii World',
    description: 'Meet the developers, designers and engineers behind SKP Techii World, and see open roles if you want to join the team.',
  },
  {
    path: '/about',
    title: 'About Us | SKP Techii World',
    description: 'Learn how SKP Techii World turns ideas into digital reality — our story, our process, and why businesses trust us with their web projects.',
  },
  {
    path: '/contact',
    title: 'Contact Us | SKP Techii World',
    description: 'Get a free quote from SKP Techii World. Call, email or fill out our contact form and we will get back to you within 24 hours.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | SKP Techii World',
    description: 'How SKP Techii World collects, uses and protects your personal information when you use our website or contact us about our services.',
  },
  {
    path: '/terms-and-conditions',
    title: 'Terms & Conditions | SKP Techii World',
    description: 'The terms that apply to using the SKP Techii World website and to our web development, advertising and related digital services.',
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Our Work', path: '/our-work' },
  { label: 'Technologies', path: '/technologies' },
  // { label: 'Our Team', path: '/team' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_HIGHLIGHTS = [
  { icon: 'heart', label: '100% Client Satisfaction' },
  { icon: 'clock', label: 'On-Time Delivery' },
  { icon: 'tag', label: 'Affordable Pricing' },
  { icon: 'headset', label: '24/7 Support' },
];

export const HERO_PANEL = [
  { icon: 'code', label: 'Web Development' },
  { icon: 'mobile', label: 'Mobile Apps' },
  { icon: 'search', label: 'SEO & Marketing' },
  { icon: 'palette', label: 'UI/UX Design' },
  { icon: 'cloud', label: 'Cloud Solutions' },
];

export const SERVICES: ServiceItem[] = [
  { icon: 'monitor', title: 'Website Creation', description: 'Modern, responsive and SEO-friendly websites for your business.', path: '/services' },
  { icon: 'code-brackets', title: 'Frontend Development', description: 'Stunning UI/UX with Angular, React, JavaScript & TypeScript.', path: '/services' },
  { icon: 'server', title: 'Backend Development', description: 'Robust and scalable APIs with Node.js, Express.js and more.', path: '/services' },
  { icon: 'wordpress', title: 'WordPress Development', description: 'Custom themes, plugins and full WordPress solutions.', path: '/services' },
  { icon: 'cart', title: 'E-commerce Solutions', description: 'Secure payment integration and smooth user experience.', path: '/services' },
  { icon: 'card', title: 'Payment Gateway Integration', description: 'Razorpay, Stripe, PayPal and more for secure transactions.', path: '/services' },
  { icon: 'search', title: 'SEO & Google Search Console', description: 'Improve rankings and visibility with expert SEO & GSC management.', path: '/services' },
  { icon: 'gear', title: 'Website Maintenance', description: 'Regular updates, security & performance optimization.', path: '/services' },
  { icon: 'palette', title: 'UI/UX Design', description: 'Creative, user-focused and conversion-driven designs.', path: '/services' },
  { icon: 'headset', title: 'Consultation & Support', description: 'Get expert advice for your business growth.', path: '/services' },
  { icon: 'megaphone', title: 'Advertisement', description: 'Promote your business with targeted online advertising campaigns.', path: '/services' },
];

export const PRODUCTS: ProductItem[] = [
  { icon: 'briefcase', name: 'LIC Agent Dairy', description: 'A powerful web app for LIC agents to manage clients, policies and more.' },
  { icon: 'grad-cap', name: 'LearnHub', description: 'Online learning platform with courses, quizzes and certification.' },
  { icon: 'chart', name: 'Business Dashboard', description: 'Track your business performance with real-time analytics.' },
];

export const TECH_STACK: TechItem[] = [
  { key: 'angular', name: 'Angular' },
  { key: 'react', name: 'React' },
  { key: 'javascript', name: 'JavaScript' },
  { key: 'typescript', name: 'TypeScript' },
  { key: 'wordpress', name: 'WordPress' },
  { key: 'mongodb', name: 'MongoDB' },
  { key: 'mongoose', name: 'Mongoose' },
  { key: 'sql', name: 'SQL' },
  { key: 'mysql', name: 'MySQL' },
  { key: 'nodejs', name: 'Node.js' },
  { key: 'express', name: 'Express.js' },
];

export const ABOUT_POINTS = [
  'Experienced & Skilled Developers',
  'Transparent Communication',
  'Custom Solutions for Every Business',
  'Long-Term Support & Maintenance',
];

export const STATS: StatItem[] = [
  { icon: 'rocket', value: '50+', label: 'Projects Completed' },
  { icon: 'smile', value: '40+', label: 'Happy Clients' },
  { icon: 'star', value: '4.9/5', label: 'Client Rating' },
  { icon: 'clock', value: '24/7', label: 'Support' },
];

export const TEAM: TeamMember[] = [
  { photo: 'assets/images/team-1.png', name: 'Shashank S. Pandey', role: 'Founder' },
  { photo: 'assets/images/team-4.png', name: 'Swaranjeet Singh', role: 'Director, Development' },
  { photo: 'assets/images/team-3.png', name: 'Akhilesh Kumar', role: 'General Manager' },
  { photo: 'assets/images/team-2.png', name: 'Shilpa Shrivastava', role: 'Lead Programmer' },
  { photo: 'assets/images/team-5.png', name: 'Adarsh Sharma', role: 'DevOps & SEO Expert' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { icon: 'target', title: '1. Discover', description: 'Understand your needs and plan the project.' },
  { icon: 'design', title: '2. Design', description: 'Create wireframes and UI/UX designs.' },
  { icon: 'build', title: '3. Develop', description: 'Build and test your solution.' },
  { icon: 'deploy', title: '4. Deploy', description: 'Deploy and go live with your product.' },
  { icon: 'support', title: '5. Support', description: 'Ongoing maintenance and support.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { photo: 'assets/images/testimonial-1.png', quote: 'SKP Techii World delivered our website beyond expectations. The team is professional, responsive and highly skilled!', name: 'Rohan Mehta', role: 'CEO, GrowUpPlus' },
  { photo: 'assets/images/testimonial-2.png', quote: 'Excellent service and great communication. Our eCommerce site is performing really well thanks to their expertise.', name: 'Priya Verma', role: 'Founder, StyleKart' },
  { photo: 'assets/images/testimonial-3.png', quote: 'They understood our requirements perfectly and delivered on time. Highly recommended for web development services.', name: 'Amit Singh', role: 'Co-founder, NextGen Tech' },
  { photo: 'assets/images/testimonial-4.png', quote: 'Professional team, great support and amazing results. Our business has grown significantly!', name: 'Sneha Kapoor', role: 'Marketing Head, BrightMedia' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Basic', tagline: 'Best for small businesses', price: '₹9,999', period: '/ project',
    features: ['Responsive Website', 'Up to 5 Pages', 'Basic SEO Setup'],
    cta: 'Get Started',
  },
  {
    name: 'Business', tagline: 'Best for growing businesses', price: '₹19,999', period: '/ project',
    features: ['Custom Web App', 'Up to 15 Pages', 'SEO + GSC Setup'],
    popular: true,
    cta: 'Get Started',
  },
  {
    name: 'Enterprise', tagline: 'Best for large businesses', price: '₹40,999+', period: '/ project',
    features: ['Full-Stack Solution', 'E-commerce / Portal', 'Ongoing Support'],
    cta: 'Contact Us',
  },
];

export interface PortfolioItem {
  category: string;
  title: string;
  description: string;
  tags: string[];
}

export const PORTFOLIO: PortfolioItem[] = [
  { category: 'E-commerce', title: 'StyleKart Online Store', description: 'A full-featured e-commerce platform with payment gateway integration and an admin dashboard.', tags: ['React', 'Node.js', 'MongoDB'] },
  { category: 'Web App', title: 'LIC Agent Dairy', description: 'A management web app for LIC agents to track clients, policies and renewals.', tags: ['Angular', 'Express.js', 'MySQL'] },
  { category: 'EdTech', title: 'LearnHub Learning Platform', description: 'An online learning platform with course delivery, quizzes and certification.', tags: ['Angular', 'TypeScript', 'MongoDB'] },
  { category: 'Business', title: 'BrightMedia Marketing Site', description: 'A high-conversion marketing website with SEO-first architecture.', tags: ['WordPress', 'SEO'] },
  { category: 'Dashboard', title: 'Business Analytics Dashboard', description: 'A real-time analytics dashboard for tracking KPIs and business performance.', tags: ['React', 'Node.js', 'SQL'] },
  { category: 'Startup', title: 'NextGen Tech Corporate Site', description: 'A modern, fast-loading corporate website for a growing SaaS startup.', tags: ['Angular', 'JavaScript'] },
];

export const FAQ_ITEMS = [
  { q: 'How long does it take to build a website?', a: 'Most business websites take 2-4 weeks, while complex web applications typically take 6-12 weeks depending on scope.' },
  { q: 'Do you provide ongoing maintenance?', a: 'Yes — our Business and Enterprise plans include ongoing maintenance, security updates and performance monitoring.' },
  { q: 'Can you work with our existing codebase?', a: 'Absolutely. We regularly audit, extend and refactor existing Angular, React and WordPress projects.' },
  { q: 'What is your payment structure?', a: 'We typically work with a 50% upfront deposit and the remaining 50% on delivery, or milestone-based billing for larger projects.' },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'Website Creation', path: '/services' },
    { label: 'Frontend Development', path: '/services' },
    { label: 'Backend Development', path: '/services' },
    { label: 'WordPress Development', path: '/services' },
    { label: 'E-commerce Solutions', path: '/services' },
    { label: 'Payment Gateway Integration', path: '/services' },
  ],
  technologies: ['Angular', 'React', 'JavaScript', 'TypeScript', 'Node.js'],
  legal: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms-and-conditions' },
  ],
};
