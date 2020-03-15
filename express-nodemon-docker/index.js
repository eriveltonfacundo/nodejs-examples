const express = require('express');

const PORT = process.env.HTTP_PORT || 3000;
const HOST = process.env.HTTP_HOST || '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(PORT, HOST);