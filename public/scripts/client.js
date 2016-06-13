  $( document ).ready( function() {
    console.log("on load");
    $('#submit').on('click', function(event){
      serverOperation();
    });//end submit button

var processResponse = function( response ){
  var newParagraph = document.createElement('p');
  // with out output data
  newParagraph.textContent = response;
  $('#answer').empty();
  $('#answer').append( newParagraph );
  $('#valueXIn').val("");
  $('#valueYIn').val("");
};

function serverOperation(){ //object to send
  var x = $('#valueXIn').val();
  var y = $('#valueYIn').val();
  var type = $('#method').val();
  console.log( 'inputX: ' + x + " " + type + ' inputY:'  + y  );

  var equasionObject ={
    "x": x,
    "y": y,
    "type": type
  };
  console.log( equasionObject );

  $.ajax({
         type: "POST",
         url: "/serverSideRepresent",
         data: equasionObject, //data out
         success: function( data ){ // data in
           console.log("ajax in sucess");
           console.log( 'post successfull: ' + data );
          processResponse( data );
         }, // end success function
         statusCode: {
            404: function(){
               alert( 'error connecting to server' );
            } // end 404
           } // end statusCode
         }); // end ajax request
  }//end serverOperation
});// end document ready
