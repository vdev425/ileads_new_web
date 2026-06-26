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
  title: "Online Retailer Case Study | iLeads",
  description: "See how iLeads boosted growth and market share for an online B2B retailer through catalog optimization, data enrichment, and enhanced sales & UX.",
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
                <h1 className="title split-collab">An Online Retailer Company</h1>
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
                        An Online Retailer Company
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
                    <h2 className="title split-collab">Online Retailer Case Studies</h2>
                    <div className="section-head text-start mb--50">
                        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1" animation-end="">
                            <span className="subtitle">Case Study: Company XXX (An Online Retailer Company) - Enhancing E-Commerce Services and Market Share
                            </span>
                        </div>
                    </div>
                    <div className="service-thumnail-wrap">
                        <Image
                        alt="An Online Retailer Company"
                        src="/assets/images/home-01/case-s_retailer.jpg"
                        width={1000}
                        height={476}
                        />
                    </div>
                    <h2 className="title-mini split-collab">Client Overview:</h2>
                    <p className="doc-para">
                    This Company is a leading e-commerce company that provides business-to-business (B2B) and customer-to-customer (C2C) sales services through a web portal. With an aggregate of 32.5 Crores, 55.2 Crores, and 72.3 Crores visits in Fiscal Year 2017, 2018, and 2019 respectively, the Company has established itself as a major player in the Indian e-commerce market. The company holds 60% of the market share of the online B2B space in India and is committed to making doing business easy for its users.
                    </p>
                    <h2 className="title-mini split-collab">Scope of Service - Outbound Process:</h2>
                    <p className="doc-para">
                        Our services for this Company included verified GST free catalog page creation, data enrichment, B2B sales, and website designing. These efforts were aimed at enhancing the user experience, improving the quality of the platform, and ultimately increasing the company's market share and revenue.
                    </p>
                    <h2 className="title-mini split-collab">Results Achieved:</h2>
                    <p className="doc-para">
                        Through our partnership, the Company saw significant improvements in its operations and market position. The verified GST free catalog page creation helped improve the visibility and credibility of sellers on the platform, leading to an increase in the number of transactions. Data enrichment efforts ensured that the platform had accurate and up-to-date information, enhancing the overall user experience. The focus on B2B sales and website designing further contributed to the company's growth, helping it maintain its position as a market leader.
                    </p>

                    <h2 className="title-mini split-collab">Conclusion:</h2>
                    <p className="doc-para">
                        Our collaboration with this Company has been instrumental in helping the company achieve its mission of making doing business easy. By providing high-quality services and focusing on key areas such as verified catalog creation, data enrichment, and B2B sales, we were able to support the Company in maintaining its dominance in the online B2B space in India. As the Company continues to grow and expand its services, we look forward to continuing our partnership and contributing to its success.
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
