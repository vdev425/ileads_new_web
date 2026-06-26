"use client";
import Image from "next/image";
import Link from "next/link";
import { footerLinks, footerLinksWhite } from "@/data/footerLinks";
export default function Footer1({
  darkLogo = "/assets/images/logo/logo-ileads.png",
  lightLogo = "/assets/images/logo/logo-ileads.png",
}) {
  return (
    <>
      <footer className="footer-area footer-style-one-wrapper bg-color-footer bg_images tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-one">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        className="logo-dark"
                        alt="ILeads Footer Logo"
                        src={darkLogo}
                        width={121}
                        height={41}
                      />
                    </Link>
                  </div>
                  <p className="description me-5 mr-0">
                    iLeads is one of the fastest-growing and leading BPO/KPO/ITES industry-based companies in the nation. Started in 2010, in the Dehradun region, our company has grown successfully over the years to become one of the most experienced teams in Data, Business and Call Processing works. We are proud to be recognized by both Start Up India as well as Start Up Uttarakhand and the winner of the 2020 Best Start Up by the Chamber of Commerce & Industry of India.
                  </p>
                  <div className="social-link footer">
                    <a href="https://www.instagram.com/iLeadsworld/" target="_blank" aria-label="Instagram">
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="https://in.linkedin.com/company/ileadsworld" target="_blank" aria-label="LinkedIn">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="https://www.youtube.com/@ileadslife" target="_blank" aria-label="YouTube">
                      <i className="fa-brands fa-youtube" />
                    </a>
                    <a href="https://www.facebook.com/ileadsworld/" target="_blank" aria-label="Facebook">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="https://www.indiamart.com/iLeadsauxiliary/" target="_blank" aria-label="Indiamart">
                      <Image src="/assets/images/footer/indiamart.png" alt="Indiamart" width="17" height="17"/>
                    </a>
                    <a href="https://www.justdial.com/jdmart/Dehradun/iLeads-Auxiliary-Services-Pvt-Ltd-Behind-Kailash-Tower-Dehradun-City/9999PX135-X135-170513143015-J2E1_BZDET/catalogue" target="_blank" aria-label="Justdial">
                      <Image src="/assets/images/footer/justdial.png" alt="Justdial" width="17" height="17"/>
                    </a>
                  </div>
                  {/* <form
                    onSubmit={(e) => e.preventDefault()}
                    className="newsletter-form-1 mt--40"
                  >
                    <input type="email" placeholder="Email Adress" />
                    <span className="form-icon">
                      <i className="fa-regular fa-envelope" />
                    </span>
                  </form> */}
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="single-footer-wrapper quick-link-wrap">
                  <h3 className="ft-title">Quick Link</h3>
                  <ul className="ft-link tmp-link-animation dark-content">
                    {footerLinks.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                  
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h4 className="ft-title">Contact</h4>
                  <ul className="ft-link tmp-link-animation">
                    <li>
                      <p>
                        <b>For Business Enquiry:</b><br></br>
                        <a href="mailto:sunny@ileads.co.in" className="">sunny@ileads.co.in</a><br></br>
                        <a href="mailto:samuel@ileads.co.in" className="">samuel@ileads.co.in</a>
                      </p>
                    </li>
                    <li>
                      <div>
                        <b>For Grievance:</b><br></br>
                        <div className="mb-4">
                          <div className="description mt-0 fw-bold">Anubha Sinha</div>
                          <a href="mailto:anubha@ileads.co.in" className="">anubha@ileads.co.in</a>
                          <p className="description mt-0">9634890941</p>
                        </div>
                        <div className="">
                          <div className="description mt-0 fw-bold">Pooja Jaiswal</div>
                          <a href="mailto:pooja@ileads.co.in" className="">pooja@ileads.co.in</a>
                          <p className="description mt-0">9711139856</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h4 className="ft-title">D-U-N-S Number: 861348833</h4>
                  <div className="row flex-custom-footer">
                    <div className="col-6 mt-3">
                        <img src="/assets/images/footer/nsic.jpg" alt="NSIC" width="157" height="200" />
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-between mt-3">
                        <img src="/assets/images/footer/n6719p.png" alt="Confederation of Indian Industry" width="639" height="294"/>
                        <img src="/assets/images/footer/find-us-on-ariba-network.png" alt="Find Us on Ariba Network" width="693" height="294"/>
                        <img src="/assets/images/footer/msmelogo.jpg" alt="MSME" width="176" height="69"/>
                    </div>
                    
                    <div className="col-6 col-md-6 pt-3 mt-3">
                        <img className="me-2"
                        src="/assets/images/footer/legal-entity-certificate.jpg"
                        alt="Legal Entity Certificate"
                        width="300" height="82"
                        />
                    </div>
                    <div className="col-6 col-md-6 pt-3 mt-3">
                        <img className="" src="/assets/images/footer/startup-UK.png" alt="Startup uttarakhand" width="300" height="82"/>
                        <img className="mt-4" src="/assets/images/footer/startup-india.jpg" alt="Startup India" width="300" height="82"/>
                    </div>
                    <div className="col-md-12 pt-3 mt-3">
                        <img className="me-2" src="/assets/images/footer/ileads-iso-9000-iso-9001-2015.png" alt="iLeads ISO-9000-ISO-9001 2015" width="66" height="66"/>
                        <img className="me-2" src="/assets/images/footer/ileads-iso-27001-2013.png" alt="iLeads-ISO-27001-2013" width="66" height="66"/>
                        <img className="me-2" src="/assets/images/footer/ileads-iso-20000-2018.png" alt="iLeads-ISO-20000-2018" width="66" height="66"/>
                        <img src="/assets/images/footer/ileads-iso-22301-2019.png" alt="iLeads-ISO-22301-2019" width="66" height="66"/>
                    </div>
                </div>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>{" "}
    </>
  );
}
