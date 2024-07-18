// Slip.js
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './slip.css';

function Slip({ formData }) {
  const slipRef = useRef();

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Check-In Slip', 20, 10);
    
    doc.autoTable({
      startY: 20,
      head: [['Field', 'Value']],
      body: [
        ['S-no', formData.serialNumber],
        ['Name', formData.name],
        ['Date', formData.date],
        ['Phone', formData.phone],
        ...formData.books.map((book, index) => [
          `Book ${index + 1} No`, book.bookNo,
          `Book ${index + 1} Name`, book.bookName,
          `Book ${index + 1} Edition`, book.edition
        ]).flat().map((item, index) => [index % 2 === 0 ? item : '', index % 2 !== 0 ? item : '']).filter(item => item[0] || item[1]),
      ],
    });

    doc.save('CheckInSlip.pdf');
  };

  return (
    <div className='slip' ref={slipRef}>
      <h2>Check-In Slip</h2>
      <p><strong>S-no:</strong> {formData.serialNumber}</p>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Date:</strong> {formData.date}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <h3>Books</h3>
      {formData.books.map((book, index) => (
        <div key={index} className="book-details">
          <p><strong>Book No:</strong> {book.bookNo}</p>
          <p><strong>Book Name:</strong> {book.bookName}</p>
          <p><strong>Edition:</strong> {book.edition}</p>
        </div>
      ))}
      <button onClick={generatePDF} className="download-button">Download as PDF</button>
    </div>
  );
}

export default Slip;
