// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

    // to get the value of an input: document.getElementById("element-id").value
    const performOperation = operation => {
        // perform the operation
        let number1 = parseFloat(document.getElementById("op-one").value);
        let number2 = parseFloat(document.getElementById("op-two").value);
        let result;
        //alert(`clicked_id = ${operation}`);
        switch (operation){
            case "addition": result = number1 + number2;
                break;
            case "substraction" : result = number1 - number2;
                break;
            case "multiplication" : result = number1 * number2;
                break;
            case "division" : result = number1 / number2;
                break;
            default : result = NaN;
                break;
        }
        alert(`Result = ${result}`)
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
