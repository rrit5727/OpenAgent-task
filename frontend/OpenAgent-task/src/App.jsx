import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './ContactForm';
import ThankYouPage from './ThankYouPage';

function App() {
  const [pageContent, setPageContent] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/api/contact-content')
      .then(response => response.json())
      .then(data => setPageContent(data));
  }, []); 

  if (!pageContent) return <div>Loading...</div>;
  if (isSubmitted) return <ThankYouPage />;

  return (
    <div className='app'>
      <div className='contact-info'>
        <h1>{pageContent.header}</h1>
        <p>{pageContent.body}</p>
        <p>Phone: {pageContent.phone}</p>
        <p>Email: {pageContent.email} </p>
        <p>Address: {pageContent.address}</p>
        <p>Business Hours: {pageContent.businessHours}</p>
      </div>
      <ContactForm onSubmit={() => setIsSubmitted(true) } />
    </div>
  )
}

export default App
