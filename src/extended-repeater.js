const CustomError = require("../extensions/custom-error");
// NEVER SEE THIS TASK PLS, THIS IS CRUTHCH, i havent time now,but later,iam back this task and do
module.exports = function repeater(str, options) {
    
    let {repeatTimes=0,separator="+",addition="undefined addition",additionRepeatTimes=0,additionSeparator="|"} = options
  str = str+""
  console.log(addition)
  arrOfAddition=[]
  arrOfStr=[]
  arrOfStr.push(str)
  for (let i = 1; i < repeatTimes;i++){
    arrOfStr.push(str)
  }

  if (addition!="undefined addition"){
    addition = addition + ""
    arrOfAddition.push(addition)
      for (let i = 1; i < additionRepeatTimes;i++){
        arrOfAddition.push(addition)}
    addition = arrOfAddition.join(additionSeparator)
    return arrOfStr.map(i => i + addition).join(separator)
  }
  return arrOfStr.join(separator)
};


