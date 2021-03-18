var myPet = {
    "species": "Labrador",
    "name": "Alehandro",
    "legs": 4,
    friends: ["Blue", "Albert"]
     
}


function myFunction (myObj){
    return myObj;
}

console.log(myFunction(myPet));
module.exports ={ myPet, myFunction };