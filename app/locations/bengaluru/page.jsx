import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Footer1 from "@/components/footers/Footer1";
import Image from "next/image";
import BengaluruTimeline from "@/components/timeline/BengaluruTimeline";
import BengaluruView from "@/components/locations/bengaluru/BengaluruView";
import BengaluruAllOverview from "@/components/locations/bengaluru/BengaluruAllOverview";
import Reception from "@/components/locations/bengaluru/Reception";
import ServerRoom from "@/components/locations/bengaluru/ServerRoom";
import InaugurationSite from "@/components/locations/bengaluru/InaugurationSite";

export const metadata = {
    title:
        "Bengaluru Office – BPO & Call Center | iLeads",
    description:
        "iLeads Bengaluru delivers professional BPO, KPO, and call center services to support business growth and superior customer care.",
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
                                <h1 className="title split-collab">Bengaluru</h1>
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
                                    <li className="tmp-breadcrumb-item active">Bengaluru</li>
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
                                    alt="Bengaluru Office"
                                    src="/assets/images/locations/location-details/Bangluru-Office.jpg"
                                    width={1290}
                                    height={200}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="project-details-content-wrap">
                                <h2 className="title">Introduction Bengaluru Site</h2>
                                <p className="docs">
                                    iLeads Bangalore, inaugurated in August 2023, has quickly emerged as a dynamic hub of operations and excellence. In a short span of time, the center has expanded to handle 10+ processes across diverse functions, supported by a strong and growing workforce of 450+ employees. With a focus on performance, innovation, and client satisfaction, Ileads Bangalore continues to strengthen its presence as a key contributor to the organization’s overall growth story.
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

                                <BengaluruTimeline />
                                <InaugurationSite />
                                <Reception />
                                <BengaluruView />
                                <BengaluruAllOverview />
                                <ServerRoom />

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
