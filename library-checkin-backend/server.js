const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/library');

const studentSchema = new mongoose.Schema({
  serialNumber: String,
  name: String,
  date: String,
  phone: String,
  books: [
    {
      bookNo: String,
      bookName: String,
      edition: String,
    }
  ]
});

const Student = mongoose.model('Student', studentSchema);

app.post('/api/students', async (req, res) => {
  const student = new Student(req.body);
  try {
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
