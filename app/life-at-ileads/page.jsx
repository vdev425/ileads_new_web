import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import LifeAtIleads from "@/components/life-at-ileads/LifeAtIleads";
import Gallery from "@/components/life-at-ileads/Gallery";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Life at Work – Culture & Growth | iLeads",
  description: "Explore life at iLeads—our culture, employee growth, training, and work environment designed to support careers in BPO, KPO, and call center services.",
  path: "life-at-ileads",
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
                  <h1 className="title split-collab">Life at iLeads</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Life at iLeads</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LifeAtIleads />
        <Gallery />
        {/* <Contact parentClass="get-in-touch-area tmp-section-gapBottom tmp-section-gapTop" /> */}
        <Footer1 /> <CommonComponents />
      </div>
    
  );
}
