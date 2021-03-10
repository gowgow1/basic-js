const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(bool){
    this.bool=bool;
    
  }

  encrypt(text,key) {
    if(text && key){
      let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
      key = key.repeat(Math.ceil(text.length/key.length)).toUpperCase()
      text = text.toUpperCase().split("")
      let count = 0
      let str = ""
      let vig = 0

      for (let i of text){
        if (alphabet.includes(i)){
          vig = alphabet.indexOf(i) + alphabet.indexOf(key[count])
          str += (vig > 25)? alphabet[vig-26]: alphabet[vig];
          count +=1

        }else{str+=i}}
      return (this.bool===false)? str.split("").reverse().join("") : str;
    }throw new Error();
  } 
  
  decrypt(text,key) {
    if (text && key){
      let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
      key = key.repeat(Math.ceil(text.length/key.length)).toUpperCase()
      text = text.toUpperCase().split("")
      let count = 0
      let str = ""
      
      for (let i of text){
        if (alphabet.includes(i)){
          let ind = alphabet.indexOf(i)
          let indk = alphabet.indexOf(key[count])
          str += (ind >= indk)? alphabet[ind-indk] : alphabet[ind + 26 - indk];
          count++
        }else{str+=i}}
      return (this.bool===false)? str.split("").reverse().join("") : str;
    }throw new Error();
  }
}

module.exports = VigenereCipheringMachine;
