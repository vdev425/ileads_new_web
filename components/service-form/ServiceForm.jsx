"use client";
import React, { useRef } from "react";
import { toast } from "react-toastify";

export default function Appointment() {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      organization: formData.get('organization'),
      email: formData.get('email'),
      query: formData.get('query')
    };

    try {
      const response = await fetch('/api/service-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit inquiry');
      }

      toast.success("Service inquiry submitted successfully!", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
      form.current.reset();
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to submit inquiry!", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <section className="get-in-touch-area pt--80 tmp-section-gapBottom" id="Service-GetInTouch">
      <div className="container p-0">
        <div className="section-head mb--50 text-start">
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2" animation-end="">Looking for a customer experience transformation? You're at the right place then!</h2>
            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3" animation-end="">Trust us with all your support service needs. With a portfolio of over 30 prestigious clients, iLeads is among the fastest-growing companies in Uttarakhand, also recognized by Startup India.
            </p>
        </div>
        <div className="contact-get-in-touch-wrap">
          <div className="get-in-touch-wrapper tmponhover">
            <div className="row g-5 align-items-center">
              <div className="col-lg-12">
                <div className="contact-inner">
                  <div className="contact-form">
                    <form
                      className="tmp-dynamic-form"
                      id="contact-form"
                      ref={form}
                      onSubmit={handleSubmit}
                    >
                      <div className="contact-form-wrapper row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <input
                              className="input-field"
                              name="name"
                              id="name"
                              placeholder="Full Name"
                              type="text"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="organization" className="sr-only">Organization</label>
                            <input
                              className="input-field"
                              name="organization"
                              id="organization"
                              placeholder="Organization"
                              type="text"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <input
                              className="input-field"
                              id="email"
                              name="email"
                              placeholder="Email Address"
                              type="email"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="query" className="sr-only">Your Query</label>
                            <textarea
                              className="input-field"
                              placeholder="Your Query"
                              name="query"
                              id="query"
                              required
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="tmp-button-here">
                            <button
                              className="tmp-btn hover-icon-reverse radius-round w-100"
                              name="submit"
                              type="submit"
                              id="submit"
                              aria-label="Submit"
                            >
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">
                                  Submit
                                </span>
                                <span className="btn-icon">
                                  <i className="fa-sharp fa-regular fa-arrow-right" />
                                </span>
                                <span className="btn-icon">
                                  <i className="fa-sharp fa-regular fa-arrow-right" />
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
