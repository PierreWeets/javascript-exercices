// 06-objects/04-from-entries/script.js - 6.4: fromEntries
document.getElementById("run").addEventListener("click", () => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
    // create a Map object
    let dataMap = new Map();
    for (let i = 0; i < keys.length; i++){
        //set the keys & values of the Map object 'dataMap'
        dataMap.set(keys[i], values[i]);
    };

    const dataObject = Object.fromEntries(dataMap);
    // log the list of property under Object format
    console.log("properties of the created object :" + Object.getOwnPropertyNames(dataObject));
    
    //for each property in an object, displays its name & value.
    for( let property in dataObject){
        console.log(`${property}: ${dataObject[property]}`);
    };

    //log the object
    console.log("data object content :");
    console.log(dataObject);
});
