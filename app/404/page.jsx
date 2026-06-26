import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
    title: "Page not found | iLeads",
    description: "iLeads 404 error page - Page not found.",
    path: "/404",
});
export default function page() {
    return (
        <>
            <div className="about inner">
                <Header1 />
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner text-center">
                                    <h1 className="title split-collab">Page Not Found</h1>
                                    <ul className="page-list">
                                        <li className="tmp-breadcrumb-item">
                                            <Link href={`/`}>Home</Link>
                                        </li>
                                        <li className="icon">
                                            <i className="fa-solid fa-angle-right" />
                                        </li>
                                        <li className="tmp-breadcrumb-item active">Page Not Found</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="service-area tmp-section-gapTop tmp-section-gapBottom">
                    <div className="container">
                <div className="row justify-content-center">
                    
                    <div className="col-md-8 text-center">
                        <div className="error-code">404</div>
                        <p className="error-message">
                            Oops! You've hit a snag. This page seems to have vanished. Try heading back to the homepage.
                        </p>

                        <a href="/" className="btn btn-primary tmp-btn radius-round hover-shape btn-md mt-3" aria-label="Back Home">
                            Go Back Home
                        </a>

                    </div>
                </div>
                </div>
                </section>
                <Footer1 /> <CommonComponents />
            </div>
        </>
    );
}
