import React, {useState} from "react";

function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/api/submit-form', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        onSubmit();
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="contact-form-container">
      <p>Fill in your details and we'll be in touch right away. Or if you prefer call us on 13 24 34</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          required 
        />
        <input 
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input 
          type="text" 
          name="phoneNumber"
          placeholder="Phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          pattern="[0-9]*"
          inputMode="numeric"
          required
        />
        <textarea 
          name="message" 
          placeholder="What do you want to speak to us about"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="send-message-btn">SEND MESSAGE</button>
        <p className="terms-text">
          By sending a message you agree to the Terms and Condition and Privacy Policy
        </p>
      </form>
    </div>
  );
}

export default ContactForm;