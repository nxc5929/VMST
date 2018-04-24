const express = require('express');
const app = express();

app.use(express.static("" + __dirname + "/"));

app.get('/', function(req, res){
    res.sendFile("index.html", {root: '.'});
});

app.get('*', function(req, res){
    res.sendFile("index.html", {root: '.'});
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log('Running on port '+port);