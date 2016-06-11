var express = require ("express");
var app = express();
var add = require("../modules/add.js");
var subtract = require("../modules/subtract.js");
var multiply = require("../modules/multiply.js");
var divide = require("../modules/divide.js");
var path = require("path");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended:false } );

app.use(express.static('public')); // allow use of public files

var server = app.listen(process.env.PORT || 8080, function () {
  console.log("listening on port 8080");
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

// urlencodedParser "dependency injection" is needed for POST
app.post( '/processPost', urlencodedParser, function( req, res){
  var equasionObject = {valueX : req.body.valueXIn,
                        valueY : req.body.valueYIn,
                        type : req.body.method };
  // // receives a POST request from the form on getTest.html (route: gettinTestyWithIt)
  // res.write( 'post request received: ' + equasionObject.valueX + equasionObject.valueY + equasionObject.type);

  if( equasionObject.type == 'addition'){
          res.write( add(equasionObject.valueX, equasionObject.valueY ) );
  }
  else if(equasionObject.type == 'subtraction'){
          res.write( subtract(equasionObject.valueX, equasionObject.valueY ) );
    }
  else if(equasionObject.type == 'multiplication'){
          res.write( multiply(equasionObject.valueX, equasionObject.valueY ) );
      }
  else{
          res.write( divide(equasionObject.valueX,equasionObject.valueY ) );

  }
  res.end();
});
// app.get('/pathGet', function (req, res) {
//
//   res.write( add() );
//   res.write( subtract() );
//   res.write( multiply() );
//   res.write( divide() );
//   res.end();
//   });//end of app.get / pathGet

// app.get('/pathName', function (req, res) {
