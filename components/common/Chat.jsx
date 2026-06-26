"use client";
import React, { useRef } from "react";
import { toast } from "react-toastify";

export default function Chat() {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/chat', {
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
    <div className="ready-chatting-option tmp-ready-chat">
      <input type="checkbox" id="click" />
      <label htmlFor="click" aria-label="Fill out the form below to get started">
        <i className="fab fa-facebook-messenger" />
        <i className="fas fa-times" />
      </label>
      <div className="wrapper">
        <div className="head-text">Transform Your Business with Our Customer-Centric Services</div>
        <div className="chat-box">
          <div className="desc-text">
            Fill out the form below to get started.
          </div>
          <form
            className="tmp-dynamic-form"
            ref={form}
            onSubmit={handleSubmit}
          >
            <div className="field">
              <input
                className="input-field"
                name="name"
                placeholder="Your Name"
                type="text"
                required
                aria-label="Your Name"
              />
            </div>
            <div className="field">
              <input
                className="input-field"
                name="email"
                placeholder="Your Email"
                type="email"
                required
                aria-label="Your Email"
              />
            </div>
            <div className="field textarea">
              <textarea
                className="input-field"
                placeholder="Your Message"
                name="message"
                aria-label="Your Message"
                required
                defaultValue={""}
              />
            </div>
            <div className="field">
              <button name="submit" type="submit" aria-label="Send Message">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
