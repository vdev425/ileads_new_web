import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function locations() {
  return (
    <section className="education-experience tmp-section-gapTop tmp-section-gapBottom">
      <div className="container">
        <div className="section-head mb--50">
          <h3 className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">Our Offices Across Multiple Locations</h3>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Connecting With You, Wherever You Are</h2>
          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">We are proud to have a strong presence across several cities, making it easier for our clients and partners to connect with us. With offices in multiple locations, we ensure accessibility, faster support, and a deeper understanding of local markets. Wherever you are, our team is always within reach to serve you better.</p>
        </div>
        <div className="experiences-wrapper v2">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="Dehradun-Office"
                  width={630}
                  height={479}
                  fetchpriority="high"
                  src="/assets/images/locations/Dehradun-Office.webp"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head experiences-wrap-left-content text-align-left mb--50">
                <h3 className="title custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Dehradun{" "}
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
                   iLeads head office started in Dehradun, Uttarakhand in March 2010 as proprietary ownership and became private limited in March 2018, it eventually spread across India at various locations. Over a period of time, the center has expanded to handle 15+ processes across diverse functions, supported by a strong and growing workforce of 1250+ employees. 
                  </p>
                  <p className="ex-para">
                    <b>Address</b><br />
                    Commercial Complex, Behind Kailash Tower, E.C Road - 248001, Dehradun, Uttarakhand
                  </p>
                  <Link href={"/locations/dehradun"} className="tmp-btn hover-icon-reverse radius-round btn-border btn-md" aria-label="Read more about Dehradun location">
                    Read More
                  </Link>
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
                  Gurugram{" "}
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
                    iLeads Gurugram, inaugurated in July 2023, has quickly emerged as a dynamic hub of operations and excellence. In a short span of time, the center has expanded to handle 10+ processes across diverse functions, supported by a strong and growing workforce of 450+ employees.
                  </p>
                  <p className="ex-para">
                    <b>Address (Branch 1)</b><br />
                    Intellect Towers, 249, 3rd Floor, Udyog Vihar, Phase 4, Gurgaon, Haryana 122001
                  </p>
                  <p className="ex-para">
                    <b>Address (Branch 2)</b><br />
                    390, phase IV, Udyog Vihar, Sector 19, index tower Gurugram, Haryana 122022
                  </p>
                  <Link href={"/locations/gurugram"} className="tmp-btn hover-icon-reverse radius-round btn-border btn-md" aria-label="Read more about Gurugram location">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="Gurugram Office"
                  width={630}
                  height={479}
                  fetchpriority="high"
                  src="/assets/images/locations/Gurugram-Office.jpg"
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
                  alt="Noida Office"
                  width={630}
                  height={479}
                  fetchpriority="high"
                  src="/assets/images/locations/Noida-Office.jpg"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head experiences-wrap-left-content text-align-left mb--50">
                <h3 className="title custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Noida{" "}
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
                    iLeads Noida, inaugurated in March 2024, has quickly emerged as a dynamic hub of operations and excellence. In a short span of time, the center has expanded to handle 15+ processes across diverse functions, supported by a strong and growing workforce of 700+ employees. 

                  </p>
                  <p className="ex-para">
                    <b>Address</b><br />
                    A22 Sector 16, Near Sector 16 Metro Station, Noida - 201301, Uttar Pradesh
                  </p>
                  <Link href={"/locations/noida"} className="tmp-btn hover-icon-reverse radius-round btn-border btn-md" aria-label="Read more about Noida location">
                    Read More
                  </Link>
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
                  Mumbai{" "}
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
                    iLeads Gurugram, inaugurated in July 2023, has quickly emerged as a dynamic hub of operations and excellence. In a short span of time, the center has expanded to handle 10+ processes across diverse functions, supported by a strong and growing workforce of 450+ employees.
                  </p>
                  <p className="ex-para">
                    <b>Address</b><br />                    
                    3rd Floor, Allied Digital House, A4, Millennium Business Park, Navi Mumbai - 400710, Maharashtra
                  </p>
                  <Link href={"/locations/mumbai"} className="tmp-btn hover-icon-reverse radius-round btn-border btn-md" aria-label="Read more about Mumbai location">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="Mumbai Office"
                  width={630}
                  height={479}
                  fetchpriority="high"
                  src="/assets/images/locations/Mumbai-Office.jpg"
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
                  alt="Bangluru Office"
                  width={630}
                  height={479}
                  fetchpriority="high"
                  src="/assets/images/locations/Bangluru-Office.jpg"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head experiences-wrap-left-content text-align-left mb--50">
                <h3 className="title custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Bengaluru{" "}
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
                    iLeads Bangalore, inaugurated in August 2023, has quickly emerged as a dynamic hub of operations and excellence. In a short span of time, the center has expanded to handle 10+ processes across diverse functions, supported by a strong and growing workforce of 450+ employees.

                  </p>
                  <p className="ex-para">
                    <b>Address</b><br />
                    Maruthi Chambers, Ground Floor, Silk Board Junction, Bommanahalli, Bengaluru, Karnataka
                  </p>
                  <Link href={"/locations/bengaluru"} className="tmp-btn hover-icon-reverse radius-round btn-border btn-md" aria-label="Read more about Bengaluru location">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
