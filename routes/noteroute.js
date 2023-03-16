
// const express = require('express');
const notes = require('express').Router();


const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    // const noteText = req.params.text;
    readFromFile('./db/notes.json')
        .then((data) => res.json(JSON.parse(data)));
});

notes.get('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/notes.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((notes) => notes.note_id === noteId);
            return result.length > 0
                ? res.json(result)
                : res.json('No tip with that ID');
        });
});



// Save that array to the filesystem
// const result = json.filter((notes) => notes);
notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});



// POST Route for a new UX/UI tip
notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text, note_id } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id
        };

        readAndAppend(newNote, './db/notes.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});




module.exports = notes;
