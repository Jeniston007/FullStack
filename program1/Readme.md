EX.NO: 01
DATE: 
STATIC WEBSITE HOSTING USING NODE.JS WITHOUT EXPRESS
AIM:
To design and develop a modern personal portfolio website with professional content, styled layout, and smooth interaction using HTML, CSS, and JavaScript. The site is hosted using a basic NodeJS static server (without using Express).
ALGORITHM:
STEP 1: Start the Process.
STEP 2: Create a folder “pro1”  with the following files: index.html, style.css, script.js, server.js.
STEP 3: Design a modern layout using HTML for structure and CSS for styling.
STEP 4: Add interactive elements with JavaScript such as modals for project descriptions.
STEP 5: In `server.js`, use Node's core modules (http, fs, path) to create a server that serves static files.
STEP 6: Define MIME types and use fs.readFile() to serve content.
STEP 7: Run the server using node server.js and open http://localhost:3000.
STEP 8: Test all sections like About, Skills, Projects, Contact, etc.
STEP 9: Stop the server with Ctrl+C after testing.
DESIGN:
![image](https://github.com/user-attachments/assets/09f6c361-6dc3-41d5-acf2-33f50b8c5848)



PRO1
Root directory of the project.
index.html
Main HTML file (homepage).
Loaded by default when the user accesses the website.
style.css
CSS file used to style the index.html page.
Controls layout, colors, fonts, etc.
server.js
Main Node.js server script.
Responsible for creating the server and serving static files from the public/ folder.
Typically uses http module or express for easier handling.

CODING:
index.html:
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Jeniston</title>
<link rel="stylesheet" href="style.css" />
</head>
<body>
<header>
<h1>Selva Sahayam Jeniston</h1>
<p>MCA Student | MERN & Flutter Developer | Full Stack Enthusiast</p>
<nav>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#education">Education</a>
<!-- <a href="#certs">Certificates</a> -->
<a href="#contact">Contact</a>
</nav>
</header>

<section id="about">
<h2>About Me</h2>
<p>I am currently pursuing MCA at Kongu Engineering College. I specialize in Web and Mobile Application Development using MERN Stack and Flutter. I'm passionate about building modern, responsive UIs and scalable backend systems.</p>
</section>

<section id="skills">
<h2>Technical Skills</h2>
<ul>
<li>Languages: JavaScript, Dart, Java, Python</li>
<li>Frontend: HTML, CSS, JavaScript, React, Flutter</li>
<li>Backend: Node.js, Firebase, Express.js</li>
<li>Tools: GitHub, VS Code, Android Studio, Figma</li>
</ul>
</section>

<section id="projects">
<h2>Projects</h2>
<div class="project" onclick="showProject('Attendance Tracker', 'Mobile app using Flutter + Firebase to track and manage attendance.')">Attendance Tracker (Flutter)</div>
</section>

<section id="education">
<h2>Education</h2>
<p><strong>MCA – Master of Computer Applications</strong><br>Kongu Engineering College (2024–2026)</p>
</section>

<!-- <section id="certs">
<h2>Certifications</h2>
<ul>
<li>React Frontend Development – Udemy</li>
<li>Flutter Development – Brainery Spot</li>
<li>Employability Skills Training – RND Softech</li>
</ul>
</section> -->

<section id="contact">
<h2>Contact</h2>
<p>Email: <a href="mailto:selvasahayamjeniston@gmail.com">selvasahayamjeniston@gmail.com</a></p>
<p>GitHub: <a href="https://github.com/jeniston007">github.com/jeniston007</a></p>
<p>LinkedIn: <a href="https://www.linkedin.com/in/selva-sahayam-jeniston-45850128a/">linkedin.com/in/jeniston</a></p>
</section>

<!-- Modal -->
<div id="modal" class="modal">
<div class="modal-content">
<span class="close">&times;</span>
<h3 id="modal-title"></h3>
<p id="modal-description"></p>
</div>
</div>

<script src="script.js"></script>
</body>
</html>

style.css:
body {
font-family: 'Segoe UI', sans-serif;
margin: 0;
padding: 0;
background: #f9f9f9;
color: #333;
}
header {
background: #2c3e50;
color: #fff;
text-align: center;
padding: 30px 0;
}/* === Global Reset & Body === */
body {
font-family: 'Segoe UI', sans-serif;
margin: 0;
padding: 0;
background: #f0f2f5;
color: #2d3436;
line-height: 1.6;
}

/* === Header Styling === */
header {
background: linear-gradient(135deg, #86c7ef, #d5f261);
color: #fff;
text-align: center;
padding: 40px 20px;
box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

header h1 {
font-size: 2.5rem;
margin-bottom: 10px;
}

header p {
font-size: 1.1rem;
font-weight: 400;
}

/* === Navigation === */
nav {
margin-top: 10px;
}

nav a {
margin: 0 14px;
color: #dfe6e9;
text-decoration: none;
font-weight: 500;
font-size: 1rem;
transition: color 0.3s ease;
}

nav a:hover {
color: #00cec9;
}

/* === Section Styling === */
section {
background: #ffffff;
margin: 25px auto;
padding: 30px 35px;
max-width: 900px;
border-radius: 12px;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

h2 {
color: #6c5ce7;
border-left: 5px solid #00cec9;
padding-left: 10px;
margin-bottom: 20px;
}

/* === Lists === */
ul {
padding-left: 20px;
}

li {
margin-bottom: 8px;
}

/* === Project Cards === */
.project {
background: #f1f2f6;
padding: 14px 20px;
margin: 12px 0;
border-radius: 8px;
cursor: pointer;
transition: all 0.3s ease;
font-weight: 500;
border: 1px solid #dcdde1;
}

.project:hover {
background: #dfe6e9;
transform: scale(1.02);
border-color: #a29bfe;
}

/* === Modal Styling === */
.modal {
display: none;
position: fixed;
top: 0; left: 0;
width: 100%; height: 100%;
background: rgba(0,0,0,0.4);
z-index: 1000;
}

.modal-content {
background: #fff;
padding: 25px;
margin: 100px auto;
width: 90%;
max-width: 500px;
position: relative;
border-radius: 10px;
box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.close {
position: absolute;
right: 15px;
top: 10px;
font-size: 24px;
color: #2d3436;
cursor: pointer;
}

/* === Links in Body === */
a {
color: #6c5ce7;
text-decoration: none;
}

a:hover {
text-decoration: underline;
color: #00cec9;
}

nav a {
margin: 0 15px;
color: #fff;
text-decoration: none;
}
section {
padding: 30px 20px;
margin: 10px auto;
max-width: 900px;
background: #fff;
border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
h2 {
color: #2980b9;
}
ul {
padding-left: 20px;
}
.project {
background: #ecf0f1;
padding: 10px;
margin: 10px 0;
border-radius: 6px;
cursor: pointer;
transition: background 0.3s;
}
.project:hover {
background: #d0d0d0;
}
/* Modal Styling */
.modal {
display: none;
position: fixed;
top: 0; left: 0;
width: 100%; height: 100%;
background: rgba(0,0,0,0.5);
}
.modal-content {
background: #fff;
padding: 20px;
margin: 100px auto;
width: 90%;
max-width: 500px;
position: relative;
border-radius: 8px;
}
.close {
position: absolute;
right: 15px;
top: 10px;
font-size: 22px;
cursor: pointer;
}

script.js:
function showProject(title, description) {
document.getElementById("modal-title").innerText = title;
document.getElementById("modal-description").innerText = description;
document.getElementById("modal").style.display = "block";
}

document.querySelector(".close").onclick = function () {
document.getElementById("modal").style.display = "none";
};

server.js:
const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
'.html': 'text/html',
'.css': 'text/css',
'.js': 'application/javascript',
'.png': 'image/png',
'.jpg': 'image/jpeg',
'.jpeg': 'image/jpeg',
'.svg': 'image/svg+xml',
'.ico': 'image/x-icon',
};

http.createServer((req, res) => {
let filePath = '.' + (req.url === '/' ? '/index.html' : req.url);
const ext = path.extname(filePath).toLowerCase();
const contentType = mimeTypes[ext] || 'application/octet-stream';

fs.readFile(filePath, (err, content) => {
if (err) {
if (err.code === 'ENOENT') {
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('404 - Not Found');
} else {
res.writeHead(500);
res.end('Server Error: ' + err.code);
}
} else {
res.writeHead(200, { 'Content-Type': contentType });
res.end(content, 'utf-8');
}
});
}).listen(3000, () => {
console.log('Server running at http://localhost:3000');
});


OUTPUT:
![image](https://github.com/user-attachments/assets/497a656d-aa4f-42b2-93f8-557700114390)
![image](https://github.com/user-attachments/assets/446319f7-38eb-4e77-9b40-fbc9f9a51d55)










RESULT:
Thus, the modern portfolio website was successfully created using HTML, CSS, and JavaScript, and hosted using a basic Node.js server without Express.
