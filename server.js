
//Variables that will handle routes, middleware, filesystem
const exp = require('constants');
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index');
const fs = require('fs');

//checking for an open port connection
const PORT = process.env.PORT || 3001;


const app = express();

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', api);

app.use(express.static('public'));

//Get path for the main HTML page
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//Get path for the Notes HTML page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);



// GET request for Notes
app.get('/notes', (req, res) => {
    fs.readFile('./db/notes.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedNotes = JSON.parse(data);
            res.json(parsedNotes);
        }
    });
});

app.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a notes`);
    const { title, text } = req.body
})

fs.readFile('./db/notes.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        // Convert string into JSON object
        const parsedNotes = JSON.parse(data);
        parsedNotes.push();

        fs.writeFile(
            './db/notes.json',
            JSON.stringify(parsedNotes, null, 4),
            (writeErr) =>
                writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully updated notes!')
        );
    }
})



app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/404.html'))
);



const notesRouter = require('./routes/noteroute')

app.use('/notes', notesRouter)




app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);





