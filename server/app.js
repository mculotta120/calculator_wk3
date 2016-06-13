var express = require ("express");
var app = express(); //enables use of express
var add = require("../modules/add.js");
var subtract = require("../modules/subtract.js");
var multiply = require("../modules/multiply.js");
var divide = require("../modules/divide.js");
var path = require("path");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: false } );

app.listen( process.env.PORT || 8080, 'localhost', function(){
  console.log( 'server up on 8080');
});

app.use(express.static('public')); // allow use of public files

//base url
app.get('/', function (req, res) {
  //console.log(path.resolve("view/index.html"));
  res.sendFile (path.resolve("views/index.html"));

});

// urlencodedParser "dependency injection" is needed for POST
app.post( '/serverSideRepresent', urlencodedParser, function( req, res){
  console.log("working");
  console.log(req.body.x + req.body.type + req.body.y) ;
  var equasionObject = {valueX : req.body.x,
                        valueY : req.body.y,
                        type : req.body.type };
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
