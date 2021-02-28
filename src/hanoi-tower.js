const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let a = {turns:"", seconds:""};
  a.turns = 2**disksNumber-1
  a.seconds = Math.floor((2**disksNumber-1)/(turnsSpeed/3600))
  return a; 
};
