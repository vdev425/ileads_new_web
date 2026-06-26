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
  title: "Financial Institution Case Study | iLeads",
  description: "Learn how iLeads transformed customer support for a major financial institution — delivering 24/7 service, faster email response turnaround and higher inbound call efficiency.",
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
                <h1 className="title split-collab">A Financial Institution Company</h1>
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
                        A Financial Institution Company
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
                    <h2 className="title split-collab">Financial Institution Case Studies</h2>
                    <div className="section-head text-start mb--50">
                        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1" animation-end="">
                            <span className="subtitle">Case Study: Company XXX (A Financial Institution Company) - Revolutionizing Customer Support with iLeads Auxiliary Services Pvt. Ltd.
                            </span>
                        </div>
                    </div>
                  <div className="service-thumnail-wrap">
                    <Image
                      alt="A Financial Institution Company"
                      src="/assets/images/home-01/case-s_financial.jpg"
                      width={1000}
                      height={476}
                    />
                  </div>
                  <h2 className="title-mini split-collab">Milestones:</h2>
                  
                  <div className="doc-para">
                   <ul className="list-disc">
                        <li className=""><span className="text-decoration-underline fw-bold">80% of IBC Volume Catered by iLeads:</span> iLeads has emerged as a dominant player, catering to 80% of the volume in the Inbound Call (IBC) segment. This achievement underscores the company's ability to efficiently manage and handle a large volume of incoming calls, showcasing its expertise in customer service.  </li>
                        <li className=""><span className="text-decoration-underline fw-bold">24X7 Calling Support:</span> iLeads is the sole partner in the industry providing round-the-clock calling support. This commitment to uninterrupted service ensures that customers receive assistance whenever they need it, enhancing customer satisfaction and loyalty.  </li>
                        <li className=""><span className="text-decoration-underline fw-bold">Email Response TAT Reduced to 8 Hours:</span> iLeads has significantly improved the Company’s email response time, reducing it to 8 hours. This accomplishment is noteworthy as it surpasses the agreed TAT of 48 hours, demonstrating iLeads' dedication to providing prompt and efficient email support to its customers. </li>
                        <li className=""><span className="text-decoration-underline fw-bold">100% Outcalls to IVR Callers: </span> iLeads has implemented a proactive approach by making outcalls to all callers who attempted to connect via IVR but could not. This initiative ensures that no customer concern goes unaddressed, leading to improved customer engagement and satisfaction.</li>
                        <li><span className="text-decoration-underline fw-bold">Outcall to Same-Day Repeat Callers:</span> iLeads has taken proactive steps to understand the reasons behind repeated calls from customers on the same day. By identifying and addressing the root causes of repeated calls, iLeads aims to minimize the number of such instances, thereby enhancing the overall customer experience. </li>
                    </ul>
                  </div>
                  <h2 className="title-mini split-collab">Impact:</h2>
                  <p className="doc-para">
                    iLeads' relentless focus on innovation and customer-centricity has resulted in tangible benefits for both the company and its customers. The implementation of these milestones has led to improved customer satisfaction, reduced response times, and enhanced operational efficiency.
                  </p>
                    <h2 className="title-mini split-collab">Conclusion</h2>
                  <p className="doc-para">
                    iLeads Auxiliary Services Pvt. Ltd., has set a benchmark in the BPO BPM industry by achieving these significant milestones. By prioritizing customer satisfaction and continuously innovating its customer support operations, iLeads has emerged as a trusted partner for businesses seeking exceptional customer service solutions.
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
