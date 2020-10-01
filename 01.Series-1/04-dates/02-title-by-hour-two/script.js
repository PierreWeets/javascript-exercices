// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)

    // get current hour & minute from current date
    let message ;
    let date = new Date();
    let minutes = date.getMinutes();
    let hour = date.getHours();

    //if hour > 17 or hour > 17h30
    if (hour > 17 || ( hour == 17  && minutes >= 30) ){
        message =   "Good evening.";
    } else {
        message =   "Hello !";
    }

    //alert(`Message = ${message}`);
    document.getElementById("target").innerHTML = message;
