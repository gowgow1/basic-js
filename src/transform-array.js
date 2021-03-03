const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)){ 
    let newA = arr.slice();

      for (let i=0;i < arr.length; i++){
        
        if (arr[i] == "--discard-next"){
            newA.splice(i,1,"fo")
            if (i < arr.length-1){
              newA.splice(i+1,1,"fo")
          }

        } else if (arr[i] == "--discard-prev"){
            
          newA.splice(i,1,"fo");
            if (i > 0){
              newA.splice(i-1,1,"fo")
            }

        } else if (arr[i] == "--double-next" ){
            
          newA.splice(i,1,"fo")
            if(i<arr.length-1){
              newA.splice(i,1,newA[i+1])
            }

        } else if (arr[i] == "--double-prev" ){
            newA.splice(i,1,"fo")
            if(i > 0){
              newA.splice(i,1,newA[i-1])
          }
        }
      } return newA.filter(a => (a!="fo")? true : false)

    }throw new Error();
};

