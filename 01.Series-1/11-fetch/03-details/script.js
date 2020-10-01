// 11-fetch/03-details/script.js - 11.3: details

// -- ATTENTION -- get innerHTML from getElementsByClassName("name")[0] does not work because the class="name" is inside
// a tag <strong> not recognised as a information tag => getElementsByClassName("name") returns nothing

// -- ATTENTION -- get innerHTML from getElementsByTagName("strong")[2] does not work
//let element = document.getElementsByTagName("strong")[2];

//-- SOLUTION -- get the innerHTML of the element with id="tpl-hero"
//saves the content of the template
let htmlLine = document.getElementById("tpl-hero").innerHTML;
//console.log('htmlLine :' + htmlLine);

document.getElementById("run").addEventListener("click", ()=>{
    //get ref of the object <ol> with id="target"
    let list = document.getElementById("target");  
        //console.log("has document.getElementById('target').hasChildNodes()? : " + list.hasChildNodes());
    //remove all childnodes in the object <ol> with id="target"
    while (list.hasChildNodes()) {   
        list.removeChild(list.firstChild);
    }

    let resource = "http://localhost:3000/heroes";
    //-- ATTENTION -- ONLY HTTP address is accepted as parameter by the fct fetch()
    //let resource = "../../_shared/api.json"; // not accespted by fetch()
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
        //if read of HTTP resources = OK
        .then( dataArray => {
            //console.log(dataArray);
            let clon;
            let htmlLineToDisplay;
            //console.log("htmlLine : " + htmlLine);
            
            // get the hero id from the input object
            let id = parseInt(document.getElementById("hero-id").value);
            console.log("id : " + id);
                
            // init the HTML line to display with the save of template content
            htmlLineToDisplay = htmlLine;
            
            //replace successively each part of the innerHTML to display with data to display
            htmlLineToDisplay = htmlLineToDisplay.replace('class="name">', `class="name">name : ${dataArray[id].name}`);
            htmlLineToDisplay = htmlLineToDisplay.replace('class="alter-ego">', `class="name">alter ego : ${dataArray[id].alterEgo}`);
            htmlLineToDisplay = htmlLineToDisplay.replace('class="powers">', `class="name">abilities : ${dataArray[id].abilities}`);
            
            //modify the innerHTML of template with id="tpl-hero" , with the new HTML line to display
            //console.log("after : " + htmlLineToDisplay);
            document.getElementById("tpl-hero").innerHTML = htmlLineToDisplay;
            //create a clone of template with id="tpl-hero"
            clon = document.getElementById("tpl-hero").content.cloneNode(true);
            //append the created clone as a new node, inside the element with id="target"
            document.getElementById("target").appendChild(clon);
        })//if error occurred when getting hero data from hero id
        .catch( err => {
            console.log("get hero : error :" + err);
        });
        }
    )//if error when reading the HTTP resources
    .catch( err => {
        console.log('Fetch Error :-S', err);
    });
});