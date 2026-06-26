import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Services4 from "@/components/common/Services4";
import DynamicServices from "@/components/common/DynamicServices";
import { serviceCards3 } from "@/data/services";
import OurPurpose from "@/components/about/OurPurpose";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "About Us – Fastest-Growing BPO/KPO in Dehradun | iLeads",
  description: "Learn about iLeads, Dehradun’s fastest-growing BPO/KPO company. Discover our mission, core values, and how we deliver expert support services for businesses.",
  path: "about-us",
});
export default function page() {
  return (
    <>
      <div className="about inner">
        <Header1 /> 
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">About Company</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">About Company</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services4 />
        <DynamicServices 
          subTitle="Building a Culture of Excellence"
          title="The Core Values of iLeads"
          description="In today's dynamic business environment, fostering a culture of excellence is paramount for sustained success. At iLeads, we pride ourselves on embodying our core values in everything we do, from client interactions to internal operations. Let's delve into how each of our core values plays a crucial role in shaping our organizational ethos:"
          serviceCard={serviceCards3}
        />
        <OurPurpose />
        <Footer1 /> <CommonComponents />
      </div>
    </>
  );
}
