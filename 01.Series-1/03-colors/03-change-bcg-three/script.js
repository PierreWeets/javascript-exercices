// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)
    document.getElementById("run").addEventListener("click", () => {
        let color ="";
        for(let i = 0; i < 3; i++) {
            let subValue = Math.floor(Math.random() * 256).toString(16); // random value from 0->255
            color = color + (subValue.length == 1 ? "0" + subValue : subValue);
        }
        color = "#" + color; // get format #0A5FFF
        //alert(`color =  ${color}`);
        document.body.style.background =color;
    });
