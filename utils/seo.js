// const BASE_URL = 'https://localhost:3000';
const BASE_URL = 'https://web.ileads.co.in/'; 

export function generateCanonicalUrl(path = '') {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (!cleanPath) {
    return BASE_URL;
  }
  
  return `${BASE_URL}${cleanPath}`;
}

export function generateMetadata({ title, description, path = '', themeColor, openGraph = {} }) {
  const canonicalUrl = generateCanonicalUrl(path);
  
  const metadata = {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'iLeads',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}assets/images/home-01/og-img.jpg`,
          width: 1200,
          height: 630,
          alt: title || 'iLeads',
        }
      ],
      ...openGraph,
    }
  };

   if (themeColor) {
    metadata.themeColor = themeColor;
  }

  return metadata;

}
