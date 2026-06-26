import React from "react";
import Image from "next/image";

export default function Education() {
  return (
    <section className="education-experience tmp-section-gapTop tmp-section-gapBottom">
      <div className="container">
        <div className="section-head mb--50">
            <h2 className="title">Work with Us!</h2>
            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">Unlock your potential at iLeads! Join our team for a rewarding career experience. Explore our openings and grow with us today!</p>
        </div>
        <div className="experiences-wrapper v2">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="Join Our Team"
                  width={630}
                  height={479}
                  src="assets/images/home-01/join-our-team.jpg"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head experiences-wrap-left-content text-align-left mb--50">
                <h3 className="title custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Join Our Team at iLeads Auxiliary Services Pvt. Ltd.{" "}
                  <span>
                    <Image
                      alt="custom-line"
                      width={81}
                      height={6}
                      src="/assets/images/custom-line/custom-line.png"
                    />
                  </span>
                </h3>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <p className="ex-para">
                    Are you looking to be part of a dynamic and rapidly expanding team in the field of Business Process Management (BPM) services? Look no further!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experiences-wrapper v2">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-head experiences-wrap-left-content text-align-left mb--50">
                <h3 className="title custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Employee Benefits that Empower You{" "}
                  <span>
                    <Image
                      alt="custom-line"
                      width={81}
                      height={6}
                      src="/assets/images/custom-line/custom-line.png"
                    />
                  </span>
                </h3>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <p className="ex-para">
                    Join iLeads and enjoy a host of employee benefits including competitive salaries, accidental insurance, professional development opportunities, and a positive work-life balance. We value our employees and are committed to their growth and well-being.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="Employee Benefits"
                  width={630}
                  height={479}
                  src="/assets/images/home-01/employee-benefits.png"
                />
              </div>
            </div>
            
          </div>
        </div>

        <div className="experiences-wrapper v2">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="Join Us Today"
                  width={630}
                  height={479}
                  src="/assets/images/home-01/join-today.jpg"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head experiences-wrap-left-content text-align-left mb--50">
                <h3 className="title custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Join Us Today!{" "}
                  <span>
                    <Image
                      alt="custom-line"
                      width={81}
                      height={6}
                      src="/assets/images/custom-line/custom-line.png"
                    />
                  </span>
                </h3>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <p className="ex-para">
                    If you are looking for a rewarding career where you can make a real impact and grow with a dynamic team, iLeads is the place for you. Explore our current openings and take the next step in your career with iLeads Auxiliary Services Pvt. Ltd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
