const express = require('express');


const notesRouter = require('./noteroute');


const app = express();

app.use('/noteroute', notesRouter);


module.exports = app;
