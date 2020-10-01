// 11-fetch/05-delete/script.js - 11.5: supprimer un élément
document.getElementById("run").addEventListener("click", ()=>{
    // get the hero id from the input object
    let id = parseInt(document.getElementById("hero-id").value);
    console.log("id : " + id);

    //DELETE task with id = 1
 // --- get all data from json file ----
    let sourceFile = "http://localhost:3000/heroes";
    fetch(`${sourceFile}/${id}` , {
        method : 'DELETE'
    })
    
});