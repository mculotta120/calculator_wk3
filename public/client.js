$(document).ready(function(){
  console.log("on load");
  $.ajax({
         url: "http://localhost:8080/serverSideRepresent",
         type: "POST",
         dataType: inputObject,
         success: function( data ){
           console.log("ajax in sucess");
         }, // end success function
         statusCode: {
            404: function(){
               alert( 'error connecting to server' );
            } // end 404
           } // end statusCode
         }); // end ajax request

});// end on load
