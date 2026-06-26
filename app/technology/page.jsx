import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Footer1 from "@/components/footers/Footer1";
import Technology from "@/components/technology/Technology"
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Technology-Driven BPO & Call Center Solutions | iLeads",
  description: "iLeads uses advanced technology, automation, and analytics to deliver efficient, secure, and high-performance BPO, KPO, and call center services.",
  path: "technology",
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
                <h1 className="title split-collab">Technology</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">Technology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Technology />
      <Footer1 />
      <Copyright /> <CommonComponents />
    </>
  );
}
