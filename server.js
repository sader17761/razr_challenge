// requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//globals
var port = process.env.PORT || 3010;

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

// spin up server
app.listen(port, function(){
  console.log('The Server Is Up On Port: ', port);
}); // end of server spin up

// home base route
app.get('/', function (req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});
