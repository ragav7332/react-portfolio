import React, { useState } from 'react';
import '../App.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const Back_url = `https://node-portfolio-ojwd.onrender.com`;
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${Back_url}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to send message.');
    });
  };

  return (
    <section id="contact" className="section" style={{ padding: "20px" }}>
  <div className="top-header" style={{ textAlign: "center" }}>
    <h1>Get in touch</h1>
  </div>
  <div
    className="row"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      className="col contact-info"
      style={{
        width: "100%",
        marginBottom: "20px",
        textAlign: "center",
      }}
    >
      <h2>Find Me</h2>
      <p><i className="bx bx-envelope"></i> Email: ragav7332@gmail.com</p>
      <p><i className="bx bx-phone"></i> Call: +91 9626036675</p>
    </div>
    <div
      className="col form-control"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor:"#f5f5f5"
       
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div className="form-inputs" style={{ marginBottom: "15px" }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        ></textarea>
        <div className="form-button" style={{ textAlign: "center" }}>
          <button type="submit" className="btn" style={{ padding: "10px 20px" }}>
            Send <i className="bx bx-send"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

  );
}

export default Contact;
