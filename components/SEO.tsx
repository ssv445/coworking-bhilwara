import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
}

export default function SEO({
  title,
  description,
  url = process.env.NEXT_PUBLIC_SITE_URL,
  image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.png`,
  type = 'website'
}: SEOProps) {
  const fullTitle = `${title} | CoWorking Bhilwara`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="CoWorking Bhilwara" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "CoWorking Bhilwara",
            "description": description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "67, EAST EXTENSION, SUBHASH NAGAR",
              "addressLocality": "BHILWARA",
              "addressRegion": "RAJASTHAN",
              "postalCode": "311001",
              "addressCountry": "IN"
            },
            "telephone": "+919782049418",
            "email": "shyam+coworking@readybytes.in",
            "url": url,
            "image": image,
            "priceRange": "₹200-3000"
          })
        }}
      />
    </Head>
  );
}