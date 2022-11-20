const path = require('path')
const express = require('express');

const app = express();

app.use(express.static(__dirname+"dist/test-heroku"));

app.get('/*', (req, res) => {
    response.sendFile(path.join(__dirname, "dist/test-heroku", "index.html"))
});

app.listen(process.env.PORT || 5000);