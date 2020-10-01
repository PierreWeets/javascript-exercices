
// 03-colors/02-change-bcg-one/script.js - 3.2: Bcg one (1)
    document.getElementById("run").addEventListener("click", () => {
        // display the background with color, set in the input field
        let color = document.getElementById("color").value;
        //alert(`color is ${color}`);
        document.body.style.background =color;
    });
