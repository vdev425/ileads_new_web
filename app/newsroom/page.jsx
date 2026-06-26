import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Blogs4 from "@/components/common/Blogs4";
import Video from "@/components/newsroom/Video";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Newsroom – Insights & Updates on BPO/KPO | iLeads",
  description: "Stay updated with iLeads Newsroom: industry insights, trends, and updates on BPO, KPO, and call center solutions across India.",
  path: "newsroom",
});
export default function page() {
  return (
    <>
      <div className="about inner" id="Newsroom">
        <Header1 />
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">Newsroom</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Newsroom</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Blogs4 />
        <Video />     
        {/* <Contact parentClass="get-in-touch-area tmp-section-gapBottom tmp-section-gapTop" /> */}
        <Footer1 /> <CommonComponents />
      </div>
    </>
  );
}
