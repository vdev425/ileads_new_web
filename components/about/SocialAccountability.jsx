import React from "react";
import Image from "next/image";

export default function Education() {
  return (
    <section className="education-experience tmp-section-gapTop tmp-section-gapBottom">
      <div className="container">
        <div className="section-head mb--50">
          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">At iLeads, we deeply understand our social responsibilities and are dedicated to supporting our community in every way possible. Our dedicated responsibility team, integrated with the administration, addresses various social issues and provides assistance wherever required in the region.</p>
        </div>
        <div className="experiences-wrapper v2">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="Addressing Hunger Among Street Children"
                  width={630}
                  height={479}
                  src="/assets/images/home-01/Street-Children.jpg"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head experiences-wrap-left-content text-align-left mb--50">
                <h2 className="title custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Addressing Hunger Among Street Children{" "}
                  <span>
                    <Image
                      alt="custom-line"
                      width={81}
                      height={6}
                      src="/assets/images/custom-line/custom-line.png"
                    />
                  </span>
                </h2>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <p className="ex-para">
                    iLeads is dedicated to providing meals to the street children of Dehradun. The city's rapid urbanization has led to an increase in the number of street children who often go hungry. Our team members regularly distribute balanced, cooked meals as part of our ongoing efforts to alleviate hunger among these children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experiences-wrapper v2">
          <div className="row">
            <div className="col-lg-6 order-2 order-md-1">
              <div className="section-head experiences-wrap-left-content text-align-left mb--50">
                <h2 className="title custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Supporting Prem Dham Old Age Home{" "}
                  <span>
                    <Image
                      alt="custom-line"
                      width={81}
                      height={6}
                      src="/assets/images/custom-line/custom-line.png"
                    />
                  </span>
                </h2>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <p className="ex-para">
                    Through regular donation drives, our company has gathered furniture, books, kitchen equipment, and various other essential items for the senior citizens living at Prem Dham, a wonderful home for the elderly.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-md-2">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="Supporting Prem Dham Old Age Home"
                  width={630}
                  height={479}
                  src="/assets/images/home-01/Old-Age-Home.jpg"
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
                  alt="Supporting Apna Ghar Orphanage"
                  width={630}
                  height={479}
                  src="/assets/images/home-01/Ghar-Orphanage.jpg"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head experiences-wrap-left-content text-align-left mb--50">
                <h2 className="title custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Supporting Apna Ghar Orphanage{" "}
                  <span>
                    <Image
                      alt="custom-line"
                      width={81}
                      height={6}
                      src="/assets/images/custom-line/custom-line.png"
                    />
                  </span>
                </h2>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <p className="ex-para">
                    In our donation drives, we give out a significant number of educational books, workbooks, activity and coloring books, furniture, decorations, and toys for the children at the Apna Ghar Orphanage. iLeads has also organized food drives to gather snacks, goodies, and food items for the children living there. Additionally, our employees volunteer their time to visit and engage with the children, playing and spending quality time with them.
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
