import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import SocialAccountability from "@/components/about/SocialAccountability";
import BpmService from "@/components/about/BpmService";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Social Accountability – Ethical & Community Focused | iLeads",
  description: "iLeads is committed to ethical practices and community welfare. Discover our social responsibility initiatives supporting people and sustainable growth.",
  path: "social-accountability",
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
                  <h1 className="title split-collab">Social Accountability</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Social Accountability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SocialAccountability />
        <BpmService />
        {/* <Contact parentClass="get-in-touch-area tmp-section-gapBottom tmp-section-gapTop" /> */}
        <Footer1 /> <CommonComponents />
      </div>
    
  );
}
