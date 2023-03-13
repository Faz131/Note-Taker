
const express = require('express');
const router = express.Router();

const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
router.get('/db', (req, res) => {
    const noteText = req.params.text;
    readFromFile('./db/db.json')
        .then((data) => res.json(JSON.parse(data)));
});

const data = json.filter((db) => db.text === text);

// Save that array to the filesystem
writeToFile('/db/db.json', data);

// POST Route for a new Note
router.post('/db/db.json', (req, res) => {
    console.log(req.body);

    readAndAppend(newTip, './db/db.json');
    res.json(`Note added successfully 🚀`)
});

// router.get('/notes', (req, res) =>
//     res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

// router.get('/notes', (req, res) => {
//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });


// router.post('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/notes.html'))
// });


module.exports = router;