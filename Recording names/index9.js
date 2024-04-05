const express = require('express');
const app = express();
const PORT = 3000;

// Sample student data
const studentInfo = {
    FirstName: 'John',
    LastName: 'Smith',
    IsEnrolled: true
};

// GET endpoint to retrieve student information
app.get('/getinfo', (req, res) => {
    // Send the student information as JSON response
    res.json(studentInfo);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

