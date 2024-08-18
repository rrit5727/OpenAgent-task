import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
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
    <Router>
      <div className='app'>
        <nav>
          <ul>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/submitted-data">View Submitted Data</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ContactDetails content={pageContent} />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/submitted-data" element={<SubmittedData />} />
        </Routes>
      </div>
    </Router>
  );

  function ContactPage({ content }) {
    return (
      <div className='content-wrapper'>
        <ContactDetails content={content} />
      </div>
    );
  }

}


export default App
