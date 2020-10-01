// 11-fetch/02-list-to-template/script.js - 11.2: liste vers template
//document.getElementById("run").addEventListener("click", ()=>{
    //get ref of the object <ol> with id="quote"
    let list = document.getElementById("quote");  
    //remove all childnodes in the object <ol> with id="target"
    while (list.hasChildNodes()) {   
      list.removeChild(list.firstChild);
    }

    let resource = "https://thatsthespir.it/api";
    //-- ATTENTION -- ONLY HTTP address is accepted as parameter by the fct fetch()
    //let resource = "../../_shared/api.json";
    fetch(resource) //retrieve the content of the json file, via HTTP  
    .then( response => {
        // test if HTTP error
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        // Examine the text in the response (json file)
        response.json()
        .then( data => {
          console.log("data : " + data);

          let htmlParagraphToDisplay = document.getElementById("tpl-quote").innerHTML;
          console.log("htmlParagraphToDisplay before : " + htmlParagraphToDisplay);
            htmlParagraphToDisplay = htmlParagraphToDisplay.replace('<strong>quote', `<strong>${data.quote}`);
            htmlParagraphToDisplay = htmlParagraphToDisplay.replace('<img src="photo-link">', `<img src="${data.photo}">`);
            htmlParagraphToDisplay = htmlParagraphToDisplay.replace('<a href="url">author</a>', `<a href="${data.permalink}" target="_blank">${data.author}</a>`);
            htmlParagraphToDisplay = htmlParagraphToDisplay.replace('<p>total quotes</p>', `<p>nombre de citations : ${data.total_quotes}</p>`);            
            console.log("htmlParagraphToDisplay after : " + htmlParagraphToDisplay);

            // insert the created HTML paragraph to display, into the <ol> object 
          console.log("htmlParagraphToDisplay : " + htmlParagraphToDisplay);
          document.getElementById("quote").innerHTML = htmlParagraphToDisplay;
        })
        .catch( err => {
          console.log("error :" + err);
        });
      }
    )
    .catch( err => {
      console.log('Fetch Error :-S', err);
    });
//});