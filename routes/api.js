const notes = require('express').Router();

const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');




notes.get('/', (req, res) => {

    readFromFile('./db/notes.json')
        .then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/notes', (req, res) => {
    console.log(req.body);

    const { title, text, } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
        };

        readAndAppend(newNote, './db/notes.json');
        const response = { status: 'success', body: newNote };
        console.info(response)
        res.json(response);
        console.info(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});


module.exports = notes;