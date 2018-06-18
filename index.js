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
	arduino = require('./server/controllers/arduino');





//=============================
//Arduino communication
//=============================

const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline;
const mySerial = new SerialPort('/dev/cu.usbmodemFD121')
const parser = mySerial.pipe(new Readline({ delimiter: '\r\n' }))
//parser.on('data', console.log)
parser.on('data', function(data){
	console.log(data.split(";"))
	fdata = data.split(";")
	//Per tal de afegir un joc a la db
	Game = require('./server/models/').Game;
	//console.log(parseInt(fdata[3]);
	Game.create({ game: fdata[0], difficulty: fdata[1], result: fdata[2], user_id: parseInt(fdata[3]) }).then(task => {
  // you can now access the newly created task via the variable task
})

})

mySerial.on('open', function () {
  console.log('Opened Port.');

});

mySerial.on('err', function (data) {
  console.log(err.message);
});

//=============================

// express config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

//define serialport comunicatio
//router.get('/arduino' arduino.send);
router.get('/arduino', arduino.wea);
router.post('/arduino', function(req, res){
  // mySerial.on('open', function () {
	   mySerial.write(req.body.game+';'+req.body.diff+';'+req.body.result+';'+req.body.user_id)
  console.log('Opened Port.');

//})
});

// register api routes
app.use('/api', router);

// seed the database
require('./server/seeders');

// start server
app.listen(app.get('port'), function () {
  console.log("Server started on port", app.get('port'));
});
