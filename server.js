'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

console.log('hello!);

// App
const app = express();
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res
// })

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
