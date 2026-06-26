import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import DynamicServices from "@/components/common/DynamicServices";
import { serviceCards2, serviceCards3, serviceCards6, services2, services3, services4, services5 } from "@/data/services";
import Footer1 from "@/components/footers/Footer1";
import ServiceForm from "@/components/service-form/ServiceForm";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Services – BPO, KPO & Call Center Solutions | iLeads",
  description: "Discover tailored BPO, KPO, and call center services designed to enhance operations, customer experience, and business growth across industries.",
  path: "our-services",
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
                <h1 className="title split-collab">Our Services</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">Our Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DynamicServices cardHeadClass="OurServices"
        subTitle="Business Process Management Services"
        title="Streamline operations, enhance efficiency, and deliver lasting business value."
        description="For businesses seeking efficient Business Process Management (BPM) services, iLeads Auxiliary Services Private Limited offers tailored solutions for streamlined operations and growth. With round-the-clock operations and competitive pricing, we cater to businesses of all sizes. Serving industries like Global, PSU & Government, E-Commerce, and more, our services include Inbound Customer Support, Seller Support, Outbound Surveys, and Data Science Projects. Recognized by Startup India, we're committed to social responsibility and community support."
        serviceCard={services2}
      />
      <ServiceForm />
      <Footer1 />
      <Copyright /> <CommonComponents />
    </>
  );
}
