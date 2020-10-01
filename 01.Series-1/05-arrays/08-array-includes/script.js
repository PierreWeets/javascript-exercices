
// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

document.getElementById("run").addEventListener("click", () => {

    
    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];
    
    // indexOF() returns -1 if not found
    console.log(`Apple exist in the array : ${(fruits.indexOf("apple") !== -1) ? "yes": "no"}`);
    // your code here
    });