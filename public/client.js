 // var valueX= document.getElementById('valueXIn').value;
 // var valueY= document.getElementById('valueYIn').value;

$(document).ready(function(){
  console.log("on load");
  $.ajax({
         url: 'http://localhost:3000/pathGet',
         type: "GET",
         dataType: 'text',
         success: function( response ){
         }, // end success function
         statusCode: {
            404: function(){
               alert( 'error connecting to server' );
            } // end 404
           } // end statusCode
         }); // end ajax request

});// end on load
