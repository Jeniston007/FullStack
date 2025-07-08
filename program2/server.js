const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// View engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('form');
});

app.post('/submit', (req, res) => {
    const formData = req.body;

    // Read existing data
    let data = [];
    try {
        const rawData = fs.readFileSync('data.json');
        data = JSON.parse(rawData) || [];
    } catch (err) {
        console.log('No data.json file or empty, initializing new array.');
    }

    // Append new form data
    data.push(formData);

    // Save back to file
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

    // Redirect to data page
    res.redirect('/data');
});

app.get('/data', (req, res) => {
    let data = [];
    try {
        const rawData = fs.readFileSync('data.json');
        data = JSON.parse(rawData) || [];
    } catch (err) {
        console.error('Could not read data.json');
    }

    res.render('data', { data });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
