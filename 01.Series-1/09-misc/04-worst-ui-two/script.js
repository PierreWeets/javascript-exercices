// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect

// window.onclick = e => {
//     //console.log(e.target);
//     console.log(e.target.id, ' -->', e.target.innerHTML);
//     console.log(e.target.tagName);
//     id=e.target.id;
// }

document.getElementById("part-one").addEventListener("click" , ()=>{;

    //console.log("identifier:"+identifier);
    let reference = document.getElementById("part-one");
    //console.log("reference:"+reference);
    let min = parseInt(reference.getAttribute("data-min"));
    let max = parseInt(reference.getAttribute("data-max"));
    let value = parseInt(reference.innerHTML);
    //console.log(`min, max, value: ${min}, ${max}, ${value}`);
    //increment the value
    value = value +1;
    //test if > max value, then reset the value = min value
    if(value > max) {
        value = min;
    } 
    
    if(value.toString(10).length == 1) {
        valueString = "0" + value.toString(10);
    } else {
        valueString = value.toString(10);
    }
        //display
    document.getElementById("part-one").innerHTML=valueString;
    document.getElementById("target").innerHTML="0" + document.getElementById("part-one").innerHTML + document.getElementById("part-two").innerHTML+ document.getElementById("part-three").innerHTML+ document.getElementById("part-four").innerHTML;
}); 

document.getElementById("part-two").addEventListener("click" , ()=>{;

    //console.log("identifier:"+identifier);
    let reference = document.getElementById("part-two");
    //console.log("reference:"+reference);
    let min = parseInt(reference.getAttribute("data-min"));
    let max = parseInt(reference.getAttribute("data-max"));
    let value = parseInt(reference.innerHTML);
    //console.log(`min, max, value: ${min}, ${max}, ${value}`);
    //increment the value
    value = value +1;
    //test if > max value, then reset the value = min value
    if(value > max) {
        value = min;
    } 
    
    if(value.toString(10).length == 1) {
        valueString = "0" + value.toString(10);
    } else {
        valueString = value.toString(10);
    }
        //display
    document.getElementById("part-two").innerHTML=valueString;
    document.getElementById("target").innerHTML="0" + document.getElementById("part-one").innerHTML + document.getElementById("part-two").innerHTML+ document.getElementById("part-three").innerHTML+ document.getElementById("part-four").innerHTML;
}); 

document.getElementById("part-three").addEventListener("click" , ()=>{;

    //console.log("identifier:"+identifier);
    let reference = document.getElementById("part-three");
    //console.log("reference:"+reference);
    // let min = parseInt(document.getElementById("part-one").getAttribute("data-min"));
    // let max = parseInt(document.getElementById("part-one").getAttribute("data-max"));
    // let value = parseInt(document.getElementById("part-one").innerHTML);
    let min = parseInt(reference.getAttribute("data-min"));
    let max = parseInt(reference.getAttribute("data-max"));
    let value = parseInt(reference.innerHTML);
    //console.log(`min, max, value: ${min}, ${max}, ${value}`);
    //increment the value
    value = value +1;
    //test if > max value, then reset the value = min value
    if(value > max) {
        value = min;
    } 
    
    if(value.toString(10).length == 1) {
        valueString = "0" + value.toString(10);
    } else {
        valueString = value.toString(10);
    }
        //display
    document.getElementById("part-three").innerHTML=valueString;
    document.getElementById("target").innerHTML="0" + document.getElementById("part-one").innerHTML + document.getElementById("part-two").innerHTML+ document.getElementById("part-three").innerHTML+ document.getElementById("part-four").innerHTML;
});

document.getElementById("part-four").addEventListener("click" , ()=>{;

    //console.log("identifier:"+identifier);
    let reference = document.getElementById("part-four");
    //console.log("reference:"+reference);
    // let min = parseInt(document.getElementById("part-one").getAttribute("data-min"));
    // let max = parseInt(document.getElementById("part-one").getAttribute("data-max"));
    // let value = parseInt(document.getElementById("part-one").innerHTML);
    let min = parseInt(reference.getAttribute("data-min"));
    let max = parseInt(reference.getAttribute("data-max"));
    let value = parseInt(reference.innerHTML);
    //console.log(`min, max, value: ${min}, ${max}, ${value}`);
    //increment the value
    value = value +1;
    //test if > max value, then reset the value = min value
    if(value > max) {
        value = min;
    } 
    
    if(value.toString(10).length == 1) {
        valueString = "0" + value.toString(10);
    } else {
        valueString = value.toString(10);
    }
        //display
    document.getElementById("part-four").innerHTML=valueString;
    document.getElementById("target").innerHTML="0" + document.getElementById("part-one").innerHTML + document.getElementById("part-two").innerHTML+ document.getElementById("part-three").innerHTML+ document.getElementById("part-four").innerHTML;
});