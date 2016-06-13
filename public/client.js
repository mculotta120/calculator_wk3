  $( document ).ready( function() {
    console.log("on load");
    $('#submit').on('click', function(event){
      event.preventDefault();
      console.log( 'calc clicked' );
      serverOperation();
});
});
var processResponse = function( response )
{
  // $('#answer').text(response);
  console.log("processResponse");
  var newParagraph = document.createElement('p');
  // with out output data
  newParagraph.textContent = response;
  document.getElementById('answer').innerHTML='';
  document.getElementById('answer').appendChild( newParagraph );
};

function serverOperation(){
  var x = $('#valueXIn').val();
  var y = $('#valueYIn').val();
  var type = $('#method').val();
  console.log( 'inputX: ' + x + type + " inputY: " + y  );

  var equasionObject ={
    "value x": x,
    "value y": y,
    "type": type
  };
  console.log( equasionObject );
  // post with ajax;

  $.ajax({
         url: "/serverSideRepresent",
         type: "POST",
         dataType: equasionObject,
         success: function( data ){
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
}
