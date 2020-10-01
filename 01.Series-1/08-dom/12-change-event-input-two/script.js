// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)
//init the input object
document.getElementById("pass-one").value = "";
 
document.getElementById("pass-one").addEventListener("input", () =>{
    // get the input string
    string = document.getElementById("pass-one").value;
    const regex = new RegExp("([^0-9]*[0-9]){2,}");// test if at least 2 numbers in the string
    //console.log("before string : " + string);
    //console.log("before Regex.IsMatch(string, '([^0-9]*[0-9]){2,}')) : " + regex.test(string));
    
    //test if at least siez = 8 & if regular expression encountered
    if (string.length >= 8 && regex.test(string)){
        
        document.getElementById("validity").innerHTML = "ok";

    } else {
        document.getElementById("validity").innerHTML = "Not ok";
    }
    
});

