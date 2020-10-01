
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


    function colorBackground(color){
        //alert(`clicked_id = ${color}`);
        document.body.style.background = color;
    };

    /* get ref of all objects button, and for each button , add a 'click' event listener that triggers
       the fct that colors the body background (with parameter = button id) */
    document.querySelectorAll("button").forEach($btn => $btn.addEventListener( "click", () => (colorBackground($btn.id))));
    //);
