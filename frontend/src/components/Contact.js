import React, { useState } from "react";
import "./styles/About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
  
    try {
      await fetch("https://script.google.com/macros/s/AKfycbxv2MRvCTDKYKM7bH0ULkBD1nBJpgurXytz2u7oRM5xGIRGoNOjoZaoz43HgJX8FYTl3A/exec", {
        method: "POST",
        body: form,
      });
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an error. Try again later.");
    }
  };
  
  

  return (
    <section id="contact" className="section contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      <div className="links">
  <a href="https://www.linkedin.com/in/sudeep-ramasamy/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin /> LinkedIn
  </a>
  <a href="https://github.com/Sudeepramasamy" target="_blank" rel="noopener noreferrer">
    <FaGithub /> GitHub
  </a>
</div>

    </section>
  );
}

export default Contact;
