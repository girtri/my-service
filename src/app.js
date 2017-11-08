var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('il servizio risponde!');
});

app.get('/about', function (req, res) {
	res.send('ciao da Gerry');
});

var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});
