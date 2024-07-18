import React, { useState } from 'react';
import Navbar from './Navbar';
import './CheckOutPage.css';

function CheckoutPage() {
  const [formData, setFormData] = useState({
    serialNumber: '',
    name: '',
    date: '',
    phone: '',
    books: [{ bookNo: '', bookName: '', edition: '' }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBookChange = (index, e) => {
    const { name, value } = e.target;
    const books = [...formData.books];
    books[index][name] = value;
    setFormData({ ...formData, books });
  };

  const addBook = () => {
    setFormData({ ...formData, books: [...formData.books, { bookNo: '', bookName: '', edition: '' }] });
  };

  const removeBook = (index) => {
    const books = [...formData.books];
    books.splice(index, 1);
    setFormData({ ...formData, books });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className='COP'>
      <Navbar />
      <div className='Heading'>
        <h1>Library Check-Out</h1>
      </div>
      <div className='CIP-Form'>
        <h2>Check-Out Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="serialNumber">S-no:</label>
            <input type="text" id="serialNumber" name="serialNumber" value={formData.serialNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="books-section">
            <h3>Books</h3>
            {formData.books.map((book, index) => (
              <div key={index} className="book-inputs">
                <div className="form-group">
                  <label htmlFor={`bookNo-${index}`}>Book No:</label>
                  <input type="text" id={`bookNo-${index}`} name="bookNo" value={book.bookNo} onChange={(e) => handleBookChange(index, e)} required />
                </div>
                <div className="form-group">
                  <label htmlFor={`bookName-${index}`}>Book Name:</label>
                  <input type="text" id={`bookName-${index}`} name="bookName" value={book.bookName} onChange={(e) => handleBookChange(index, e)} />
                </div>
                <div className="form-group">
                  <label htmlFor={`edition-${index}`}>Edition:</label>
                  <input type="text" id={`edition-${index}`} name="edition" value={book.edition} onChange={(e) => handleBookChange(index, e)} />
                </div>
                {index > 0 && (
                  <button type="button" className="remove-book-button" onClick={() => removeBook(index)}>Remove Book</button>
                )}
              </div>
            ))}
            <button type="button" className="add-book-button" onClick={addBook}>Add More Books</button>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;
