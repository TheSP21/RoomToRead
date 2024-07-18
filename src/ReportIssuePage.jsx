import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReportIssuePage.css';

const ComplaintPage = () => {
  const [complaint, setComplaint] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Complaint:', complaint);
    console.log('File:', file);
    // Handle form submission logic here
    
    // Redirect to home page after submission
    navigate('/home');
  };

  return (
    <div className="complaint-container">
      <h1>Submit Your Complaint</h1>
      <form onSubmit={handleSubmit} className="complaint-form">
        <label htmlFor="complaint">Complaint:</label>
        <textarea
          id="complaint"
          value={complaint}
          onChange={handleComplaintChange}
          placeholder="Describe your complaint here..."
          required
        ></textarea>

        <label htmlFor="file">Upload File:</label>
        <input type="file" id="file" onChange={handleFileChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComplaintPage;
