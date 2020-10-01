// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


let string = document.getElementById("target").innerHTML;
console.log("string.length :" + string.length);
console.log("string :" + string);

let i = 0;
let txt = document.getElementById("target").innerHTML;
let speed ;
document.getElementById("target").innerHTML="";

//---ATTENTION ---- with setTimeout(), impossible to use a for loop
function typeWriter() {
    if (i < txt.length) {
    speed = 20 + Math.floor(Math.random() * 40);
    document.getElementById("target").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}

typeWriter();
console.log("Goodbye!");