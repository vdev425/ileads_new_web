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
  title: "BFSI/NBFC Case Study | iLeads",
  description: "Discover how iLeads enhanced collection efficiency and client satisfaction for a BFSI/NBFC firm — streamlining debt collection and boosting cash-flow performance.",
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
                <h1 className="title split-collab">A BFSI/NBFC Company</h1>
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
                        A BFSI/NBFC Company
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
                    <h2 className="title split-collab">BFSI/NBFC Case Studies</h2>
                    <div className="section-head text-start mb--50">
                        <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1" animation-end="">
                            <span className="subtitle">Case Study: Company XXX (A BFSI/ NBFC Company) - Enhancing Collection Efficiency and Client Satisfaction
                            </span>
                        </div>
                    </div>
                    <div className="service-thumnail-wrap">
                        <Image
                        alt="A BFSI/NBFC Company"
                        src="/assets/images/home-01/case-s_BFSI-NBFC.jpg"
                        width={1000}
                        height={476}
                        />
                    </div>
                    <h2 className="title-mini split-collab">Overview:</h2>
                    <p className="doc-para">
                    A BFSI/NBFC Company, a prominent player in the BFSI/NBFC sector, is a subsidiary of Company XXX Holdings & Investment Limited. With a diverse product portfolio exceeding 100 products across 40 verticals, this Company prides itself on its mantra of "Do More, Earn More." The Company emphasizes rewarding and recognizing its employees and partners, fostering a culture of excellence.
                    </p>
                    <h2 className="title-mini split-collab">Client Overview:</h2>
                    <p className="doc-para">
                       This Company sought to improve its outbound services, particularly in the areas of current due and debt collection calls, customer satisfaction, and follow-up calls. Despite a countrywide presence and partnerships with leading firms and manufacturers, the Company aimed to enhance its collection efficiency and client acquisition processes.
                    </p>
                    <h2 className="title-mini split-collab">Challenges Faced:</h2>
                    <p className="doc-para">
                        iLeads implemented various solutions, including online sales by advisors, automation in call monitoring, hiring and coaching, and incentivizing agents based on performance. These strategies aimed to improve lead conversion, increase sales, and boost employee retention.
                    </p>

                    <h2 className="title-mini split-collab">Solutions Provided:</h2>
                    <p className="doc-para">
                        The scope of service for this Company included outbound calling, current due collection, debt collection, customer satisfaction, and follow-up calls. The key metrics for outbound operations encompassed data allocation versus conversion, call answering rates, collection achievement percentage, call quality, customer satisfaction, login hours, and talk time.
                    </p>

                    <h2 className="title-mini split-collab">Results Achieved:</h2>
                    <p className="doc-para">
                        Through our collaborative efforts, this Company experienced significant improvements in its collection efficiency and client satisfaction levels. The pre-due date collection rate increased by a substantial percentage, while the collection rate for 00-30 days also saw a notable improvement. Additionally, the debt collection rate showed positive growth, indicating a reduction in outstanding debts and an increase in cash flow for the Company.
                    </p>

                    <h2 className="title-mini split-collab">Conclusion:</h2>
                    <p className="doc-para">
                        By leveraging our expertise in outbound operations and debt collection management, we helped this Company achieve its objectives of enhancing collection efficiency and client satisfaction. Our tailored solutions, combined with a focus on meeting key metrics and delivering results, contributed to the overall success of the project.
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
