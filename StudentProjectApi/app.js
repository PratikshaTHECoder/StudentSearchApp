const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const jsonData = require('./student_data.json');

app.use(cors());


// Endpoint to search students by name
app.get('/students', (req, res) => {

  try {
    const searchQuery = req.query.name?.toLowerCase() || '';

    const filteredStudents = jsonData.filter(student =>
      student.name.toLowerCase().includes(searchQuery)
    );

    res.json(filteredStudents);
  } catch (parseError) {
    res.status(500).json({ error: 'Error parsing student data' });
  }

});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

