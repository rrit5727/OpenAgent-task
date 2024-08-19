import React, { useState, useEffect } from 'react';

function SubmittedData() {
  const [submittedForms, setSubmittedForms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/submitted-forms')
    .then(response => response.json())
    .then(data => setSubmittedForms(data));
    
  }, []);

  return (
    <div className="submitted-data">
      <h2>Submitted Forms</h2>
      {submittedForms.map(form => (
        <div key={form._id} className="form-entry">
          
          <p>Name: {form.firstName} {form.lastName}</p>
          <p>Email: {form.email}</p>
          <p>Phone: {form.phoneNumber}</p>
          <p>Message: {form.message}</p>
          <p>Submitted: {new Date(form.submittedAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default SubmittedData;