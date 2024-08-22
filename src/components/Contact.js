// // components/Contact.js
// import React, { useState } from 'react';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   return (
//     <section id="contact" className="section">
//       <div className="top-header">
//         <h1>Get in touch</h1>
//       </div>
//       <div className="row">
//         <div className="col">
//           <div className="contact-info">
//             <h2>Find Me</h2>
//             <p><i className="bx bx-envelope"></i> Email: ragav7332@gmail.com</p>
//             <p><i className="bx bx-phone"></i> Call: +91 9626036675</p>
//           </div>
//         </div>
//         <div className="col">
//           <div className="form-control">
//             <form onSubmit={handleSubmit}>
//               <div className="form-inputs">
//                 <input 
//                   type="text" 
//                   name="name" 
//                   placeholder="Name" 
//                   value={formData.name} 
//                   onChange={handleChange} 
//                   className="input-field" 
//                   required 
//                 />
//                 <input 
//                   type="email" 
//                   name="email" 
//                   placeholder="Email" 
//                   value={formData.email} 
//                   onChange={handleChange} 
//                   className="input-field" 
//                   required 
//                 />
//               </div>
//               <textarea 
//                 name="message" 
//                 placeholder="Message" 
//                 value={formData.message} 
//                 onChange={handleChange} 
//                 required
//               ></textarea>
//               <div className="form-button">
//                 <button type="submit" className="btn">Send <i className="bx bx-send"></i></button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

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
    <section id="contact" className="section">
      <div className="top-header">
        <h1>Get in touch</h1>
      </div>
      <div className="row">
        <div className="col contact-info">
          <h2>Find Me</h2>
          <p><i className="bx bx-envelope"></i> Email: ragav7332@gmail.com</p>
          <p><i className="bx bx-phone"></i> Call: +91 9626036675</p>
        </div>
        <div className="col form-control">
          <form onSubmit={handleSubmit}>
            <div className="form-inputs">
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={formData.name} 
                onChange={handleChange} 
                className="input-field" 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
                className="input-field" 
                required 
              />
            </div>
            <textarea 
              name="message" 
              placeholder="Message" 
              value={formData.message} 
              onChange={handleChange} 
              required
            ></textarea>
            <div className="form-button">
              <button type="submit" className="btn">
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
