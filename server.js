const exp = require('constants');
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index');

const PORT = process.env.port || 3001;


const app = express();

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/index.html'))
// );

const notesRouter = require('./routes/noteroute')

app.use('/notes', notesRouter)

app.post('/notes', (req, res) => res.sendFile(path.join(__dirname, '/db/notes.json'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);





