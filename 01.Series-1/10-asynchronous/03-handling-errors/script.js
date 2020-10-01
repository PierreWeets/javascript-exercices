// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
document.getElementById("run").addEventListener("click" , ()=>{
    let listOfPersonsString ="";
    let listOfPersonsStringToDisplay = "";
    
    //affter its execution, the function getPersons() calls an anonymous function(err, personArray)
    window.lib.getPersons( (err, personArray) => {
        //let callToGetPersons = new Promise( function (resolve, reject){
            //console.log("err : " + err);   
            if(err !== null) {
                console.error(err);
                return err;
            } 
            //console.log("number of persons : " + personArray.length);   
            
            //for each element of the array personArray( = array of objects 'name')
            personArray.forEach(element => {
                    listOfPersonsString = listOfPersonsString + element.name + " , ";
                    listOfPersonsStringToDisplay = listOfPersonsString.slice(0, listOfPersonsString.length - 3) // remove the last substring " , "
            });
            console.log("list of persons : " + listOfPersonsStringToDisplay);
    });
});