var express = require ("express");
var app = express();
var add = require("../modules/add.js");
var subtract = require("../modules/subtract.js");
var multiply = require("../modules/multiply.js");
var divide = require("../modules/divide.js");
var path = require("path");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended:false } );

app.listen( process.env.PORT || 8080, 'localhost', function(){
  console.log( 'server up on 8080');
});

app.use(express.static('public')); // allow use of public files
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
  //console.log(path.resolve("view/index.html"));
  res.sendFile (path.resolve("public/index.html")); // added public/ in front of view - YAYYYYYYYY

});

// urlencodedParser "dependency injection" is needed for POST
app.post( '/serverSideRepresent', urlencodedParser, function( req, res){
  var equasionObject = {valueX : req.body.valueXIn,
                        valueY : req.body.valueYIn,
                        type : req.body.method };
  // // receives a POST request from the form on getTest.html (route: gettinTestyWithIt)
  // res.write( 'post request received: ' + equasionObject.valueX + equasionObject.valueY + equasionObject.type);

  if( equasionObject.type == 'addition'){
          res.send( add(equasionObject.valueX, equasionObject.valueY ) );
  }
  else if(equasionObject.type == 'subtraction'){
          res.send( subtract(equasionObject.valueX, equasionObject.valueY ) );
    }
  else if(equasionObject.type == 'multiplication'){
          res.send( multiply(equasionObject.valueX, equasionObject.valueY ) );
      }
  else{
          res.send( divide(equasionObject.valueX,equasionObject.valueY ) );

  }
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
