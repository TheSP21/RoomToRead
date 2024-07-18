import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './StudentPage.css';

function StudentPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('There was an error fetching the students!', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className='SP'>
      <Navbar />
      <div className='Heading'>
        <h1>Students Data</h1>
      </div>
      <div className='Student-List'>
        {students.map((student, index) => (
          <div key={index} className='Student-Item'>
            <p>S-no: {student.serialNumber}</p>
            <p>Name: {student.name}</p>
            <p>Date: {student.date}</p>
            <p>Phone: {student.phone}</p>
            <div className='Books-List'>
              <h3>Books</h3>
              {student.books.map((book, bookIndex) => (
                <div key={bookIndex} className='Book-Item'>
                  <p>Book No: {book.bookNo}</p>
                  <p>Book Name: {book.bookName}</p>
                  <p>Edition: {book.edition}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentPage;
