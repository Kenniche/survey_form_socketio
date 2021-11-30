// require express
const express = require( 'express' );

// create the express app
const app = express();
// path module -- try to figure out where and why we use this
const path = require('path');
// require session:
const session = require('express-session');

const server = app.listen(9090);
const io = require('socket.io')(server);

// static content
app.use(express.static(path.join(__dirname, "/static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

io.on('connection', function (socket) {
    console.log("Connected!");
});
//get all the routes
const routes = require('./routes/index')(app,server);

//app.get('/', function(req, res) {
//   res.render("index");
//});

// app.post("/results", function(req, res){
// 	console.log(req.body);
// 	res.render('results', req.body);
// });