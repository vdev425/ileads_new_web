import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Career from "@/components/career/Career"
import Vacancies from "@/components/career/Vacancies";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Careers – Jobs in BPO, KPO & Call Center | iLeads",
  description: "Explore rewarding career opportunities in BPO, KPO, and call center services at iLeads. Build your professional journey with expert guidance.",
  path: "career",
});
export default function page() {
  return (

      <div className="about inner">
        <Header1 />
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">Career</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Career</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Career />
        <Vacancies />
        {/* <Contact parentClass="get-in-touch-area tmp-section-gapBottom tmp-section-gapTop" /> */}
        <Footer1 /> <CommonComponents />
      </div>
    
  );
}
