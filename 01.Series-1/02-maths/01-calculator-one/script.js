    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
       number1 = parseFloat(document.getElementById("op-one").value);
       number2 = parseFloat(document.getElementById("op-two").value);
       //alert(`number1 = ${number1}`);
       alert(`Result = ${number1+number2}`)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        number1 = parseFloat(document.getElementById("op-one").value);
        number2 = parseFloat(document.getElementById("op-two").value);
        //alert(`number1 = ${number1}`);
        alert(`Result = ${number1-number2}`)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        number1 = parseFloat(document.getElementById("op-one").value);
        number2 = parseFloat(document.getElementById("op-two").value);
        //alert(`number1 = ${number1}`);
        alert(`Result = ${number1*number2}`)
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        number1 = parseFloat(document.getElementById("op-one").value);
        number2 = parseFloat(document.getElementById("op-two").value);
        //alert(`number1 = ${number1}`);
        alert(`Result = ${number1/number2}`)
    });

//alternative way of coding
    function treat(clicked_id){
        let number1 = parseFloat(document.getElementById("op-one").value);
        let number2 = parseFloat(document.getElementById("op-two").value);
        let result;
        //alert(`clicked_id = ${clicked_id}`);
        switch (clicked_id){
            case "add": result = number1 + number2;
                break;
            case "sub" : result = number1 - number2;
                break;
            case "multi" : result = number1 * number2;
                break;
            case "div" : result = number1 / number2;
                break;
            default : result = NaN;
                break;
        }
        alert(`Result bis = ${result}`)
        //return result;
    }