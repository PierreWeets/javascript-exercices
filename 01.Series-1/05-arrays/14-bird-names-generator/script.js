// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French

//import { string } from "prop-types";

document.getElementById("run").addEventListener("click", () => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    
    // copies the SET object content into an array
    var adjectivesArray = Array.from(adjectives);

    // your code here
        // generates a random index for birds
        let birdIndex = Math.floor(Math.random() * birds.length);
        // generates a random index for adjectives
        let adjectifIndex = Math.floor(Math.random() * adjectivesArray.length);
        //console.log("birdsIndex : " + birdIndex);
        //console.log("adjectifIndex : " + adjectifIndex);

        // displays the generated sentence : add a 'e' at the end if data 'fem' = true
        let string = birds[birdIndex].name + " " + adjectivesArray[adjectifIndex] + ((birds[birdIndex].fem) ? "e" : "");
        console.log(string);
        document.getElementById("target").innerHTML = string;
}); 
