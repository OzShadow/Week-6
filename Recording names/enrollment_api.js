const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample data to simulate enrolled students
let enrolledStudents = [];

// GET endpoint to retrieve enrolled students' information
app.get('/api/enrol/getinfo', (req, res) => {
    res.json(enrolledStudents);
});

// POST endpoint to submit enrollment
app.post('/api/enrol/submit', (req, res) => {
    const student = req.body;
    enrolledStudents.push(student);
    res.json({ message: 'Enrollment submitted successfully', student: student });
});

// DELETE endpoint to unenroll a student
app.delete('/api/enrol/unenrol', (req, res) => {
    const studentId = req.query.id;
    enrolledStudents = enrolledStudents.filter(student => student.id !== studentId);
    res.json({ message: 'Student unenrolled successfully', studentId: studentId });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Define the port to listen on
const PORT = 2000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

