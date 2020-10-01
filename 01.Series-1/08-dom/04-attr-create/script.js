// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {
    let source = document.getElementById("source").getAttribute("data-image");
    console.log("src = " + source);

    //creates a new child node 
    let imgNode = document.createElement("img");
    //add attributes to the created image object
    imgNode.setAttribute("id", "image");
    imgNode.setAttribute("src", source);
    imgNode.setAttribute("height", 300);
    imgNode.setAttribute("width", 300);
    //append this created object , as a new node of the object with id="target" 
    document.getElementById("target").appendChild(imgNode); // creates an HTML object 

    // your code here

})();
