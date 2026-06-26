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
  title: "Insurance Company Case Study | iLeads",
  description: "Explore how iLeads helped a life insurance company improve lead conversion, sales, retention and operational efficiency with tailored support solutions.",
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
                <h1 className="title split-collab">An Insurance Company</h1>
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
                        An Insurance Company
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
                    <h2 className="title split-collab">Insurance Case Studies</h2>
                    <div className="section-head text-start mb--50">
                        <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1" animation-end="">
                            <span className="subtitle">Case Study: Company XXX (An Insurance Company)</span>
                        </div>
                    </div>
                  <div className="service-thumnail-wrap">
                    <Image
                      alt="An Insurance Company"
                      src="/assets/images/home-01/case-s_Insurance.jpg"
                      width={1000}
                      height={476}
                    />
                  </div>
                  <h2 className="title-mini split-collab">Introduction</h2>
                  <p className="doc-para">
                    This case study highlights iLeads' successful partnership with a life insurance company, showcasing their innovative solutions and strategic approach that led to significant improvements in sales, retention, and operational efficiency.
                  </p>
                  <h2 className="title-mini split-collab">Client Overview:</h2>
                  <p className="doc-para">
                   The client, a leading life insurance provider, faced challenges in lead conversion, data management, and employee retention. They partnered with iLeads to enhance their online sales process, improve conversion rates, and streamline operations.
                  </p>

                  <h2 className="title-mini split-collab">iLeads' Solutions:</h2>
                  <p className="doc-para">
                   iLeads implemented various solutions, including online sales by advisors, automation in call monitoring, hiring and coaching, and incentivizing agents based on performance. These strategies aimed to improve lead conversion, increase sales, and boost employee retention.
                  </p>
                  
                  <h2 className="title-mini split-collab">
                    Results Achieved:
                  </h2>
                  <div className="doc-para">
                    <ul className="">
                        <li className="">Higher conversion rates, with a significant increase in sales versus issuance</li>
                        <li className="">Improved sales per month and average ticket size, leading to enhanced revenue.</li>
                        <li className="">Higher employee retention and productivity, with daily productivity tracking and skill-based agent mapping.</li>
                        <li>Enhanced customer experience and satisfaction, demonstrated by improved contactability and lead conversion rate</li>
                        <li>Process Excellence &amp; Process Transformation</li>
                    </ul>
                  </div>
                  <h2 className="title-mini split-collab">iLeads and Company XXX Base Camp Achievements:</h2>
                  <div className="doc-para">
                    <ul className="">
                        <li><span className="text-decoration-underline fw-bold">Conversion Rate Increase:</span> Achieved a conversion rate increase from 35% to 65%</li>
                        <li><span className="text-decoration-underline fw-bold">Sales Growth:</span> Recorded a steady growth in sales per month, from 31,151,212 units in June to 44,408,948 units in November. </li>
                        <li><span className="text-decoration-underline fw-bold">Revenue Enhancement:</span> Average ticket size increased from 31,353 to 36,454.</li>
                        <li><span className="text-decoration-underline fw-bold">Employee Retention: </span> Achieved an average employee retention rate of 85%.</li>
                    </ul>
                  </div>
                    <h2 className="title-mini split-collab">Extended Conclusion:</h2>
                  <p className="doc-para">
                    iLeads' strategic approach and innovative solutions have had a transformative impact on the client's business. By implementing smart coaching plans, automation tools, and targeted lead generation strategies, iLeads has significantly improved the client's sales performance, employee retention, and customer satisfaction. Overall, iLeads has provided exceptional support to the client, driving growth and operational excellence in the competitive life insurance market.
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
