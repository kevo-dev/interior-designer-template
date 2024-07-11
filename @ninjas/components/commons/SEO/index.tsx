import React from "react";
import Head from "next/head";

export type SEOProps = {
  headTitle: string;
};

const SEO: React.FC<SEOProps> = ({ headTitle }) => {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = "Posh Interiors";
  const title = hasHeadTitle ? `${headTitle} | ${baseTitle}` : baseTitle;

  const description =
    "Be seen professionally on the internet, reach new markets for your services or products";
  const image = "/images/seo.png";
  const urlBase = "poshinteriors.vercel.app";

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;
