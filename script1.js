var express = require('express');

var app = express();
var request = require('request');

app.set('port', 3000);

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// Here gets parameters from end of URL to use in api address.  These parameters will come from submit buttons 
// on the respective sites
app.get('/getnews', function (req, res) {
	var qParams = [];
	for (var p in req.query) {
		qParams.push({ 'name': p, 'value': req.query[p] })
	}
	var url = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440' /*+ qParams[0].name */+ '&count=3&maxlength=300&format=json';
	request(url, function (err, response, body) {
		if (!err && response.statusCode < 400) {
			console.log(body);
			res.send(body);
		}
	});
});

app.use(function (req, res) {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function () {
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});