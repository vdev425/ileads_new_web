import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Footer1 from "@/components/footers/Footer1";
import Locations from "@/components/locations/Locations";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Locations – Offices Across India | iLeads",
  description: "Locate iLeads offices in Dehradun, Gurugram, Noida, Mumbai, and Bengaluru offering expert BPO, KPO, and call center support across India.",
  path: "locations",
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
                <h1 className="title split-collab">Locations</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">Locations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Locations />
      <Footer1 />
      <Copyright /> <CommonComponents />
    </>
  );
}
