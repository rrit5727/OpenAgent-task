import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './ContactForm';
import ThankYouPage from './ThankYouPage';
import SubmittedData from './SubmittedData';

function App() {
  const [pageContent, setPageContent] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSubmittedData, setShowSubmittedData] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/api/contact-content')
      .then(response => response.json())
      .then(data => setPageContent(data));
  }, []); 

  if (!pageContent) return <div>Loading...</div>;
  if (isSubmitted) return <ThankYouPage />;
  if (showSubmittedData) return <SubmittedData />;

  return (
    <div className='app'>
      <h1>{pageContent.header}</h1>
      <div className='content-wrapper'>
        <div className='contact-info'>
          <p>{pageContent.body}</p>
          <h3>Here are the different ways you can contact us</h3>
          <h4>Contact details</h4>
          <p>Phone: {pageContent.phone}</p>
          <p>Email: {pageContent.email} </p>
          <h4>Postal address</h4>
          <p>Address: {pageContent.address}</p>
          <h4>Contact centre hours of operation</h4>
          <p>Business Hours: {pageContent.businessHours}</p>
        </div>
        <ContactForm onSubmit={() => setIsSubmitted(true) } />
      </div>
    </div>
  )
}

export default App
