// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker

if (typeof(Storage) !== "undefined") {
    // get value from sessionStorage
    var valueString = localStorage.getItem('value');
    console.log("get local storage : value : " + valueString);
    // if never been defined set index = 0
    if (valueString == null ){
        var valueString = "0";
    }   
    document.getElementById("target").innerHTML = valueString;
    var value = parseInt(valueString);
     
    document.getElementById("increment").addEventListener("click", ()=> {
        value++;
        document.getElementById("target").innerHTML = value.toString(10);
        localStorage.setItem("value", value.toString(10));
    });
    
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }