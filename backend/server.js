const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const FormData = require('./models/formData');

require('dotenv').config();
require('./config/database');

app.use(cors());
app.use(express.json());



const pageContent = {
  header: "Contact Us",
  body: "We'd love to hear from you! Please fill out the form or use the contact information below.",
  phone: "(02) 1234-4567",
  email: "contact@example.com",
  address: "123 George St, Sydney, NSW, 2000",
  businessHours: "Monday - Friday: 9AM - 5PM"
};

app.get('/api/contact-content', (req, res) => {
  res.json(pageContent);
});


app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.json({ message: 'Form submitted successfully', id: formData._id });
    console.log('Form submitted:', req.body);
  } catch (error) {
    console.error('Error saving form data', error);
    res.status(500).json({ message: 'Error submitting form' }); 
  }
});

app.get('/api/submitted-forms', async (req, res) => {
  try {
    const forms = await FormData.find().sort({ submittedAt: -1 });
    res.json(forms);
  } catch (error) {
    console.error('Error fetching submitted forms', error);
    res.status(500).json({ message: 'Error fetching submitted forms' });
  }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});