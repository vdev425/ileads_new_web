import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Contact from "@/components/others/Contact";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Contact Us - White Theme | Get in Touch | iLeads",
  description: "Contact iLeads through our white theme contact page. Get in touch for BPO, KPO, and call center services. We're here to help with your business needs.",
  path: "contact-white",
});
export default function page() {
  return (
    <>
      <div className="tmp-white-version">
        <Header1 />
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">Contact</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
