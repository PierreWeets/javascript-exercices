// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console
document.getElementById("run").addEventListener("click", ()=>{
    let resource = "http://localhost:3000/heroes";
    //let resource = "../../_shared/api.json";
    fetch(resource)
    .then( response => {
        // test if HTTP error
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json()
        .then(function(dataArray) {
          console.log(dataArray);
          let dataContent ="";
          dataArray.forEach(element => {
            dataContent += `id=${element.id}, name=${element.name}, alterego :${element.alterEgo}, abilities :${element.abilities}\n`;
          });
          console.log("dataContent :\n" + dataContent);
        })
        .catch(function(err){
          console.log("error :" + err);
        });
      }
    )
    .catch( err=> {
      console.log('Fetch Error :-S', err);
    });
  

});
