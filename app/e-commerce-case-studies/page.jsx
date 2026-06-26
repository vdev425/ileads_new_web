import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import { allServices } from "@/data/services";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import CommonComponents from "@/components/common/CommonComponents";
import Footer1 from "@/components/footers/Footer1";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "E-Commerce Case Study | iLeads",
  description: "Discover how iLeads helped a leading e-commerce company scale operations, improve CSAT and streamline customer service across voice, chat and backend support.",
});
export default async function page({ params }) {
  const { slug } = await params;
  const serviceItem =
    allServices.find((blog) => blog.slug == slug) || allServices[0];
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">An E-Commerce Company</h1>
                <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                        <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                        <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item">
                        <Link href={`/case-studies`}>Case Studies</Link>
                    </li>
                    <li className="icon">
                        <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">
                        An E-Commerce Company
                    </li>
                </ul>
                {/* <div className="circle-1"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-details-area-wrapper tmp-section-gap">
            <div className="container">
              <div className="row row--40 justify-content-center">
                <div className="col-lg-10">
                    <h2 className="title split-collab">E-Commerce Case Studies</h2>
                    <div className="section-head text-start mb--50">
                        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1" animation-end="">
                            <span className="subtitle">Case Study: Company XXX (An E-Commerce Company) - Driving Growth and Efficiency in Customer Service Operations
                            </span>
                        </div>
                    </div>
                  <div className="service-thumnail-wrap">
                    <Image
                      alt="An E-Commerce Company"
                      src="/assets/images/home-01/case-s_ecommerce.jpg"
                      width={1000}
                      height={476}
                    />
                  </div>
                  <h2 className="title-mini split-collab">Overview</h2>
                  <p className="doc-para">
                    This Company, is one of India's largest e-commerce platforms, partnered with iLeads to enhance its customer service operations. With a vision to create a reliable and seamless commerce ecosystem, the Company sought to improve customer experiences and streamline its processes.
                  </p>
                  <h2 className="title-mini split-collab">
                    Scope of Service:
                  </h2>
                  <p className="doc-para">
                    TiLeads provided comprehensive inbound and outbound services, including voice/non-voice support, chat assistance, email services, and backend operations. The partnership aimed to deliver exceptional customer service across various touchpoints.
                  </p>
                  
                  <h2 className="title-mini split-collab">
                    Key initiative
                  </h2>
                  <div className="doc-para">
                    <ul>
                        <li className=""><span className="text-decoration-underline fw-bold">Outbound Voice Process (OVS LOB):</span> Started with a team of 20, the OVS LOB expanded to 45 employees in just 1.5 months. The process involved verifying product shipping addresses to prevent delivery issues.  </li>
                        <li className=""><span className="text-decoration-underline fw-bold">Chat Customer Support Process (CHAT LOB):</span> Initially staffed with 20 employees, the CHAT LOB expanded to 45 employees within 1.5 months. The focus was on providing instant resolutions to customer queries, requests, and complaints.  </li>
                        <li className=""><span className="text-decoration-underline fw-bold">Inbound Voice Process (CMN LOB):</span> Started with 35 employees, the CMN LOB grew to 60 employees in just one month. The team assisted customers with their queries, requests, and complaints, with a focus on maintaining high CSAT scores.   </li>
                        <li className=""><span className="text-decoration-underline fw-bold">Backend RMT LOB:</span> A blended process started with 10 employees, the RMT LOB expanded to 15 employees in the coming month. The team closed customer concerns via email and outbound calls.   </li>
                    </ul>
                  </div>
                  <h2 className="title-mini split-collab">iLeads and Company XXX Base Camp Achievements:</h2>
                  <div className="doc-para">
                    <ul>
                        <li className="">Completed seamless skill-based hiring within the provided timeframe, achieving a team of 60+ employees to fill a 40-seat delivery. </li>
                        <li className="">Maintained attrition under the 10% mark from training to floor hit, ensuring a stable workforce. </li>
                        <li className="">Achieved scale-up for 150 seats across four separate LOBs (CMS, OVE, WA CHAT, RMT Backend). </li>
                        <li className="">Achieved a progressive CSAT movement from 79% to 83% on a month-on-month basis, ranking second among tenured vendors. </li>
                        <li>Successfully ramped up operations in 2022, demonstrating scalability and operational excellence. </li>
                    </ul>
                  </div>
                    <h2 className="title-mini split-collab">Conclusion</h2>
                  <p className="doc-para">
                    iLeads' partnership with the Company has been instrumental in driving growth, efficiency, and customer satisfaction in their customer service operations. Through strategic initiatives and a focus on quality, iLeads has helped the Company create a more reliable and frictionless commerce ecosystem, aligning with their vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
      <Footer1 />
      <Copyright /> <CommonComponents />
    </>
  );
}
