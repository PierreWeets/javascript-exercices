// 11-fetch/02-list-to-template/script.js - 11.2: liste vers template
document.getElementById("run").addEventListener("click", ()=>{
    //get ref of the object <ol> with id="target"
    let list = document.getElementById("target");  
    //remove all childnodes in the object <ol> with id="target"
    while (list.hasChildNodes()) {   
      list.removeChild(list.firstChild);
    }

    let resource = "http://localhost:3000/heroes";
    //-- ATTENTION -- ONLY HTTP address is accepted as parameter by the fct fetch()
    //let resource = "../../_shared/api.json";
    fetch(resource) //retrieve the content of the json file, via HTTP server (port : 3000)
    .then( response => {
        // test if HTTP error
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json()
        .then( dataArray => {
          console.log("dataArray length : " + dataArray.length);
          //display for each element in dataArray, the value of each
          //dataArray.forEach(element => { for ( key in element) console.log(`${key} : ${element[key]}`) });
          let clon;
          //  -- ATTENTION -- get innerHTML from getElementsByClassName("name")[0] does not work because the class="name" is inside
          // a tag <strong> not recognised as a information tag => getElementsByClassName("name") returns nothing

          // -- ATTENTION -- get innerHTML from getElementsByTagName("strong")[2] does not work
          //let element = document.getElementsByTagName("strong")[2];

          //-- SOLUTION -- get the innerHTML of the element with id="tpl-hero"
          let htmlLine = document.getElementById("tpl-hero").innerHTML;
          let htmlLineToDisplay = "";
          let htmlParagraphTODisplay = "";
          //console.log("htmlLine : " + htmlLine);

          // for each element of the dataArray
          dataArray.forEach(element => {
            // init the HTML line to display 
            htmlLineToDisplay = htmlLine;
            //console.log("before : " + htmlLineToDisplay);
            //replace successively each part of the HTML line with data to display
            htmlLineToDisplay = htmlLineToDisplay.replace('class="name">', `class="name">id : ${element.id}, Name : ${element.name}`);
            htmlLineToDisplay = htmlLineToDisplay.replace('class="alter-ego">', `class="name">alterego : ${element.alterEgo}`);
            htmlLineToDisplay = htmlLineToDisplay.replace('class="powers">', `class="name">powers : ${element.abilities}`);
            console.log("after : " + htmlLineToDisplay);
            //create the HTML paragraph to be inserted into the <ol> object
            htmlParagraphTODisplay += htmlLineToDisplay;
          });
          // insert the created HTML paragraph to display, into the <ol> object 
          console.log("htmlParagraphTODisplay : " + htmlParagraphTODisplay);
          document.getElementById("target").innerHTML = htmlParagraphTODisplay;
        })
        .catch( err => {
          console.log("error :" + err);
        });
      }
    )
    .catch( err => {
      console.log('Fetch Error :-S', err);
    });
});