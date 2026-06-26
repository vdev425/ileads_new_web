import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Portfolio3 from "@/components/common/Portfolio3";
import Leaderships from "@/components/about/Leaderships";
import OurTeam from "@/components/about/OurTeam";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Our Team – Experienced BPO & KPO Leaders | iLeads",
  description: "Meet the experienced leadership team behind iLeads. Our experts drive excellence in BPO, KPO, and call center services to ensure client success.",
  path: "our-team",
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
                  <h1 className="title split-collab">Our Team</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Our Team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Portfolio3 />
        <OurTeam />
        <Leaderships />
        {/* <Contact parentClass="get-in-touch-area tmp-section-gapBottom tmp-section-gapTop" /> */}
        <Footer1 /> <CommonComponents />
      </div>
    
  );
}
