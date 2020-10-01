// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        //get the value of the input object and csplit them into an array of numbers
        let arrayNumbers = document.getElementById("numbers").value.split(",");
        //alert("splited input value : " + arrayNumbers);
        
        // sorts the array of values (the values are considered as strings) and returns an array.
        arrayNumbers.sort(function(a, b) { //compares 2 consecutives strings (each string having a numeric value)
            return a - b; // if the difference is negative <=> a < b (then a is set before b), 
            // if the difference is positive <=> a>b (then b set before a), ELSE a==b, then no modification
            //rem : empty strings or NULL are sorted on the right of the array
          });
        alert("sorted numbers : " + arrayNumbers);
        
    });
