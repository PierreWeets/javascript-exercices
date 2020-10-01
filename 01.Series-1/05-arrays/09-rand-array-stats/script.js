// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        function random(number){ // returns from random from (1 -> number)
            let randomNumber =  Math.floor(Math.random() * number) + 1;
            return randomNumber;
        }

        let arrayOfNumbers=[];
        for(i=0; i<10; i++){
            //add in the array a random number (=1->100)
            arrayOfNumbers.push(random(100));
            //display this number in the HTML object with id="n-[x]"
            document.getElementById(`n-${i+1}`).innerHTML = arrayOfNumbers[i];
        }
        
        //display the content of the whole arrayOfNumbers
        arrayOfNumbers.forEach(el => {
            console.log(`random number : ${el}`) ;
        });
        //sort the values of the arrayOfNumbers
        arrayOfNumbers.sort(function(a, b) { //compares 2 consecutives strings (each string having a numeric value)
            return a - b; // if the difference is negative <=> a < b (then a is set before b), 
            // if the difference is positive <=> a>b (then b set before a), ELSE a==b, then no modification
            //rem : empty strings or NULL are sorted on the right of the array
          });
        //smallest has index = 0
        document.getElementById("min").innerHTML= arrayOfNumbers[0];
        //biggest has the last index
        document.getElementById("max").innerHTML= arrayOfNumbers[arrayOfNumbers.length-1];
        
        //compute the sum of all the values
        function arrSum (arr){
            return arr.reduce(function(a,b){ // method 'reduce" applies the treatment of the "function(a,b) = return a +b ;"
            // on the the 1st element of the array (used as accumulator) and each of the next values of the array
            // Once done, the UNIQUE value of the accumator is returned
            return a + b
            }, 0);
          }
        //another writing
        // const arrSum = arr => arr.reduce((a,b) => a + b, 0); 

        document.getElementById("sum").innerHTML= arrayOfNumbers.reduce((a,b) => a+b, 0);
        
        //with a call to the function arrSum
        //document.getElementById("sum").innerHTML= arrSum(arrayOfNumbers);

        // define a function 'arrAvg' that uses the 1st element of the array as accumulator that is divided by the number of element in the array
        const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length ;
        document.getElementById("average").innerHTML= arrAvg(arrayOfNumbers);
    });
