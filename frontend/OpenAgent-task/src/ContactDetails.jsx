import ContactForm from './ContactForm';

function ContactDetails({ content, setIsSubmitted }) {
  return (
    <>
      <div className='content-wrapper'>
        <div className='contact-info'>
      <h1>{content.header}</h1>
          <p>{content.body}</p>
          <h3>Here are the different ways you can contact us</h3>
          <h4>Contact details</h4>
          <p>Phone: {content.phone}</p>
          <p>Email: {content.email} </p>
          <h4>Postal address</h4>
          <p>Address: {content.address}</p>
          <h4>Contact centre hours of operation</h4>
          <p>Business Hours: {content.businessHours}</p>
        </div>
        <ContactForm onSubmit={() => setIsSubmitted(true) } />
      </div>
    </>
  );
}

export default ContactDetails;