import express from 'express';

const app = express();

app.get('/', function(req, res) {
    console.log('We got a request');
    res.send('Hello World!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});
