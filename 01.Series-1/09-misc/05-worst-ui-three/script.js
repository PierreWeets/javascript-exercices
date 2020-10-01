// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot
var minSlot1 = parseInt(document.getElementById("part-one").getAttribute("data-min"));
var maxSlot1 = parseInt(document.getElementById("part-one").getAttribute("data-max"));
var maxSlot2 = parseInt(document.getElementById("part-two").getAttribute("data-max"));
var maxSlot3 = parseInt(document.getElementById("part-three").getAttribute("data-max"));
var maxSlot4 = parseInt(document.getElementById("part-four").getAttribute("data-max"));
var stringToDisplay;
var timeSlot1;
var timeSlot2;
var timeSlot3;
var timeSlot4;

//activate the slot1
function slot1(){
    //get random number (from min to max) with string format
    stringToDisplay = (minSlot1 + Math.floor(Math.random() * (maxSlot1 - minSlot1))).toString(10);
    document.getElementById("part-one").value=stringToDisplay;
    //console.log("stringToDisplay : " + stringToDisplay);
    delay = 40;
    timeSlot1 =  setTimeout(slot1, delay);
} 
slot1();

document.getElementById("fix-part-one").addEventListener("click", ()=>{
    clearTimeout(timeSlot1);
    document.getElementById("target").innerHTML = "0" + document.getElementById("part-one").value + document.getElementById("target").innerHTML.slice(4) ;
});

//activate the slot2
function slot2(){
    stringToDisplay = Math.floor(Math.random() * maxSlot2).toString(10);
    if (stringToDisplay.length == 1) stringToDisplay = "0" + stringToDisplay;
    document.getElementById("part-two").value=stringToDisplay;
    delay = 40;
    timeSlot2  = setTimeout(slot2, delay);
} 
slot2();
document.getElementById("fix-part-two").addEventListener("click", ()=>{
    clearTimeout(timeSlot2);
    document.getElementById("target").innerHTML = document.getElementById("target").innerHTML.slice(0,4) + document.getElementById("part-two").value + document.getElementById("target").innerHTML.slice(6) ;
});

//activate the slot3
function slot3(){
    stringToDisplay = Math.floor(Math.random() * maxSlot3).toString(10);
    if (stringToDisplay.length == 1) stringToDisplay = "0" + stringToDisplay;
    document.getElementById("part-three").value=stringToDisplay;
    delay = 40;
    timeSlot3 = setTimeout(slot3, delay);
} 
slot3();
document.getElementById("fix-part-three").addEventListener("click", ()=>{
    clearTimeout(timeSlot3);
    document.getElementById("target").innerHTML = document.getElementById("target").innerHTML.slice(0,6) + document.getElementById("part-three").value + document.getElementById("target").innerHTML.slice(8) ;
});

//activate the slot4
function slot4(){
    stringToDisplay = Math.floor(Math.random() * maxSlot4).toString(10);
    if (stringToDisplay.length == 1) stringToDisplay = "0" + stringToDisplay;
    document.getElementById("part-four").value=stringToDisplay;
    delay = 40;
    timeSlot4 = setTimeout(slot4, delay);
} 
slot4();
document.getElementById("fix-part-four").addEventListener("click", ()=>{
    clearTimeout(timeSlot4);
    document.getElementById("target").innerHTML = document.getElementById("target").innerHTML.slice(0,8) + document.getElementById("part-four").value;
});
