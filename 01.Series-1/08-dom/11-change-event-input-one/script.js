// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)
//init the input object
document.getElementById("pass-one").value = "";

document.getElementById("pass-one").addEventListener("input", () =>{ //each time a key is pressed in the input object
    // get the string inside the input object
    string = document.getElementById("pass-one").value;
    //console.log("before string : " + string);

    //if size > 10, truncaturate the string & display the it
    if (string.length > 10){
        string = string.substr(0,10);
        document.getElementById("pass-one").value = string;

    } else { //change the displayed size of the string
        document.getElementById("counter").innerHTML = (string.length+"/10");
    }
    //console.log("after : string : " + string);
});
