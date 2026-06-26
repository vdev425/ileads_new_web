import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Facts from "@/components/common/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Services from "@/components/common/Services";
import Testimonials from "@/components/homes/home-1/Testimonials";
import CommonComponents from "@/components/common/CommonComponents";
import GlobalTimeline from "@/components/timeline/GlobalTimeline";
import Portfolios2 from "@/components/homes/home-4/Portfolios2";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "iLeads: Expert BPO, KPO & Call Center Services in India",
  description: "iLeads delivers reliable BPO, KPO, and call center solutions across India, with 24/7 support, excellence, and affordable services for 1000+ clients.",
  path: "",
  themeColor: "#060606", 
});

export default function Home() {
  return (
    <>
      <Header1 />
      <Hero />
      <Services />
      <Facts />
      <GlobalTimeline />
      <Testimonials />
      <Portfolios2 />
      <Footer1 />
      <Copyright />
      <CommonComponents />
    </>
  );
}
