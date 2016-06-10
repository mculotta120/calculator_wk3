var express = require ("express");
var app = express();
var add = require("../modules/add.js");
var subtract = require("../modules/subtract.js");
var multiply = require("../modules/multiply.js");
var divide = require("../modules/divide.js");
var path = require("path");

app.use(express.static('public')); // allow use of public files

var server = app.listen(process.env.PORT || 3000, function () {
  console.log("listening on port 3000");
} );//end of app.listen

app.get('/', function (req, res) {
  console.log("hey...I'm workin here.");
  res.writeHead(200);
  res.write("here I am.");
  res.end();
});//end of base app.get

app.get('/index', function (req, res) {
  //console.log(path.resolve("view/index.html"));
  res.sendFile (path.resolve("public/view/index.html")); // added public/ in front of view - YAYYYYYYYY

});

app.get('/pathGet', function (req, res) {

  res.write( add() );
  res.write( subtract() );
  res.write( multiply() );
  res.write( divide() );
  res.end();
  });//end of app.get / pathGet

// app.get('/pathName', function (req, res) {
