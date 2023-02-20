import Head from "next/head";

export default function (seo: {
  content: {
    keywords: string;
    description: string;
    title: string;
  };
}) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"
      />
      <meta name="keywords" content={seo.content.keywords} />
      <meta name="description" content={seo.content.description} />
      <meta name="robots" content="index, follow" />
      <meta name="applicable-device" content="pc,mobile" />
      <meta name="format-detection" content="telephone=no" />
      <title>{seo.content.title}</title>
    </Head>
  );
}
