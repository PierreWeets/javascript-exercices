// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set
document.getElementById("run").addEventListener("click", () => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // display the set size
    console.log("number of persons : " + people.size);
    console.log("Is Alexandre in the list of persons ? " + (people.has("Alexandre") ? "yes, found" : "not found"));
     
});