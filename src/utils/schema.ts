import { siteConfig } from "../data/site";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    "name": siteConfig.name,
    "url": `${siteConfig.url}/`,
    "logo": `${siteConfig.url}/images/logo.png`,
    "description": siteConfig.description,
    "telephone": `+${siteConfig.whatsappNumber}`,
    "areaServed": [
      {
        "@type": "City",
        "name": "Kota Batu"
      },
      {
        "@type": "City",
        "name": "Malang"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": `+${siteConfig.whatsappNumber}`,
      "contactType": "customer service",
      "availableLanguage": ["Indonesian"]
    }
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    "url": `${siteConfig.url}/`,
    "name": siteConfig.name,
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    },
    "inLanguage": "id-ID"
  };
}

export function generateWebPageSchema(options: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${options.url}#webpage`,
    "url": options.url,
    "name": options.title,
    "description": options.description,
    "isPartOf": {
      "@id": `${siteConfig.url}/#website`
    },
    "inLanguage": "id-ID"
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateServiceSchema(options: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": options.name,
    "serviceType": options.serviceType,
    "description": options.description,
    "provider": {
      "@id": `${siteConfig.url}/#organization`
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Kota Batu"
      },
      {
        "@type": "City",
        "name": "Malang"
      }
    ],
    "url": options.url
  };
}

export function generateArticleSchema(options: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": options.title,
    "description": options.description,
    "image": [options.image.startsWith("http") ? options.image : `${siteConfig.url}${options.image}`],
    "datePublished": options.datePublished,
    "dateModified": options.dateModified || options.datePublished,
    "author": {
      "@type": "Organization",
      "name": options.authorName || siteConfig.name
    },
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": options.url
    },
    "inLanguage": "id-ID"
  };
}
