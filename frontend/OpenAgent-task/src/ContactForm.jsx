import React, {useState} from "react";

function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required 
      />
      <input 
        type="email" 
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea 
        name="Message" 
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );

}

export default ContactForm;