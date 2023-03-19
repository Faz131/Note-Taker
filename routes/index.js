
const express = require('express');

const api = require('./api');

const notesRouter = require('./noteroute');


const app = express();

app.use('/', notesRouter);

app.use('/api', api);

module.exports = app;
