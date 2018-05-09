var express = require('express');
var expressHandlebars = require('express-handlebars');
var http = require('http');

var port = 8000;

var LINES = [
    "This is Prince",
    "After started Debugging",
    "Make sure it works",
    "If, yes then go to the next work"
];

var app = express();
app.engine('html', expressHandlebars());
app.set('view engine', 'html');
app.set('views', __dirname);

let lineIndex = 0;

app.get('/', function(req,res) {
    let message = LINES[lineIndex++];

    res.render('index', {'index':lineIndex, 'message':message});
    if (lineIndex == LINES.length){
        lineIndex = 0;
    }
});

http.Server(app).listen(port, function(){
    console.log("Http server listening on port %s", port);
});