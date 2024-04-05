const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Array to store enrolled students
let enrolledStudents = [];

// POST endpoint to submit enrollment
app.post('/submit', (req, res) => {
    // Extract student object from request body
    const { firstname, lastname } = req.body;

    // Check if both firstname and lastname are provided
    if (!firstname || !lastname) {
        return res.status(400).json({ error: 'Both firstname and lastname are required' });
    }

    // Create a new enrolled student object
    const newStudent = {
        FirstName: firstname,
        LastName: lastname,
        IsEnrolled: true
    };

    // Add the new student to the enrolledStudents array
    enrolledStudents.push(newStudent);

    // Send back the enrolled student object with confirmation
    return res.json({ message: 'Enrollment successful', student: newStudent });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
