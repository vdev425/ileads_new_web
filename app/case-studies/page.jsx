import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Footer1 from "@/components/footers/Footer1";
import Blogs2 from "@/components/common/Blogs2";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Case Studies – Client Success Stories | iLeads",
  description: "Explore iLeads case studies showcasing real business challenges and how our BPO and KPO solutions deliver measurable results and improved performance.",
  path: "case-studies",
});
export default function page() {
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">Case Studies</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">Case Studies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blogs2 />
      <Footer1 />
      <Copyright /> <CommonComponents />
    </>
  );
}
