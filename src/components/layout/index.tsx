import Footer from "../footer";
import HeadSeo from "../headSeo";
import Navbar from "../navbar";

export default function Layout(props: {
  children: React.ReactNode;
  seo: {
    keywords: string;
    description: string;
    title: string;
  };
}) {
  return (
    <>
      <HeadSeo content={props.seo} />
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
