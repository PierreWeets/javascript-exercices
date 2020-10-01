// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel
document.getElementById("next").addEventListener("click", () => {
    
    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
        ];
    
    // get value from sessionStorage
    var value = sessionStorage.getItem('indexKey');
    console.log("get session storage : key : " + value);
    // if never been defined set index = 0
    if (value == null ){
        var index = 0;
    } else {
        var index = parseInt(value);
    }

    console.log("get index : " + index);
    let imgToDisplay = gallery[index];
    console.log("imgToDisplay : " + imgToDisplay);

    // get the ref to object with attribute 'ALT' = 'Carousel'
    let imgObject = document.querySelector("[ALt='Carousel']");
    // set the attribute 'src' to 
    imgObject.setAttribute("src", imgToDisplay);

    // increment index before saving it
    index++;
    // test if index is bigger than the gallery array size, if yes, reset the index
    if (index > gallery.length-1) index = 0;
    console.log("set index : " + index);
    // save the index 
    sessionStorage.setItem('indexKey', index.toString(10));

});
