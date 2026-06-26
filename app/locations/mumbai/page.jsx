import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Footer1 from "@/components/footers/Footer1";
import Image from "next/image";
import MumbaiTimeline from "@/components/timeline/MumbaiTimeline";
import MumbaiView from "@/components/locations/mumbai/MumbaiView";
import MumbaiAllOverview from "@/components/locations/mumbai/MumbaiAllOverview";
import Reception from "@/components/locations/mumbai/Reception";

export const metadata = {
    title:
        "Mumbai Office – BPO & KPO Solutions | iLeads",
    description:
        "iLeads Mumbai offers scalable BPO, KPO, and call center services to enhance business efficiency and customer support across India.",
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
                                <h1 className="title split-collab">Mumbai</h1>
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
                                    <li className="tmp-breadcrumb-item active">Mumbai</li>
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
                                    alt="Mumbai Office"
                                    src="/assets/images/locations/location-details/Mumbai-Office.jpg"
                                    width={1290}
                                    height={200}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="project-details-content-wrap">
                                <h2 className="title">Introduction Mumbai Site</h2>
                                <p className="docs">
                                    We are more than just a BPO provider, we are your business growth partner. Headquartered in Dehradun, with a strong operational base
in Mumbai, India, we deliver smart, flexible outsourcing solutions that help businesses run smoother and grow faster. With a footprint that spans across India and the Middle East, we support clients from around the world in 17+ languages, offering services that are tailored, tech-enabled, and focused on real results.

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

                                {/* <MumbaiTimeline /> */}
                                <Reception />
                                <MumbaiView />
                                <MumbaiAllOverview />

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
