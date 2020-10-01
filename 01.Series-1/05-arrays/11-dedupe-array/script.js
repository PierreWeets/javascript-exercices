// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array
document.getElementById("run").addEventListener("click", () => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    console.log("before : Fruits = "  + fruits);
    // your code here
    let newFruits = [];
    do{
        // adds/saves the 1st fruit in a new array
        newFruits.push(fruits[0]);
        // saves this 1st fruit to find in temporary variable
        let fruitToFind = fruits[0];
        // test each element of the 'fruits' array, if = fruitToFind => remove it from the 'fruits' array
        for( let i = 0; i < fruits.length; i++){ if ( fruits[i] == fruitToFind) { fruits.splice(i, 1); i--;}};

    }while (fruits.length > 0) // loops while the 'fruits' array is not empty
    //console.log("after : newFruits = "  + newFruits);
    // copy 'newFruits' array into 'fruits' array
    for(let i = 0;  i < newFruits.length; ++i) fruits[i] = newFruits[i];
    console.log("after : Fruits = "  + fruits);
});
