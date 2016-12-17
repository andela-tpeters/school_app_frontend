var express = require('express');
var app = express();
var root = require('path').resolve('build');
var port = process.env.PORT || 3000;

var morgan = require('morgan');

app.use(morgan('common'));
app.use(express.static('build'));
app.use(express.static('./'));


app.get('/', function(req, res) {
	res.sendFile(root + '/index.html');
})



app.listen(port, function() {
	console.log('App running at '+ port);
})