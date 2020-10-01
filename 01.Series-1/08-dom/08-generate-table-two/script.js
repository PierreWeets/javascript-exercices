// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

let childNode = document.createElement("table");
//set attributes id & style to the table
childNode.setAttribute("style", "border : 3px solid");
childNode.setAttribute("id", "table");
document.getElementById("target").appendChild(childNode); // creates an HTML object inside the HTLM object DIV with id=target

// create a new node row ('tr')
childNode = document.createElement("tr");
// set id to the row
childNode.setAttribute("id", "title");
document.getElementById("table").appendChild(childNode); // creates an row object inside the table object

    
for (j=1; j <= 10; j++){

// create a new node title ('th')
childNode = document.createElement("th");
// set attributes style to the title
childNode.setAttribute("style", "border : 2px solid; text-align: center;"); 
childNode.innerHTML = `title${j}`;
document.getElementById("title").appendChild(childNode); // creates an title object inside the row object

// create a new node row ('tr')
childNode = document.createElement("tr");
// set id to the row
childNode.setAttribute("id", `row${j}`);
document.getElementById("table").appendChild(childNode); // creates an row object inside the table object

for (i=1 ; i <= 10; i++){

    // create a new node data ('td') 
    childNode = document.createElement("td");
    // set attributes style to the title
    childNode.setAttribute("style", "border : 1px solid; text-align: center;"); 
    childNode.innerHTML = j*i;
    document.getElementById(`row${j}`).appendChild(childNode); // creates an data object inside the row object
}
// your code here
}


