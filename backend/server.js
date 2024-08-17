const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

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

// uncomment once form submission function added
// app.post('/api/submit-form', (req, res) => {
//   console.log('Form submitted:', req.body);
//   res.json({ message: 'Form submitted successfully' });
// });



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});