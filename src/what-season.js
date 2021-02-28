const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date instanceof Date){
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      throw new Error('THROWN');}
    let seazon = ["winter","spring","summer","autumn"]
    let month = date.getMonth();
    if( month == 11 || month <= 1 ){seaz=0}
    else if ( month < 5){seaz=1}
    else if (month < 8){seaz=2}
    else{seaz=3} 
    return seazon[seaz] 
  }else if (date==null){
    return "Unable to determine the time of year!"
  }throw new Error("THROWN");
}
