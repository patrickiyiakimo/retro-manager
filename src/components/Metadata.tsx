import React from "react";
import { Helmet } from "react-helmet";

export const Metadata = ({
  title,
  keywords,
  description,
}: {
  title: string;
  keywords?: string;
  description: string;
}): React.ReactElement => {
  return (
    <Helmet>
      <title>{title}</title>
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="description" content={description} />
    </Helmet>
  );
};
