const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const pageContent = {
  header: "Contact Us",
  body: "We'd love to hear from you! Please fill out the form or use the contact information below.",
  phone: "+1 (123) 456-7890",
  email: "contact@example.com",
  address: "123 Main St, Anytown, USA 12345",
  businessHours: "Monday - Friday: 9AM - 5PM"
};
