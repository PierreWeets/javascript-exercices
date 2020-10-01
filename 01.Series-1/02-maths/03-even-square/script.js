// 02-maths/03-even-square/script.js - 2.3: squares and pairs
    document.getElementById("run").addEventListener("click", () => {
        let number = 21; 
        // your code here
        let randomNumber =  Math.floor(Math.random() * number) + 1 ;
        alert("random number from 1 to " + (number) + " : " + randomNumber);
    });
