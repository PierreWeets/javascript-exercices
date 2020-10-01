// 09-misc/06-guess-number/script.js - 9.6: guess the number
    
let attempt = 0;
let numberToFind = Math.floor(Math.random()*100) + 1;
alert("numberToFind : " + numberToFind);
//alert("numberToFind : " + numberToFind);
do{   
    do {
    var resString = prompt("enter a value between 1 and 100 :", "1-100") ;
        //console.log("resString : " +resString);
        //console.log("parseInt resString : " +parseInt(resString));
    //while the encode string is not a number, or empty or <1 or >100
    }while(isNaN(resString) || resString == ""|| parseInt(resString) < 1 || parseInt(resString) > 100);

    attempt++;
    number = parseInt(resString);
    
   
    if (number < numberToFind){
        alert(`Number ${number} is lower than the number to find.`);
        
    } else if (number > numberToFind){
        alert(`Number ${number} is higher than the number to find.`);
        
    }

}while( number != numberToFind);

alert(`that's it! You needed ${attempt} guesses`);

