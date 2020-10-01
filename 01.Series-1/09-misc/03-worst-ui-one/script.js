// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {
    var slider = document.getElementById("slider");
    var output = document.getElementById("target");
    output.innerHTML = "0" + slider.value.toString(); 
    // your code here
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
    output.innerHTML = "0" + this.value.toString();
  } 

})();
