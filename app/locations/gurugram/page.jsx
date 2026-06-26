import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Footer1 from "@/components/footers/Footer1";
import Image from "next/image";
import GurugramTimeline from "@/components/timeline/GurugramTimeline";
import GurugramView from "@/components/locations/gurugram-overview/GurugramView";
import GuruGramAllOverview from "@/components/locations/gurugram-overview/GuruGramAllOverview";
import Reception from "@/components/locations/gurugram-overview/Reception";

export const metadata = {
  title:
    "Gurugram Office – BPO & KPO Services | iLeads",
  description:
    "iLeads Gurugram delivers expert BPO, KPO, and call center solutions to help businesses improve efficiency and customer satisfaction.",
};
export default function page() {
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">Gurugram</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/locations`}>Locations</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">Gurugram</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-details-area-wrapper tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-thumnail-wrap">
                <div></div>
                <Image
                  alt="Gurugram Site"
                  src="/assets/images/locations/location-details/Gurugram-Office.jpg"
                  width={1290}
                  height={200}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="project-details-content-wrap">
                <h2 className="title">Introduction Gurugram Site</h2>
                <p className="docs">
                  Ileads Gurugram, inaugurated in July 2023, has quickly emerged as a dynamic hub of operations and excellence. In a short span of time, the center has expanded to handle 10+ processes across diverse functions, supported by a strong and growing workforce of 450+ employees. With a focus on performance, innovation, and client satisfaction, Ileads Gurugram continues to strengthen its presence as a key contributor to the organization’s overall growth story.

                </p>

                  <div className="section-head text-align-left mb--50 mt--50 docs">
                    <h2 className="title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
                        Inaugration of Second Site
                    </h2>
                    <p className="docs">We are proud to announce the inauguration of our Second site in May 2025. This state-of-the-art facility is designed to support our growing operations and provide a productive and collaborative work environment.</p>
                    <ul>
                        <li>
                            <div className="check-box-wrap">
                              <h5>Key Features of the New Site:</h5>
                                <ul>
                                    <li>
                                        <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                            <span>
                                                <i className="fa-solid fa-circle-check" />
                                            </span>
                                            Seating Capacity: 184 workstations to accommodate our expanding team.
                                        </h4>
                                    </li>
                                    <li>
                                        <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                            <span>
                                                <i className="fa-solid fa-circle-check" />
                                            </span>
                                            Training Room: Equipped with 15 seats to facilitate skill development and learning programs.
                                        </h4>
                                    </li>
                                    <li>
                                        <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                            <span>
                                                <i className="fa-solid fa-circle-check" />
                                            </span>
                                            Interview Cabins: One cabin designed for a seamless recruitment experience.
                                        </h4>
                                    </li>
                                    <li>
                                        <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                            <span>
                                                <i className="fa-solid fa-circle-check" />
                                            </span>
                                            Manager Cabins: Two cabins to enable efficient leadership operations.
                                        </h4>
                                    </li>
                                </ul>
                                <p className="docs mt--20">This milestone reflects our commitment to innovation, growth, and providing an exceptional workplace for our team.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <GurugramTimeline />  
                <Reception />
                <GurugramView />
                <GuruGramAllOverview />
                        
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer1 />
      <Copyright /> <CommonComponents />
    </>
  );
}
