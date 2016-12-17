var express = require('express');
var app = express();
var root = require('path').resolve('build');

var morgan = require('morgan');

app.use(morgan('common'));
app.use(express.static('build'));
app.use(express.static('./'));


app.get('/', function(req, res) {
	res.sendFile(root + '/index.html');
})



app.listen(8080, function() {
	console.log('App running at 8080');
})