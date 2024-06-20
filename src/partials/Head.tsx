import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>Candi Jolutundo - Sejarah, Informasi, dan Panduan Wisata</title>
      <meta name="description" content="Temukan sejarah, informasi lengkap, dan panduan wisata ke Candi Jolutundo, salah satu situs bersejarah terkenal di Indonesia." />
      <meta name="keywords" content="Candi Jolutundo, sejarah Candi Jolutundo, wisata Candi Jolutundo, informasi Candi Jolutundo, situs bersejarah Indonesia" />
      <meta name="author" content="Nama Anda" />

      {/* Open Graph for Social Media */}
      <meta property="og:title" content="Candi Jolutundo - Sejarah, Informasi, dan Panduan Wisata" />
      <meta property="og:description" content="Temukan sejarah, informasi lengkap, dan panduan wisata ke Candi Jolutundo, salah satu situs bersejarah terkenal di Indonesia." />
      <meta property="og:image" content="URL_TO_IMAGE.jpg" />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Candi Jolutundo - Sejarah, Informasi, dan Panduan Wisata" />
      <meta name="twitter:description" content="Temukan sejarah, informasi lengkap, dan panduan wisata ke Candi Jolutundo, salah satu situs bersejarah terkenal di Indonesia." />
      <meta name="twitter:image" content="URL_TO_IMAGE.jpg" />

      {/* Mobile Friendly */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://yourwebsite.com" />

      {/* Favicon */}
      <link rel="icon" href="path_to_your_favicon.ico" />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Candi Jolutundo",
            "description": "Temukan sejarah, informasi lengkap, dan panduan wisata ke Candi Jolutundo, salah satu situs bersejarah terkenal di Indonesia.",
            "image": "URL_TO_IMAGE.jpg",
            "url": "https://yourwebsite.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Alamat Candi Jolutundo",
              "addressLocality": "Kota",
              "addressRegion": "Provinsi",
              "postalCode": "Kode Pos",
              "addressCountry": "ID"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default Head;
