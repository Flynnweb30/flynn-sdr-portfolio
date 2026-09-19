import { useEffect } from 'react';
import { SEO_DATA, SEOMetadata } from '../data/seoData';

interface SEOHeadProps {
  page: string;
  canonical?: string;
  metadata?: Partial<SEOMetadata>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ page, canonical, metadata }) => {
  const currentData = metadata || SEO_DATA[page] || SEO_DATA.home;
  const canonicalUrl = canonical || currentData.canonical;

  useEffect(() => {
    if (currentData.title) {
      document.title = currentData.title;
    }

    const updateMetaTag = (attribute: string, key: string, content: string) => {
      let meta = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    if (currentData.description) {
      updateMetaTag('name', 'description', currentData.description);
      updateMetaTag('property', 'og:description', currentData.description);
      updateMetaTag('name', 'twitter:description', currentData.description);
    }

    if (currentData.title) {
      updateMetaTag('property', 'og:title', currentData.title);
      updateMetaTag('name', 'twitter:title', currentData.title);
    }

    if (canonicalUrl) {
      updateMetaTag('property', 'og:url', canonicalUrl);
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    if (currentData.ogImage) {
      updateMetaTag('property', 'og:image', currentData.ogImage);
      updateMetaTag('name', 'twitter:image', currentData.ogImage);
    }

    if (currentData.keywords && currentData.keywords.length > 0) {
      updateMetaTag('name', 'keywords', currentData.keywords.join(', '));
    }
  }, [currentData, canonicalUrl]);

  return null;
};