import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Footer1 from "@/components/footers/Footer1";
import Image from "next/image";
import NoidaTimeline from "@/components/timeline/NoidaTimeline";
import NoidaView from "@/components/locations/noida/NoidaView";
import NoidaAllOverview from "@/components/locations/noida/NoidaAllOverview";
import Reception from "@/components/locations/noida/Reception";

export const metadata = {
    title:
        "Noida Office – BPO & Call Center Experts | iLeads",
    description:
        "iLeads Noida provides trusted BPO, KPO, and call center services, helping businesses streamline operations and enhance client support.",
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
                                <h1 className="title split-collab">Noida</h1>
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
                                    <li className="tmp-breadcrumb-item active">Noida</li>
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
                                    alt="Noida Office"
                                    src="/assets/images/locations/location-details/Noida-Office.jpg"
                                    width={1290}
                                    height={200}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="project-details-content-wrap">
                                <h2 className="title">Introduction Noida Site</h2>
                                <p className="docs">
                                    iLeads Noida, inaugurated in March 2024, has quickly emerged as a dynamic hub of operations and excellence. In a short span of time, the center has expanded to handle 15+ processes across diverse functions, supported by a strong and growing workforce of 700+ employees. With a focus on performance, innovation, and client satisfaction, Ileads Noida continues to strengthen its presence as a key contributor to the organization’s overall growth story.

                                </p>

                                {/* <div class="tree text-center">
                                    <ul>
                                        <li>
                                            <div class="card p-3">
                                                <h5 class="mb-1">Prashanth</h5>
                                                <p class="mb-0 text-white docs">(Site Head - Bangalore)</p>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div class="card p-3">
                                                        <h6 class="mb-1">Director</h6>
                                                        <p class="mb-0 text-white docs">Anubha Sinha</p>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <div class="card p-3">
                                                                <h6 class="mb-1">Manager</h6>
                                                                <p class="mb-0 text-white docs">Rahul Sharma</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="card p-3">
                                                                <h6 class="mb-1">Team Lead</h6>
                                                                <p class="mb-0 text-white docs">Priya Verma</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div class="card p-3">
                                                        <h6 class="mb-1">CTO</h6>
                                                        <p class="mb-0 text-white docs">Ravi Kumar</p>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <div class="card p-3">
                                                                <h6 class="mb-1">Developer</h6>
                                                                <p class="mb-0 text-white docs">Sneha Patel</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="card p-3">
                                                                <h6 class="mb-1">Designer</h6>
                                                                <p class="mb-0 text-white docs">Aman Gupta</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div> */}

                                <NoidaTimeline />
                                <Reception />
                                <NoidaView />
                                <NoidaAllOverview />

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
