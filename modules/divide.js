var divide = function(numberX, numberY){
  var quotient = numberX + " ÷ " + numberY + " is: " + (parseInt(numberX) / parseInt(numberY));
  return quotient;
};
// var divide = function(){
//   return "testing divide";
// };

divide();

module.exports = divide;
