const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./models/student');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ Connected to MongoDB");
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});


// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

app.post('/add', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.redirect('/students');
});

app.get('/students', async (req, res) => {
  const students = await Student.find();
  let list = students.map(s => `
    <li>
      ${s.name} (${s.email}, ${s.age} years)
      <a href="/edit/${s._id}">Edit</a>
      <a href="/delete/${s._id}">Delete</a>
    </li>
  `).join('');
  res.send(`<h1>Student List</h1><ul>${list}</ul><a href="/">Add New</a>`);
});

app.get('/edit/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.send(`
    <form action="/update/${student._id}" method="POST">
      <input name="name" value="${student.name}" />
      <input name="email" value="${student.email}" />
      <input name="age" value="${student.age}" />
      <button type="submit">Update</button>
    </form>
  `);
});

app.post('/update/:id', async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/students');
});

app.get('/delete/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect('/students');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
