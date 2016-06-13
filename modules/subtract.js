var subtract = function(numberX, numberY){
  var difference = numberX + " - " + numberY + " is: "  + (parseInt(numberX) - parseInt(numberY));
  return difference;
};
// var subtract = function(){
//   return "testing subtract";
// };
subtract();

module.exports = subtract;
