
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)

    let message = (new Date().getHours() < 18 ) ? "Hello !" : "Good evening.";
    //alert(`Message = ${message}`);
    document.getElementById("target").innerHTML = message;