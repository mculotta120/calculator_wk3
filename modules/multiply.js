var multiply = function(numberX, numberY){
  var product = numberX + " × " + numberY + " is: " + ( parseInt(numberX) * parseInt(numberY));
  return product;
};
// var multiply = function(){
//   return "testing multiply";
// };
multiply();

module.exports = multiply;
