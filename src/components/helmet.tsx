import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  keywords: string;
  description: string;
  title: string;
  favicon?: string;
  faviconURL?: string;
}

const ReactHelmet: React.FC<Props> = ({
  keywords,
  description,
  title,
  favicon,
  faviconURL,
}) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" type="image/x-icon" href={faviconURL || ''} />
      <title>{title}</title>

      <meta property="og:title" content={title} />
      <meta property="og:image" content={favicon} />
      <meta property="og:site_name" content="" />
      <meta property="og:description" content={description} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={favicon} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
};
export default ReactHelmet;
