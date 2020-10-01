// 11-fetch/04-add/script.js - 11.4: ajouter un élément
document.getElementById("run").addEventListener("click", ()=>{
    //--- extract from inputs objects, the name, alter-ego & abilities  ----
    // get the hero id from the input object
    let name = document.getElementById("hero-name").value;
    //console.log("name : " + name);
    
    // get the alter-ego from the input object
    let alterEgo = document.getElementById("hero-alter-ego").value;
    //console.log("alter : " + alterEgo);
        
    // get the abilities from the input object
    let abilitiesArray = document.getElementById("hero-powers").value.split(",");

    // --- get all data from json file ----
    let sourceFile = "http://localhost:3000/heroes";

    //add the new hero to json file
    // fetch(sourceFile, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         // id : automatically generated
    //         name : name,
    //         alterEgo: alterEgo,
    //         abilities: abilitiesArray,
    //     }),
    //     headers: { //format data under json file & charset=UTF-8
    //         'Content-type': 'application/json; charset=UTF-8'
    //     }
    // }).then(function (response) {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     return Promise.reject(response);
    // }).then(function (data) {
    //     console.log(data);
    // }).catch(function (error) {
    //     console.warn('Something went wrong.', error);
    // });

    //
    const hero = {
        // id : automatically generated
        name: name,
        alterEgo: alterEgo,
        abilities: abilitiesArray,
    };
    
    const options = {
        method: 'POST',
        body: JSON.stringify(hero),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    }
    
    fetch(sourceFile, options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch( error => console.error('Something went wrong.', error));
        
    // display, in Console, the json content
    //-- ATTENTION -- ONLY HTTP address is accepted as parameter by the fct fetch()
    //let sourceFile = "../../_shared/api.json";
    fetch(sourceFile)
    .then( response => {
        // test if HTTP error
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        response.json()
        .then( dataArray => {
            //get number of objects in json file
            var numberOfHeroes = dataArray.length;
            console.log("number Of Heroes :" + numberOfHeroes);

            //add name, alter-ego & abilities to the array of data 
            //dataArray.push({id : numberOfHeroes + 1 , name : name, alterego: alterEgo , abilities : abilitiesArray });

            //display for each element in dataArray, the value of each
            dataArray.forEach(element => { for ( key in element) console.log(`${key} : ${element[key]}`) });

            //old fashion writing
            // dataArray.forEach(function(element){
            //     for ( key in element) { 
            //         console.log(`${key} : ${element[key]}`);
            //     };
            // });
        })
        .catch( err => {
            console.log("error :" + err);
        });
    })
    .catch( err => {
        console.log('Fetch Error :-S', err);
    });

});
