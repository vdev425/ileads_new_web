"use client";
import React from "react";
import Image from "next/image";

const SubscribeModal = () => {
    return (
        <>
            {/* Button trigger modal */}
            <button className="tmp-btn hover-icon-reverse radius-round w-auto" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <span className="icon-reverse-wrapper">
                    <span className="btn-text">Subscribe Now</span>
                    <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                    <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                </span>
            </button>

            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="bg_image--12 modal-content bg-subscribe">
                        <div className="modal-body px-5 pt-5 pb-5 section-bg-two">
                            <button
                                type="button"
                                id="btn-closed"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-labelledby="btn-closed"                                
                            ></button>
                            <Image
                                className="py-5"
                                src="/assets/images/home-01/subscribe.png"
                                alt="Subscribe Icon"
                                width={350}
                                height={250}
                            />
                            <h2 className="text-dark">Don’t Miss Out! Subscribe Now for exclusive News & Updates</h2>
                            <form className="subscribe-form mt-4">
                                <div className="form-group">
                              <input
                                className="input-field text-dark"
                                aria-label="Email Address"
                                name="name"
                                id="subscribe-email"
                                placeholder="Your Email Address"
                                type="text"
                                required
                              />
                            </div>
                                 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscribeModal;
