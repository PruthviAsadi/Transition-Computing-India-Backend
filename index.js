const express = require('express');
const cors = require('cors');
const fetchData = require('./fetchData');
const rules = require('./rules');
const evaluateChecklist = require('./evaluate');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/checklist', async (req, res) => {
  try {
    const data = await fetchData();
    const results = evaluateChecklist(data, rules);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error processing checklist', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
