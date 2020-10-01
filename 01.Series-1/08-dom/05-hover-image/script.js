// 08-dom/05-hover-image/script.js - 8.5: image hover
    //get ref of the image object
    let sourceArray = document.getElementsByTagName("img");
    //get value of the attributes of this image object
    let imageSource = sourceArray[0].getAttribute("src");
    let newSource = sourceArray[0].getAttribute("data-hover");

    // add a listener for mouse over + give the code to execute
    sourceArray[0].addEventListener("mouseover", () => {sourceArray[0].setAttribute("src", newSource)});
    sourceArray[0].addEventListener("mouseout", () => {sourceArray[0].setAttribute("src", imageSource);});
    console.log("src = " + imageSource);

    // ----- alternative writing -------------
    // // add a listener for mouse over
    // sourceArray[0].addEventListener("mouseover", changeImg, false);
    // sourceArray[0].addEventListener("mouseout", changeImgAgain, false);
    // console.log("src = " + imageSource);
    // // your code here

    // function changeImg(){
    //     console.log("new src = " + newSource);
    //     sourceArray[0].setAttribute("src", newSource);
    // };

    // function changeImgAgain(){
    //     sourceArray[0].setAttribute("src", imageSource);
    //     console.log(" src = " + newSource);
    // };


