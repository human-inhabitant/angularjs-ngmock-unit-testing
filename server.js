const express = require('express');
const path = require('path');
const debug = require('debug')('server');

const app = express();
const port = process.env.PORT || 3e3;

app.use(express.static(path.join(__dirname, '/public')));
app.use('/lib', express.static(path.join(__dirname, '/lib')));
app.use('/spec', express.static(path.join(__dirname, '/spec')));
app.use('/src', express.static(path.join(__dirname, '/src')));

app.server = app.listen(port, () => {
  debug(`Start: ${new Date()}`);
  debug(`Listening on port: ${port}`);
});
