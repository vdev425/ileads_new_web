"use client";
import React, { useRef } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const form = useRef();

  const sandMail = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      organization: formData.get('organization'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success("Message sent successfully!", {
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
      toast.error("Failed to send message!", {
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
    <div className="contact-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="contact-info-wrap">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <h2 className="title">Address</h2>
                <p className="para">Commercial Complex, Behind Kailash Tower,</p>
                <p className="para"> E.C Road - 248001, Dehradun, Uttarakhand</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope" />
                </div>
                <h2 className="title">E-mail</h2>
                {/* <b>For Business Enquiry:</b> */}
                <a href="mailto:sunny@ileads.co.in">
                  <p className="para">sunny@ileads.co.in</p>
                </a>
                <a href="mailto:samuel@ileads.co.in">
                  <p className="para">samuel@ileads.co.in</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone" />
                </div>
                <h2 className="title">Call Us</h2>
                 <p className="para"> <a href="tel:9711139856" className="number">
                    +91 97111 39856
                  </a></p>
                <p className="para">Monday - Sunday 9:00 AM - 6:00 PM</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tpm Get In touch start */}
      <section className="get-in-touch-area tmp-section-gapTop">
        <div className="container">
          <div className="contact-get-in-touch-wrap">
            <div className="get-in-touch-wrapper tmponhover">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5">
                  <div className="section-head text-align-left">
                    <h3 className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <span className="subtitle">GET IN TOUCH</span>
                    </h3>
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                      Get in touch with us today to grow your business.
                    </h2>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                      We’d love to hear from you! Whether you have questions, feedback, or simply want to connect, our team is always ready to assist. Reach out to us through phone, email, or the contact form, and we’ll get back to you as soon as possible. Let’s stay connected and build something great together.
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-inner">
                    <div className="contact-form">
                      <div id="form-messages" className="error" />
                      <form
                        className="tmp-dynamic-form"
                        id="contact-form"
                        ref={form}
                        onSubmit={sandMail}
                      >
                        <div className="contact-form-wrapper row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label htmlFor="contact-name" className="sr-only">Your Name</label>
                              <input
                                className="input-field"
                                name="name"
                                id="contact-name"
                                placeholder="Your Name"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label htmlFor="organization" className="sr-only">Organization</label>
                              <input
                                className="input-field"
                                type="text"
                                id="organization"
                                name="organization"
                                placeholder="Organization"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label htmlFor="contact-email" className="sr-only">Email</label>
                              <input
                                className="input-field"
                                id="contact-email"
                                name="email"
                                placeholder="Your Email"
                                type="email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
                              <input
                                className="input-field"
                                id="contact-phone"
                                name="phone"
                                placeholder="Phone Number"
                                type="text"
                                required
                              />
                            </div>
                          </div>                         
                          
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label htmlFor="contact-message" className="sr-only">Your Message</label>
                              <textarea
                                className="input-field"
                                placeholder="Your Message"
                                name="message"
                                id="contact-message"
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
                                aria-label="Appointment Now"
                              >
                                <span className="icon-reverse-wrapper">
                                  <span className="btn-text">
                                    Appointment Now
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
      {/* Tpm Get In touch End */}
    </div>
  );
}
