"use client";
import React from "react";
import Nav1 from "./Nav1";
import Image from "next/image";
import Link from "next/link";
import { openSidebar } from "@/utlis/toggleSidebar";
import { openMobilemenu } from "@/utlis/toggleMobilemenu";
export default function Header1({
  darkLogo = "/assets/images/logo/logo-ileads.png",
  lightLogo = "/assets/images/logo/logo-ileads.png",
}) {
  return (
    <header className="tmp-header-area-start header-one header--sticky header--transparent">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-content">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    className="logo-dark"
                    alt="ILeads Logo"
                    src={darkLogo}
                    width={121}
                    height={41}
                  />
                </Link>
              </div>
              <nav className="tmp-mainmenu-nav d-none d-xl-block">
                <Nav1 />
              </nav>
              <div className="tmp-header-right-wrapper d-flex align-items-center">
                <div className="tmp-header-btn d-none d-lg-block">
                  <Link href={`/job-application`} className="btn btn-sm tmp-btn fs-4 radius-round hover-shape" aria-label="Apply Now">
                    Apply Now
                  </Link>
                </div>
              </div>
              <div className="tmp-header-right">
                
                <div className="actions-area">
                  <div className="tmp-side-collups-area d-none d-xl-block">
                    <button
                      name="Open Sidebar"
                      className="tmp-menu-bars tmp_button_active"
                      onClick={openSidebar}
                      aria-label="Open Menu"
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button
                      name="Open Mobile Menu"
                      className="tmp-menu-bars humberger_menu_active"
                      onClick={openMobilemenu}
                      aria-label="Open Mobile Menu"
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
