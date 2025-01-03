'use client'
import React, { useState } from "react";
import "@/Components/Contact/ContactSection.css"; // Import Vanilla CSS

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      {/* Container */}
      <div className="contact-container">
        {/* Section Title */}
        <h2 className="contact-title">Contact Me</h2>

        {/* Subtitle */}
        <p className="contact-subtitle">
          Feel free to reach out for collaborations, feedback, or just a chat! I'd love to connect.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          {/* Message Input */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="textarea-field"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
