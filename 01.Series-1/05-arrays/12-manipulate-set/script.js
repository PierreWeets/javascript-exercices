// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set
document.getElementById("run").addEventListener("click", () => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    console.log("before update:");
    for (el of fruits.values()) console.log("fruit = " + el); // for each value, of the iterator in the Set.
    
    // update the Set
    fruits.delete("apple");
    fruits.delete("cherry");
    fruits.add("banana");
    fruits.add("kiwi");
    
    console.log("after update:");
    fruits.forEach(el => {console.log("fruit : " + el)}); // display each value of the Set object
});
