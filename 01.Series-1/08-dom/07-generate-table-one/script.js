// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)
    // create a new node table 
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

    // create a new node title ('th')
    childNode = document.createElement("th");
    // set attributes style to the title
    childNode.setAttribute("style", "border : 2px solid; text-align: center;"); 
    childNode.innerHTML = "title";
    document.getElementById("title").appendChild(childNode); // creates an title object inside the row object
    
    for (i=1 ; i <= 9; i++){
        // create a new node row ('tr')
        childNode = document.createElement("tr");
        // set id to the row
        childNode.setAttribute("id", `data${i}`);
        document.getElementById("table").appendChild(childNode); // creates an row object inside the table object

        // create a new node data ('td') 
        childNode = document.createElement("td");
        // set attributes style to the title
        childNode.setAttribute("style", "border : 1px solid; text-align: center;"); 
        childNode.innerHTML = `Data${i}`;
        document.getElementById(`data${i}`).appendChild(childNode); // creates an data object inside the row object
    }

