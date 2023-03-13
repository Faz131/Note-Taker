
const express = require('express');
const router = express.Router();


router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


router.post('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});


module.exports = router