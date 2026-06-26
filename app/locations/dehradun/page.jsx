import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Footer1 from "@/components/footers/Footer1";
import Image from "next/image";
import Timeline from "@/components/timeline/Timeline";
import DehradunOveriew from "@/components/dehradunoverview/DehradunOverview";
import DehradunAllOverview from "@/components/dehradunalloverview/DehradunAllOverview";

export const metadata = {
  title:
    "Dehradun Office – BPO & Call Center | iLeads",
  description:
    "iLeads Dehradun provides reliable BPO, KPO, and call center services to support local businesses in customer care and operations.",
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
                <h1 className="title split-collab">Dehradun</h1>
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
                  <li className="tmp-breadcrumb-item active">Dehradun</li>
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
                  alt="Dehradun Office"
                  src="/assets/images/locations/location-details/Dehradun-Office.jpg"
                  width={1290}
                  height={200}
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="project-details-content-wrap">
                <h2 className="title">Introduction Dehradun Site</h2>
                <p className="docs">
                  ILeads head office started in Dehradun, Uttarakhand in March 2010 as proprietary ownership and became private limited in March 2018, it eventually spread across India at various locations. It quickly emerged as a dynamic hub of operations and excellence. Over a period of time, the center has expanded to handle 15+ processes across diverse functions, supported by a strong and growing workforce of 1250+ employees. With a focus on performance, innovation, and client satisfaction, Ileads Dehradun continues to strengthen its presence as a key contributor to the organization’s overall growth story.
                </p>


                <div className="section-head text-align-left mb--50 mt--50">
                  <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
                    About Us
                    <span>
                      <Image
                        alt="custom-line"
                        src="/assets/images/custom-line/custom-line.png"
                        width={81}
                        height={6}
                      />
                    </span>
                  </h2>
                  <h3 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Board of Directors
                  </h3>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Our Board of Directors brings together a diverse group of experienced leaders, innovators, and visionaries who guide our organization with integrity and strategic insight. With expertise across industries, they provide governance, direction, and oversight to ensure sustainable growth and long-term success.<br />

                    Together, they uphold our mission, foster accountability, and drive innovation while keeping the best interests of our stakeholders at the heart of every decision.
                  </p>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="bg-benner-img-three">
                        <Image
                          className="tmp-scroll-trigger tmp-zoom-in animation-order-2"
                          alt="Ankur Sinha"
                          width={689}
                          height={871}
                          src="/assets/images/home-01/team-img-01.jpg"
                        />
                        <p className="text-center my-2  mini-title">
                          Ankur Sinha <br />(Director)
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="bg-benner-img-three">
                        <Image
                          className="tmp-scroll-trigger tmp-zoom-in animation-order-2"
                          alt="Anubha Sinha"
                          width={689}
                          height={871}
                          src="/assets/images/home-01/team-img-02.jpg"
                        />
                        <p className="text-center my-2 mini-title">
                          Anubha Sinha<br />(Director - CFO)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                

                <Timeline />              

                <DehradunOveriew />               

                <DehradunAllOverview />                
                
                <div className="section-head text-align-left mb--50 mt--50 docs">
                    <h2 className="title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
                        Our Awards & Recognition
                    </h2>
                    <p className="docs">A testament to our commitment and excellence, the awards and recognitions we have received reflect the trust of our clients, the dedication of our team, and our continuous pursuit of innovation and quality.</p>
                    <div className="check-box-wrap">
                        <ul>
                            <li>
                                <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                <span>
                                    <i className="fa-solid fa-circle-check" />
                                </span>
                                Company of the Year-Best Startup Winner
                                </h4>
                            </li>
                            <li>
                                <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                <span>
                                    <i className="fa-solid fa-circle-check" />
                                </span>
                                Ministry of Micro, Small & Medium Enterprise-Chamber of Commerce & Industry of India – Most promising outsourcing companies 2020.
                                </h4>
                            </li>
                            <li>
                                <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                <span>
                                    <i className="fa-solid fa-circle-check" />
                                </span>
                                Recognized member of Confederation of Indian Industry.
                                </h4>
                            </li>
                            <li>
                                <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                <span>
                                    <i className="fa-solid fa-circle-check" />
                                </span>
                                Recognized by startup India & Startup Uttarakhand 

                                </h4>
                            </li>
                            <li>
                                <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                <span>
                                    <i className="fa-solid fa-circle-check" />
                                </span>
                                ISO 9001 Certification
                                </h4>
                            </li>
                            <li>
                                <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                <span>
                                    <i className="fa-solid fa-circle-check" />
                                </span>
                                ISO 270001 Certification
                                </h4>
                            </li> 
                        </ul>
                    </div>
                </div>  
              </div>
            </div>
            <div className="col-lg-4">
              <div className="signle-side-bar project-details-area tmponhover">
                <div className="header">
                  <h3 className="title">Client Appreciation</h3>
                </div>
                <div className="body">
                  <div className="project-details-info">
                    <span className="ms-0">
                      Dear Ileads Team,<br />

                      I would like to take this opportunity, on behalf of Thomas Cook India Ltd, to extend our sincere appreciation to the Ileads team for the consistent support and excellent services you have been delivering.
                      Your dedication, professionalism, and proactive approach have played an important role in ensuring smooth operations and seamless customer experiences. The commitment shown by your team reflects not only in the quality of work but also in the trust and strong partnership we share.
                      We truly value this collaboration and look forward to continuing our journey together, achieving even greater milestones and maintaining the high standards of service that benefit both our organizations.
                      Thank you once again for your efforts and partnership.<br />
                    </span><br />
                    <div className="project-details-info">
                      Regards, <br />
                      From Thomas Cook Client
                    </div>

                  </div>
                </div>

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
