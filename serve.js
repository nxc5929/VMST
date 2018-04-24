const express = require('express');
const SocketServer = require('ws').Server;


app.get('/', function(req, res){
    res.sendFile("index.html", {root: '.'});
});

app.get('*', function(req, res){
    res.sendFile("index.html", {root: '.'});
});

const port = process.env.PORT || 5000;
const app = express()
    .use(express.static("" + __dirname + "/"))
    .listen(port, () => console.log(`Listening on ${ port }`));


const wss = new SocketServer({ "server": app });
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
    wss.clients.forEach((client) => {
        client.send(new Date().toTimeString());
    });
}, 1000);
