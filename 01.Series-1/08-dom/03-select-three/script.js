// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {
    // get an array of objects with class 'target'
    let arr = document.getElementsByClassName("target");
    //console.log("arr[0] = " + arr[0]);
    // for each element of the array, change the innerhtml value
    for(i=0; i <arr.length ; i++){
        arr[i].innerHTML="owned";
    };
    // your code here

})();
