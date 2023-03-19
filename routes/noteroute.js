

const notes = require('express').Router();



const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
notes.get('/api/notes', (req, res) => {
    readFromFile('./db/notes.json')
        .then((data) => res.json(JSON.parse(data)));
});




module.exports = notes;
