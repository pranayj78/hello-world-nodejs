'use strict';

const express = require('express');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/hello-world-nodejs', (req, res) => {
  res.send('Hello world from Nodejs\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

