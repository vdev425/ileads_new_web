import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import DynamicServices from "@/components/common/DynamicServices";
import { serviceCards2, serviceCards3, serviceCards6, services2, services3, services4, services5, industriesweserve } from "@/data/services";
import Footer1 from "@/components/footers/Footer1";
import ServiceForm from "@/components/service-form/ServiceForm";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Industries We Serve – Custom BPO & KPO Solutions | iLeads",
  description: "iLeads provides industry-specific BPO and KPO services for finance, healthcare, e-commerce, retail, and more to help businesses grow efficiently.",
  path: "industries-we-serve",
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
                <h1 className="title split-collab">Industries We Serve</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">Industries We Serve</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DynamicServices cardHeadClass="OurServices"
        subTitle="Driving Excellence Across Industries"
        title="Key Industries"
        description="Our services cater to a wide range of industries, ensuring that businesses across various sectors receive the support they need to thrive. Whether you're in global operations, e-commerce, or healthcare, we have the expertise to assist you. Providing tailored solutions to meet your needs & challenges is our specialty! Explore our comprehensive list of industries below:"
        serviceCard={industriesweserve}
      />
      <ServiceForm />
      <Footer1 />
      <Copyright /> <CommonComponents />
    </>
  );
}
