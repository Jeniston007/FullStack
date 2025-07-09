STORING FORM DATA IN JSON AND RENDERING WITH EXPRESS & HANDLEBARS
AIM:
To create a NodeJS server using Express that stores data from a form as a JSON file and displays it in another page. The redirect page should be prepared using Handlebars.
ALGORITHM:
STEP 1: Start the process.
STEP 2: Create a project folder and add views (for .hbs files) and public (optional for static files).
STEP 3: Inside views, create form.hbs for the input form and data.hbs to display submitted data.
STEP 4: In the root folder, create server.js with Express logic, routing, and view rendering.
STEP 5: Create an empty data.json file with {} to store submitted data.
STEP 6: Run npm init -y in the terminal to initialize the Node.js project.
STEP 7: Install dependencies using npm install express body-parser hbs.
STEP 8: Set up middleware, view engine, and routes for /, /submit, and /data in server.js.
STEP 9: Run the server using node app.js and open http://localhost:3000 in a browser.
STEP 10: Fill and submit the form, view saved data on /data, and stop the server when done.
DESIGN:
 FormDataProject/ ├── views/ │   ├── form.hbs │   └── data.hbs ├── data.json ├── app.js ├── package.json 

CODING:
form.hbs:
<!DOCTYPE html>
<html>
<head>
    <title>Form Submission</title>
</head>
<body>
    <h1>Submit Your Details</h1>
    <form action="/submit" method="POST">
        <label>Name: <input type="text" name="name" required></label><br><br>
        <label>Email: <input type="email" name="email" required></label><br><br>
        <label>Message: <textarea name="message" required></textarea></label><br><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>


Data.hsb:
<!DOCTYPE html>
<html>
<head>
    <title>Submitted Data</title>
</head>
<body>
    <h1>Stored User Data</h1>
    {{#if data.length}}
        <ul>
        {{#each data}}
            <li>
                <strong>Name:</strong> {{this.name}} <br>
                <strong>Email:</strong> {{this.email}} <br>
                <strong>Message:</strong> {{this.message}}
                <hr>
            </li>
        {{/each}}
        </ul>
    {{else}}
        <p>No data submitted yet.</p>
    {{/if}}
</body>
</html>

Server.js:
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


Data.json:
[]

OUTPUT:


![image](https://github.com/user-attachments/assets/529e8a06-3309-4d39-93e2-8c4973770bd6)

![image](https://github.com/user-attachments/assets/f11cdf96-77ba-4888-96cd-7b1a12d3ec2c)














RESULT:
Thus, the form data was successfully stored in a JSON file and displayed using Handlebars in another page using NodeJS and Express
