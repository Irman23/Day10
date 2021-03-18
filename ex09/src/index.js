
  

function myFunction(myObj, checkProp) {
   
    var checkProp = {
        "tittle": "Titanic",
        "song" : "My Heart Will Go On",
        "genre" : "drama"
    };
    checkProp.hasOwnProperty("tittle");
    checkProp.hasOwnProperty("song");
    
    
    

    if(myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }else {
        return "Not Found";
    }
    

    
   
  
}
console.log(myFunction("tittle"));
console.log(myFunction("song"));
console.log(myFunction("drama"));
console.log(myFunction("actor"));
module.exports = myFunction;