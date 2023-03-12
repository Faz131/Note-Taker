const express = require('express');
const path = require('path');
const noteData = require('./db/db.json');
const { clog } = require('./middleware/clog');

const PORT = 3001;


const app = express();
app.use(clog);

app.use(express.static('public'));


app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// app.get('/api/notes', (req, res) =>
//     res.json(noteData)
// );





app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);





