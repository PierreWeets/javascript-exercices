// 02-maths/05-factorial/script.js - 2.5: Factorial

    // to get the value of an input: document.getElementById("element-id").value
    //recursive way to compute a factorial (factorial(3) = 1*2*3 = 6)
    function factorial(number) { 
        if (number != 0){
            return (number * factorial(number-1));
        } else {
             return 1;
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        // display the factorial of integer value of the input field
        let number = parseInt(document.getElementById("number").value);
        alert(`factorial of ${number} = ` + factorial(number));
    });