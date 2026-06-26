"use client";
import { menuItems } from "@/data/menu";
import { closeMobilemenu } from "@/utlis/toggleMobilemenu";
import { auto } from "@popperjs/core";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function MobileMenu() {
  const pathname = usePathname();
  const menuRef = useRef(null);
  const innerRef = useRef(null);
  const [activeParent, setActiveParent] = useState(-1);
  useEffect(() => {
    function handleClick(event) {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        if (innerRef.current && innerRef.current.contains(event.target)) {
        } else {
          closeMobilemenu();
        }
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="d-block d-xl-none">
      <div ref={menuRef} className="tmp-popup-mobile-menu">
        <div ref={innerRef} className="inner">
          <div className="header-top">
            <div className="logo">
              <a href="/" className="logo-area">
                <img
                  className="logo-dark"
                  alt="ILeads Logo"
                  src="/assets/images/logo/logo-ileads.png"
                  width={auto}
                  height={auto}
                />
              </a>
            </div>
            <div className="close-menu">
              <button
                className="close-button tmp-round-action-btn" name="close-button" aria-label="Close Modal"
                onClick={closeMobilemenu}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <ul className="tmp-mainmenu">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${item.hasDropdown ? "has-dropdown" : ""} ${
                  item.submenu
                    ? item.submenu.some(
                        (elm) =>
                          elm.href.split("/")[1] == pathname.split("/")[1]
                      )
                      ? "menu-item-open"
                      : ""
                    : ""
                }`}
              >
                {item.isLink ? (
                  <Link
                    className={`${
                      item.href.split("/")[1] == pathname.split("/")[1]
                        ? "active"
                        : ""
                    }`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() =>
                      setActiveParent((pre) => (pre == index ? -1 : index))
                    }
                    className={activeParent == index ? "open" : ""}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <i className="fa-regular fa-chevron-down" />
                    )}
                  </a>
                )}

                {item.hasDropdown && (
                  <ul
                    className="submenu"
                    style={{
                      display: activeParent == index ? "block" : "none",
                    }}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          className={`${
                            subItem.href.split("/")[1] == pathname.split("/")[1]
                              ? "active"
                              : ""
                          }`}
                          href={subItem.href}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

            <div className="tmp-header-btn mt--30 mb--20">
              <Link href={`/job-application`} className="btn btn-sm tmp-btn fs-4 radius-round hover-shape w-100" aria-label="Apply Now">
                Apply Now
              </Link>
            </div>

          {/* social area start */}
          <div className="social-wrapper mt--40">
            <span className="subtitle">find with me</span>
            <div className="social-link">
              <a href="https://www.instagram.com/iLeadsworld/" target="_blank" aria-label="Instagram">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="https://in.linkedin.com/company/ileadsworld" target="_blank" aria-label="Linkedin">
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href="https://www.youtube.com/@ileadslife" target="_blank" aria-label="Youtube">
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
  );
}
