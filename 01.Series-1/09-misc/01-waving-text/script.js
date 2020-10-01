// 09-misc/01-waving-text/script.js - 9.1: waving text
let position = 0;
//let fontSizeArray =[5,10,15,20,25];
//let firstValue;
let delay;
let direction = "right";
let string = document.getElementById("target").innerHTML;
//console.log("string to treat : " + string);

var x = setInterval(function() {
   
        fontSize = 15;
        let stringToDisplay = "";
        for(i=0; i< string.length;i++){
            //if the index of character to display is over the position index ,increment the font-size
            if(i-position >= 0 &&  i-position < 5){
                fontSize = fontSize + 5
            // if the index of character to display is over the position index more than 5 , decrement the font-size                    
            } else if (i-position >= 5  &&  i-position < 10){
                fontSize = fontSize - 5
            }            

            stringToDisplay += `<span style="font-size:${fontSize}px">${string.charAt(i)}</span>`;
            
        };
        
        //test the value of wave position and the direction of the wave before increment/decrement the wave position.
        if(position <= 0){
            direction = "right";
            position++;
        } else if(position >= string.length){
            direction = "left";
            position--;
        } else if(position < string.length && direction == "right"){
            position++;
        } else if(position < string.length && direction == "left"){
            position--;
        } 
        //console.log("position :" + position);
        document.getElementById("target").innerHTML=stringToDisplay;
    
        // delay = 40;
        // setTimeout(wave, delay);

    // // roll the array to the left = set the 1st value at end of the array
    // firstValue = fontSizeArray[0];// saves the 1st value
    // fontSizeArray.shift(); //removes the 1st value & array shifts to the left
    // fontSizeArray.push(firstValue);// adds the 1st value at the end of the array
    document.getElementById("stop").addEventListener("click", () => {
        clearInterval(x);
        //document.getElementById("target").innerHTML="";
       });

    },40);


