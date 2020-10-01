// 06-objects/03-keys-values/script.js - 6.3: keys & values
document.getElementById("run").addEventListener("click", () => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    
    // displays the list of property undr array format
    console.log("keys list in object person :" + Object.getOwnPropertyNames(person));
    
    //for each property in an object, displays its name & value.
    for( property in person){
        console.log(`${property}: ${person[property]}`);
    };
});