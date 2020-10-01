// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)

document.getElementById("run").addEventListener("click" , ()=>{
    let listOfPersonsString ="";
    let listOfPersonsStringToDisplay = "";
    //calls the function getPersons() that returns a Promise
    window.lib.getPersons() 
        //let callToGetPersons = new Promise( function (resolve, reject){
        .then((personArray) => { 
            personArray.forEach(element => {
                listOfPersonsString = listOfPersonsString + element.name + " , ";
                listOfPersonsStringToDisplay = listOfPersonsString.slice(0, listOfPersonsString.length - 3) // remove the last substring " , "
            });
            console.log("list of persons : " + listOfPersonsStringToDisplay);
        //in case of failure
        }).catch((err) => {
            console.log("Erreur :" + err);
        })
});
