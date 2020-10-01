// 05-arrays/04-walk-two/script.js - 5.4: walk through the list (2)
document.getElementById("run").addEventListener("click", () => {
    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    fruits.forEach( function(el) {console.log(el);} );
    console.log("another notation:");
    fruits.forEach( el => {console.log(el);} );//for each
    // your code here

});