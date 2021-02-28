const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!isFinite(sampleActivity) || sampleActivity<=0 || (typeof sampleActivity) != "string") {
    return false
  } else { let rsult = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD))
           return rsult>0?rsult:false;
  }
};
