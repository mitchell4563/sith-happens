// import Express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Sends 'Hello' World to index.html
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Server is listening
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT} 🚀 ...`);
})