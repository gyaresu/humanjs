var Hapi = require('hapi');
var server = new Hapi.Server();
var MoonbootsHapi = require('moonboots_hapi');

server.connection({ port: process.argv[2] || 5000});

var config = {
	appPath: '/{p*}',
	moonboots: {
		main: __dirname + '/client/app.js',
		developmentMode: true
	}
};

server.register({
	register: MoonbootsHapi,
	options: config
}, function () {
	server.start();
	console.log("Server running at: ", server.info.uri);
});