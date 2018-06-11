const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	router = express.Router(),
	path = require('path'),
	admins = require('./server/controllers/admins'),
	users = require('./server/controllers/users');
	games = require('./server/controllers/games');

// express config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser());
app.set('port', process.env.PORT || 8000);

app.use(express.static(__dirname + '/public'));

// define authors routes
router.get('/admins', admins.index);
router.get('/admins/:id', admins.show);
router.post('/admins', admins.create);
router.put('/admins', admins.update);
router.delete('/admins', admins.delete);

// define books routes
router.get('/users', users.index);
router.get('/users/:id', users.show);
router.post('/users', users.create);
router.delete('/users', users.delete);

// define books routes
router.get('/games', games.index);
router.get('/games/:id', games.show);
router.post('/games', games.create);
router.delete('/games', games.delete);

// register api routes
app.use('/api', router);

// seed the database
require('./server/seeders');

// start server
app.listen(app.get('port'), function () {
  console.log("Server started on port", app.get('port'));
});
