// 06-objects/01-generate-object/script.js - 6.1: genererate an object


document.getElementById("run").addEventListener("click", () => {
    // your code here
    let person = {
        fistname : "Pierre",
        lastname : "Weets",
        age : 49 ,
        city : "Nivelles",
        country : "Belgium",
    }
    console.log(`My name is ${person.fistname} ${person.lastname} , I am ${person.age} old and I live in ${person.city} , ${person.country}.`)
});
