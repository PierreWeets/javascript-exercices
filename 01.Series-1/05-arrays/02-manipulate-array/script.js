// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array


document.getElementById("run").addEventListener("click", () => {
    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    console.log("list of fruits before : " + fruits);

    fruits.splice(0,1,"babane");
    fruits.splice(fruits.length-1,1,"kiwi");
    console.log("list of fruits after : " + fruits);
    
    // your code here
});
