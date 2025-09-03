import React, { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("access_key", "1e62428f-4d53-427d-bc75-3b9bc5bff378"); // Replace with your real key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          submitted: true,
          success: true,
          message: "✅ Your message has been sent!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(
          () => setStatus({ submitted: false, success: null, message: "" }),
          5000
        );
      } else {
        setStatus({
          submitted: true,
          success: false,
          message: "❌ Something went wrong. Try again.",
        });
      }
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: "⚠️ Network error. Try again.",
      });
    }
  };

  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <div className="contact-wrapper">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Let's Talk</h2>
          <p className="contact-text">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to collaborate. Whether it’s a small project, a
            startup idea, or just sharing knowledge, I love connecting with
            passionate people and exchanging innovative ideas. Let’s work
            together to create something amazing!
          </p>
          <h3>Connect with me:</h3>
          <div className="social-icons">
            <a href="mailto:arjunsharma132620@gmail.com">
              <FaEnvelope /> <span className="social-id">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-sharma-a5540a293"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> <span className="social-id">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/arjun_s020"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram /> <span className="social-id">Instagram</span>
            </a>
            <a
              href="https://wa.me/918950499446"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> <span className="social-id">WhatsApp</span>
            </a>
            <a
              href="https://github.com/Arjunsharma20/GitProfile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> <span className="social-id">GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form-wrapper">
          {status.submitted && (
            <p
              className={`contact-success ${
                status.success ? "success" : "error"
              }`}
            >
              {status.message}
            </p>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              required
            />
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
