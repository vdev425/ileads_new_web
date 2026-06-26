"use client";
import Link from "next/link";
import React from "react";

const SiteMap = () => {
  return (
<main>

    <section className="hero tmp-section-gapTop tmp-section-gapBottom" id="SiteMap">
      <div className="container">
        <div className="section-head mb--50">
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2" animation-end="">Your guide to exploring iLeads</h2>
            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3" animation-end="">Navigate easily through our website using the site map below. From company insights and leadership details to services and career opportunities, find direct links to all key sections of iLeads in one place.</p>
        </div>

        <div className="row g-4">
            <div className="col-12 col-md-4">
            <div className="bg-card h-100 sitemap-card">
                <div className="card-body p-5">
                <h3 className="card-title fs-2">Home</h3>
                <ul className="list-unstyled site-list ps-4">
                    <li><a href="/">Home (ileads.co.in)</a></li>
                </ul>
                </div>
            </div>
            </div>

            <div className="col-12 col-md-4">
            <div className="bg-card h-100 sitemap-card">
                <div className="card-body p-5">
                <h3 className="card-title fs-2">About Us</h3>
                <ul className="list-unstyled site-list ps-4">
                    <li><a href="/about-us">Who Are We?</a></li>
                    <li><a href="/our-team">Our Team</a></li>
                    <li><a href="/social-accountability">Social Accountability</a></li>
                </ul>
                </div>
            </div>
            </div>

            <div className="col-12 col-md-4">
            <div className="bg-card h-100 sitemap-card">
                <div className="card-body p-5">
                <h3 className="card-title fs-2">Brand</h3>
                <ul className="list-unstyled site-list ps-4">
                    <li><a href="/newsroom">Newsroom</a></li>
                    <li><a href="/case-studies">Case Studies</a>
                        <ul className="ps-4">
                            <li><a href="/e-commerce-case-studies">E-Commerce Company</a></li>
                            <li><a href="/a-financial-institution-company">A Financial Institution Company</a></li>
                            <li><a href="/online-retailer-case-studies">An Online Retailer Company</a></li>
                            <li><a href="/insurance-case-studies">An Insurance Company</a></li>
                            <li><a href="/bfsi-nbfc-case-studies">A BFSI/NBFC Company</a></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
            </div>

            <div className="col-12 col-md-4">
            <div className="bg-card h-100 sitemap-card">
                <div className="card-body p-5">
                <h3 className="card-title fs-2">Services</h3>
                <ul className="list-unstyled site-list ps-4">
                    <li><a href="/our-services">Our Services</a></li>
                    <li><a href="/industries-we-serve">Industries We Serve</a></li>
                    <li><a href="/cybersecurity-solutions">Cybersecurity Solutions</a></li>
                </ul>
                </div>
            </div>
            </div>

            <div className="col-12 col-md-4">
            <div className="bg-card h-100 sitemap-card">
                <div className="card-body p-5">
                <h3 className="card-title fs-2">Technology</h3>
                <ul className="list-unstyled site-list ps-4">
                    <li><a href="/technology">Technology</a></li>
                </ul>
                </div>
            </div>
            </div>

            <div className="col-12 col-md-4">
                <div className="bg-card h-100 sitemap-card">
                    <div className="card-body p-5">
                    <h3 className="card-title fs-2">Locations</h3>
                    <ul className="list-unstyled site-list ps-4">
                    <li><a href="/locations">Locations</a>
                        <ul className="ps-4">
                            <li><a href="/locations/dehradun">Dehradun</a></li>
                            <li><a href="/locations/gurugram">Gurugram</a></li>
                            <li><a href="/locations/noida">Noida</a></li>
                            <li><a href="/locations/mumbai">Mumbai</a></li>
                            <li><a href="/locations/bengaluru">Bengaluru</a></li>
                        </ul>
                    </li>
                </ul>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-4">
                <div className="bg-card h-100 sitemap-card">
                    <div className="card-body p-5">
                    <h3 className="card-title fs-2">Career</h3>
                    <ul className="list-unstyled site-list ps-4">
                        <li><a href="/hiring-process">Hiring Process</a></li>
                        <li><a href="/career">We Are Hiring</a></li>
                        <li><a href="/life-at-ileads">Life at iLeads</a>
                            <ul className="ps-4">
                                <li><a href="/life-at-ileads-dehradun">Dehradun Office</a></li>
                                <li><a href="/life-at-ileads-gurugram">Gurugram Office</a></li>
                                <li><a href="/life-at-ileads-noida">Noida Office</a></li>
                                <li><a href="/life-at-ileads-mumbai">Mumbai Office</a></li>
                                <li><a href="/life-at-ileads-bengaluru">Bengaluru Office</a></li>
                            </ul>
                        </li>
                        <li><a href="/job-application">Apply Now</a></li>
                    </ul>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-4">
            <div className="bg-card h-100 sitemap-card">
                <div className="card-body p-5">
                <h3 className="card-title fs-2">Contact & Legal</h3>
                <ul className="list-unstyled site-list ps-4">
                    <li><a href="/contact-us">Contact Us</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/posh-policy">POSH Policy</a></li>
                    <li><a href="/terms-of-use">Terms & Conditions</a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>


    </div>
    </section>
  </main>
  );
};

export default SiteMap;