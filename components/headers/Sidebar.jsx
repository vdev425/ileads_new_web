"use client";
import Image from "next/image";

import { closeSidebar } from "@/utlis/toggleSidebar";

export default function Sidebar() {
  return (
    <div className="d-none d-xl-block">
      <div className="tmp-sidebar-area tmp_side_bar">
        <div className="inner">
          <div className="top-area">
            <a href="/" className="logo">
              <img
                className="logo-dark"
                alt="ileads Auxiliary Services PVT LTD"
                src="/assets/images/logo/logo-ileads.png"
                width={121}
                height={41}
              />
            </a>
            <div className="close-icon-area">
              <button
                className="tmp-round-action-btn close_side_menu_active"
                aria-label="Close Sidebar"
                onClick={closeSidebar}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="image-area-feature">
              <a href="/">
                <img
                  alt="ileads head office"
                  src="/assets/images/locations/Dehradun-Office.jpg"
                  width={340}
                  height={196}
                />
              </a>
            </div>
            <p className="disc">
              iLeads head office started in Dehradun, Uttarakhand in March 2010 as proprietary ownership and became private limited in March 2018, it eventually spread across India at various locations. It quickly emerged as a dynamic hub of operations and excellence. Over a period of time, the center has expanded to handle 15+ processes across diverse functions, supported by a strong and growing workforce of 1250+ employees. With a focus on performance, innovation, and client satisfaction, Ileads Dehradun continues to strengthen its presence as a key contributor to the organization’s overall growth story.
            </p>
            <div className="short-contact-area">
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-phone" />
                <div className="information tmp-link-animation">
                  <span>Call Now</span>
                  <a href="tel:9711139856" className="number">
                     +91 97111 39856
                  </a>
                </div>
              </div>
              {/* single contact information end */}
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-envelope" />
                <div className="information tmp-link-animation">
                  <span>Mail Us</span>
                  <b>For Business Enquiry:</b><br />
                  <a href="mailto:sunny@ileads.co.in"><p className="para text-white">sunny@ileads.co.in</p></a><br />
                  <a href="mailto:samuel@ileads.co.in"><p className="para text-white">samuel@ileads.co.in</p></a>
                </div>
              </div>
              {/* single contact information end */}
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-location-crosshairs" />
                <div className="information tmp-link-animation">
                  <span>My Address</span>
                  <span className="number">Commercial Complex, Behind Kailash Tower, E.C Road - 248001, Dehradun, Uttarakhand</span>
                </div>
              </div>
              {/* single contact information end */}
            </div>
            {/* social area start */}
            <div className="social-wrapper mt--20">
              <span className="subtitle">find with me</span>
              <div className="social-link">
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
            </div>
            {/* social area end */}
          </div>
        </div>
      </div>
      <a
        className="overlay_close_side_menu close_side_menu_active"
        aria-label="Close Menu"
        onClick={closeSidebar}
        href="#"
      />
    </div>
  );
}
