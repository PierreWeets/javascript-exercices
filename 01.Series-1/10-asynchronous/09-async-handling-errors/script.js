// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
document.getElementById("run").addEventListener("click" , async ()=>{ //call anonymous asynchrone function
    console.log('calling showPersons');
    try{
        let listOfPersonsString ="";
        let listOfPersonsStringToDisplay = "";
        //calls the function getPersons() that returns a Promise
        let personArray = await window.lib.getPersons() ;
        personArray.forEach(element => {
            listOfPersonsString = listOfPersonsString + element.name + " , ";
            listOfPersonsStringToDisplay = listOfPersonsString.slice(0, listOfPersonsString.length - 3) // remove the last substring " , "
        });
        console.log("list of persons : " + listOfPersonsStringToDisplay);
    }catch(err){
        console.log("Erreur :" + err);
    }
});

//--- alternative code ---  use of function showPersons() 
// document.getElementById("run").addEventListener("click" , ()=>{

//     //calls the function getPersons() that returns a Promise
//     async function showPersons() {
//         console.log('calling showPersons');
//         try{
//             let listOfPersonsString ="";
//             let listOfPersonsStringToDisplay = "";
//             let personArray = await window.lib.getPersons() ;
//             personArray.forEach(element => {
//                 listOfPersonsString = listOfPersonsString + element.name + " , ";
//                 listOfPersonsStringToDisplay = listOfPersonsString.slice(0, listOfPersonsString.length - 3) // remove the last substring " , "
//             });
//             console.log("list of persons : " + listOfPersonsStringToDisplay);
//         }catch(err){
//             console.log("Erreur :" + err);
//         }
//     }

//     showPersons();

// });


