const express = require('express');
const app = express();
const PORT = 3000;

// Sample student data
const students = {
    1: { FirstName: 'Jeff', LastName: 'Jeffington', IsEnrolled: true },
    2: { FirstName: 'Lauren', LastName: 'Lava', IsEnrolled: true },
    3: { FirstName: 'Kelly', LastName: 'Mason', IsEnrolled: false }
};

// GET endpoint to retrieve student information by ID
app.get('/getinfo/:id', (req, res) => {
    const id = req.params.id;

    // Check if the ID exists in the students data
    if (students[id]) {
        res.json({
            id: id,
            FirstName: students[id].FirstName,
            LastName: students[id].LastName,
            IsEnrolled: students[id].IsEnrolled
        });
    } else {
        res.status(404).json({ error: 'Student not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
