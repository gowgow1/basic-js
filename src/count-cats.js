const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arrOfCats = [].concat(...matrix)
  return arrOfCats.filter(item => item=="^^").length
  
};
