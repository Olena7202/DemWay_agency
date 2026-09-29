import type { Service, ServiceGroup } from '../data/services'
import type { Locale } from './copy'

type PlanCopy = { name?: string; note?: string; term?: string; items?: string[] }
type ServiceCopy = { title?: string; text?: string; plans?: PlanCopy[] }

const en: Record<string, ServiceCopy> = {
  lending: {
    title: 'Landing page',
    text: 'We build landing pages for a specific offer, product or ad campaign. The page structure is built around one action so the visitor quickly sees the value and takes the next step.',
    plans: [
      {
        name: 'Start',
        note: 'Hosting and domain are not included',
        term: '5–7 days',
        items: [
          'Custom design',
          'Up to 6 sections',
          'Responsive layout',
          'Inquiry form',
          'Email alerts for new leads',
          '1 month of free support',
        ],
      },
      {
        name: 'Extended',
        note: 'Hosting and domain are not included',
        term: '5–7 days',
        items: [
          'Custom design for the brand',
          '8–12 sections',
          'Responsive layout',
          'Inquiry form + email alerts',
          'Online payment integration',
          '2 months of free support',
        ],
      },
    ],
  },
  vizytka: {
    title: 'Brochure site',
    text: 'A compact brochure site that professionally presents a company, services or specialist online. We shape the structure around what a potential client needs to know.',
    plans: [
      {
        name: 'Start',
        note: 'Hosting and domain are not included',
        term: '10–15 days',
        items: [
          'Custom design',
          '3–5 core pages',
          'Responsive layout',
          'Company / services info',
          'Contact form',
          'Social buttons',
          'A month of free support',
        ],
      },
    ],
  },
  korporatyvnyy: {
    title: 'Corporate website',
    text: 'Corporate sites for companies that need a full digital presentation of the business. We plan page structure, navigation and content so the site builds trust and supports growth.',
    plans: [
      {
        name: 'Start',
        note: 'Hosting and domain are not included',
        term: '14–21 days',
        items: [
          'Custom site design',
          'Brand style and visual concept',
          'Responsive layout for all devices',
          'Up to 10–15 pages',
          'Home page',
          'About page',
          'Service / business-area pages',
          'Contact page',
          'Blog or news feed',
          'Multilingual setup',
          'Feedback forms',
          'Social and messenger buttons',
          'Map with the company location',
          'Content upload from the client',
          'QA before launch',
          '1 month of free support',
        ],
      },
    ],
  },
  katalog: {
    title: 'Catalog site',
    text: 'For a convenient presentation of a wide range of products or services. We organize categories, filters and navigation so the user finds the right offer quickly. No cart and no payment — not an online store. For B2B, manufacturers and suppliers.',
    plans: [
      {
        name: 'Without payment',
        note: 'Hosting and domain are not included',
        term: '21–29 days',
        items: [
          'Custom site design',
          'Responsive layout for all devices',
          'Up to 50 products',
          'Catalog with categories',
          'Product card: photos, copy, specs, price',
          'Product search',
          'Basic filters',
          'Inquiry / contact form',
          'Social and messenger buttons',
          'About page',
          'Contact page',
          'Blog or news feed',
          'Content upload from the client',
          'QA before launch',
          '1 month of free support',
        ],
      },
      {
        name: 'Business',
        note: 'Hosting and domain are not included',
        term: '21–29 days',
        items: [
          'Custom design and brand look',
          'Responsive layout for all devices',
          'Up to 200 products',
          'Extended catalog with categories and subcategories',
          'Richer product cards',
          'Catalog search',
          'Advanced filters and sorting',
          'Favorites / wishlist',
          'Cart',
          'Checkout form',
          'Online payment integration',
          'Feedback forms',
          'Multilingual setup',
          'Social and messenger buttons',
          'Content upload from the client',
          'QA before launch',
          '2 months of free support',
        ],
      },
    ],
  },
  'redyzayn-lending': {
    title: 'Landing redesign',
    text: 'We rebuild the landing around the current offer, audience and target action. The page becomes clearer and more persuasive for a potential client.',
    plans: [
      {
        name: 'Start',
        term: '5–7 days',
        items: [
          'Review of the current site',
          'Updated structure and messaging',
          'Custom modern design',
          'UI/UX improvements',
          'Responsive version for all devices',
          'Visual style update',
          'Block and CTA optimization',
          'Better inquiry forms',
          'Front-end of the new design',
          'QA after redesign',
        ],
      },
    ],
  },
  'redyzayn-vizytka': {
    title: 'Brochure site redesign',
    text: 'We refresh a brochure site when the information is outdated or the features fall short. We work on visual presentation, structure and ease of use.',
    plans: [
      {
        name: 'Start',
        term: '10–12 days',
        items: [
          'Review of the current site',
          'Updated structure for 3–5 pages',
          'Custom modern design',
          'UI/UX improvements',
          'Responsive version for all devices',
          'Company / services block update',
          'Better contact form',
          'Updated social buttons',
          'Front-end of the new design',
          'QA after redesign',
        ],
      },
    ],
  },
  'redyzayn-korporatyvnyy': {
    title: 'Corporate redesign',
    text: 'We refresh the look and ease of a multi-page site while keeping the content you need. We tune structure, how information is presented and the user experience.',
    plans: [
      {
        name: 'Start',
        term: '14–21 days',
        items: [
          'Review of the current site',
          'Structure and usability review',
          'Updated site structure',
          'Custom modern design',
          'Brand look and visual concept update',
          'UI/UX improvements',
          'Responsive design for all devices',
          'Navigation optimization',
          'Page and block updates',
          'Better feedback forms',
          'Updated CTAs',
          'Mobile adaptation of the design',
          'Front-end of the new design',
          'QA after redesign',
          'Support after launch',
        ],
      },
    ],
  },
  'redyzayn-katalog': {
    title: 'Catalog site redesign',
    text: 'We improve structure and navigation of catalog sites so people find the products or services they need more easily.',
    plans: [
      {
        name: 'Start',
        term: '14–21 days',
        items: [
          'Review of the current catalog',
          'Updated category and card structure',
          'Custom modern design',
          'Catalog and filter UI/UX improvements',
          'Responsive design for all devices',
          'Product / service card update',
          'Search and navigation optimization',
          'Better inquiry / order form',
          'Front-end of the new design',
          'QA after redesign',
          'Support after launch',
        ],
      },
    ],
  },
  pereyizd: {
    title: 'Move off a website builder onto a custom build',
    text: 'We move a site off a builder (Tilda, Wix) onto a custom build when the platform’s standard options are no longer enough.',
    plans: [
      {
        name: 'Start',
        term: '14–21 days',
        items: [
          'Review of the current site',
          'Move of structure and content',
          'Design rebuild or adaptation',
          'Custom build without builder limits',
          'Responsive layout for all devices',
          'Move of forms and features',
          'Image transfer and optimization',
          'Sanity check of the site',
          'QA before launch',
          '1 month of free support',
        ],
      },
    ],
  },
  'mobilna-adaptatsiya': {
    title: 'Mobile version adaptation',
    text: 'We optimize how the site looks on phones and tablets. We work with structure, navigation and page elements so people can use the site comfortably on any device.',
    plans: [
      {
        name: 'Start',
        term: '5–7 days',
        items: [
          'Adaptation for phones and tablets',
          'Block placement optimization',
          'Correct text and image display',
          'Menu and navigation adaptation',
          'Button and form optimization',
          'Spacing and sizing setup',
          'Checks on different screen sizes',
          'Load-speed optimization',
          'Mobile QA',
        ],
      },
    ],
  },
  'seo-optymizatsiya': {
    title: 'On-site SEO optimization',
    text: 'We run a full on-site SEO pass: structure, content, metadata, technical settings and search semantics. The aim is a site that search engines understand and potential clients find useful.',
    plans: [
      {
        name: 'Scope',
        items: [
          'Core keyword research',
          'Meta tags and descriptions',
          'URL optimization',
        ],
      },
    ],
  },
  'poshukova-reklama': {
    title: 'Search ads',
    text: 'We show ads at the moment people already search for the product, service or solution they need. Search ads bring an audience with a specific query, which raises the chance of a purchase.',
    plans: [
      {
        name: 'Launch',
        note: 'media budget billed separately',
        items: [
          'Business and goals analysis',
          'Ad account setup',
          'Keyword research',
          'Ad creation',
          'Campaign launch and setup',
          'Results optimization',
        ],
      },
    ],
  },
  'mediyna-reklama': {
    title: 'Display ads',
    text: 'We raise brand recognition with visual ads and build interest in the offer across Google’s partner network. Audiences and formats are picked to match the campaign goals.',
    plans: [
      {
        name: 'Launch',
        note: 'media budget billed separately',
        items: [
          'Ad account setup',
          'Target audience definition',
          'Banner creation',
          'Campaign launch and setup',
          'Results optimization',
        ],
      },
    ],
  },
  'tovarna-reklama': {
    title: 'Shopping ads',
    text: 'We show the product, photo, price and name right in search so the client can judge the offer quickly and move to a purchase.',
    plans: [
      {
        name: 'Launch',
        note: 'media budget billed separately',
        items: [
          'Ad account setup',
          'Google Merchant Center setup',
          'Product upload and optimization',
          'Shopping campaign launch',
          'Results optimization',
        ],
      },
    ],
  },
  'google-ads-vedennya': {
    title: 'Google Ads management',
    text: 'Monthly optimization of live campaigns: bids, ads, cost per lead.',
    plans: [
      {
        name: 'Retainer',
        note: 'media budget billed separately',
        items: [
          'Regular campaign edits',
          'Ad tests',
          'Cost-per-lead control',
          'Monthly report',
        ],
      },
      {
        name: 'Business',
        note: 'media budget billed separately',
        items: [
          'Everything in Retainer',
          'Several campaigns and remarketing',
          'Link to the landing page and CRM',
          'Budget recommendations',
        ],
      },
    ],
  },
  'instagram-ads': {
    title: 'Instagram Ads',
    text: 'We help catch attention in Instagram through visual ad formats. We create attractive creatives, set targeting and goals to match the business objectives.',
    plans: [
      {
        name: 'Start',
        note: 'media budget billed separately',
        items: [
          'Business and audience analysis',
          'Ad account setup',
          'Ad creative preparation',
          'Targeting setup',
          'Campaign launch',
          'Optimization and results analysis',
        ],
      },
    ],
  },
  'facebook-ads': {
    title: 'Facebook Ads',
    text: 'We set up Facebook ads to reach a relevant audience. We find potential clients by interests, behaviour and profile and bring them efficiently to a lead or purchase.',
    plans: [
      {
        name: 'Start',
        note: 'media budget billed separately',
        items: [
          'Business and audience analysis',
          'Ad account setup',
          'Ad creative preparation',
          'Targeting setup',
          'Campaign launch',
          'Optimization and results analysis',
        ],
      },
    ],
  },
  email: {
    title: 'Email marketing',
    text: 'We set up and automatically send the right emails at the right moment — from a welcome and reminders to personal offers, helping keep contact and bring clients back.',
    plans: [
      {
        name: 'Start',
        items: [
          'Audience and goals analysis',
          'Contact segmentation',
          'Email platform setup',
          'Email creation',
          'Automated sequence setup',
          'Launch, analysis and optimization',
        ],
      },
    ],
  },
  analytics: {
    title: 'Google Analytics',
    text: 'Analytics setup: events, leads, sources. So you can see what works.',
    plans: [
      {
        name: 'Start',
        items: [
          'GA4 and core events',
          'Form tracking',
          'Link to Google Ads / Meta',
          'Short account guide',
        ],
      },
      {
        name: 'Extended',
        items: [
          'Everything in Start',
          'Funnel to lead and purchase',
          'Custom reports',
          'Duplicate and data-loss check',
        ],
      },
    ],
  },
  'ab-test': {
    title: 'A/B testing',
    text: 'We compare screen, offer or form variants — and keep the one that collects more leads.',
    plans: [
      {
        name: 'Start',
        items: [
          'Hypothesis and one test',
          'Two variants of a block or screen',
          'Measurement setup',
          'Conclusion after data comes in',
        ],
      },
    ],
  },
  crm: {
    title: 'CRM',
    text: 'We help implement CRM for systematic work with leads and clients. We set processes to the specifics of the business, to simplify control of leads and sales.',
    plans: [
      {
        name: 'Start',
        term: '21–30 days',
        items: [
          'Business needs review',
          'CRM structure development',
          'Client and contact database',
          'Client card',
          'Lead and deal database',
          'Sales pipeline',
          'Deal statuses and stages',
          'Client interaction history',
          'Task creation and control',
          'Task reminders',
          'Search and filters',
          'User roles',
          'Basic access rights',
          'Basic stats and reports',
          'Responsive interface',
          'Data import',
          'Basic email integration',
          'System QA',
          'Setup and launch',
          '1 month of technical support',
        ],
      },
    ],
  },
  'crm-business': {
    title: 'CRM Business',
    text: 'An extended CRM package: from the structure of the client base to sales stages and automation of repeated tasks.',
    plans: [
      {
        name: 'Business',
        term: '21–30 days',
        items: [
          'Needs and business-process review',
          'CRM structure development',
          'Client and contact database',
          'Client card',
          'Lead and deal database',
          'Sales pipeline',
          'Deal stages and statuses',
          'Client interaction history',
          'Task creation and control',
          'Reminders and deadlines',
          'User roles',
          'Basic access rights',
          'Search and filters',
          'Data import',
          'Data export',
          'Dashboard with key metrics',
          'Basic analytics and reports',
          'Email notifications',
          'Telegram notifications',
          'Website integration',
          'Automatic lead handoff from the site into CRM',
          'Responsive interface',
          'System QA',
          'Setup and launch',
          'Staff training',
          '1 month of technical support',
        ],
      },
    ],
  },
  logotyp: {
    title: 'Logo design',
    text: 'A logo is the first impression and the base of your brand recognition. We will create a logo that reflects the brand character and can be used across digital and print formats.',
    plans: [
      {
        name: 'Start',
        term: '4–5 days',
        items: [
          '3 logo concepts',
          'One option chosen for refinement',
          'Up to 5 revisions of the chosen mark',
          'Type and color pairing',
          'Logo files ready for use',
          'Files in PNG, JPG, PDF, SVG formats',
          'Versions for light and dark backgrounds',
          'Print-ready files',
        ],
      },
    ],
  },
  polihrafiya: {
    title: 'Print design',
    text: 'We design business cards, flyers, booklets and other materials in one brand style.',
    plans: [
      {
        name: 'Start',
        term: '4–5 days',
        items: [
          'Business card design',
          'Letterhead design',
          'Brochure design',
          'Leaflet and flyer design',
          'Adaptation for different formats',
          'Brand colors, type and elements',
          'One visual system with the logo and site',
          'Print-ready layouts',
          'Files in the formats printers need',
        ],
      },
    ],
  },
}


const overlays: Partial<Record<Locale, Record<string, ServiceCopy>>> = { en }

export function localizeService(service: Service, locale: Locale): Service {
  if (locale === 'uk') return service
  const overlay = overlays[locale]?.[service.slug]
  if (!overlay) return service
  return {
    ...service,
    title: overlay.title ?? service.title,
    text: overlay.text ?? service.text,
    plans: service.plans.map((plan, index) => ({
      ...plan,
      name: overlay.plans?.[index]?.name ?? plan.name,
      note: overlay.plans?.[index]?.note ?? plan.note,
      term: overlay.plans?.[index]?.term ?? plan.term,
      items: overlay.plans?.[index]?.items ?? plan.items,
    })),
  }
}

export function localizeGroup(group: ServiceGroup, locale: Locale) {
  if (locale === 'uk') return group
  return (
    {
      Сайти: 'Websites',
      Редизайн: 'Redesign',
      SEO: 'SEO',
      Реклама: 'Ads',
      Системи: 'Systems',
      Айдентика: 'Identity',
    } as Record<ServiceGroup, string>
  )[group]
}
