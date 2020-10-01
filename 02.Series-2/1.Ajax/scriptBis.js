let list = document.getElementById("quote");  
    //remove all childnodes in the object with id="target"
while (list.hasChildNodes()) {   
    list.removeChild(list.firstChild);
}    
console.log("test : " );
let resource = "https://thatsthespir.it/api";

let xhr = new XMLHttpRequest;
//Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', resource, true)
//call the onload 
xhr.onload = function() 
    {
        //check if the status is 200(means everything is okay)
        if (this.status === 200) 
            {
                //return server response as an object with JSON.parse
                data = JSON.parse(this.responseText);
                
                let htmlParagraphToDisplay = document.getElementById("tpl-quote").innerHTML;
                console.log("htmlParagraphToDisplay before : " + htmlParagraphToDisplay);
                  htmlParagraphToDisplay = htmlParagraphToDisplay.replace('<strong>quote', `<strong>${data.quote}`);
                  htmlParagraphToDisplay = htmlParagraphToDisplay.replace('<img src="photo-link">', `<img src="${data.photo}">`);
                  htmlParagraphToDisplay = htmlParagraphToDisplay.replace('<a href="url">author</a>', `<a href="${data.permalink}" target="_blank">${data.author}</a>`);
                  htmlParagraphToDisplay = htmlParagraphToDisplay.replace('<p>total quotes</p>', `<p>nombre de citations : ${data.total_quotes}</p>`);            
                  console.log("htmlParagraphToDisplay after : " + htmlParagraphToDisplay);
      
                  // insert the created HTML paragraph to display, into the <ol> object 
                //console.log("htmlParagraphToDisplay : " + htmlParagraphToDisplay);
                document.getElementById("quote").innerHTML = htmlParagraphToDisplay;
      
        } else {
            console.log("err : " + this.status);
        }
    }
//call send to the server
xhr.send();
    //Common Types of HTTP Statuses
    // 200: OK
    // 404: ERROR
    // 403: FORBIDDEN