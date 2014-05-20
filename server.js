var http = require('http');
var express = require('express'), app = express();
var server = http.createServer(app).listen(1200);
var io = require('socket.io').listen(server);

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.configure(function() {
	app.use(express.static(__dirname + '/static'));
});

app.get('/', function(request, response){
  response.render('index.html');
});

//connection is a built-in event fired when the client connects...
io.sockets.on('connection', function (socket) {

	//setName is a custom event fired by the client; the server listens to this event...
	socket.on('setName', function (data) {
		socket.set('name', data);
	});

	//message is a custom event fired by the client; the server listens to this event...
	socket.on('message', function (message) {
		socket.get('name', function (error, name) {
			var data = { 'message' : message, name : name };
			socket.broadcast.emit('message', data);
			console.log("user " + name + " send this : " + message);
		})
	});
});