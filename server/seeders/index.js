// Seed the data
const sequelize_fixtures = require('sequelize-fixtures');

var path = require('path');
var models = require('../models/');

sequelize_fixtures.loadFiles([
	'/home/pi/foo/server/seeders/admins.js',
	'/home/pi/foo/server/seeders/users.js',
	'/home/pi/foo/server/seeders/games.js'
], models).then(function(){
	console.log('Seed data loaded!');
});
