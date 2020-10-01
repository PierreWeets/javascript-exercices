// 04-dates/04-locale-date/script.js - 4.4: textual date
let dateObject = new Date();
    //alert(`dateString = ${dateObject.toString()}.`);
    //alert(`dateString.getDay() = ${dateObject.getDay()}.`);
    switch(dateObject.getDay()){
        case 0 : weekDay = "Sunday"; break;
        case 1 : weekDay = "Monday"; break;
        case 2 : weekDay = "Tuesday"; break;
        case 3 : weekDay = "Wednesday"; break;
        case 4 : weekDay = "Thirsday"; break;
        case 5 : weekDay = "Friday"; break;
        case 6 : weekDay = "Saterday"; break;
        default : weekDay = "Error";
    };

    switch(dateObject.getMonth()){
        case 0 : monthString = "January"; break;
        case 1 : monthString = "February"; break;
        case 2 : monthString = "March"; break;
        case 3 : monthString = "April"; break;
        case 4 : monthString = "May"; break;
        case 5 : monthString = "June"; break;
        case 6 : monthString = "July"; break;
        case 7 : monthString = "August"; break;
        case 8 : monthString = "September"; break;
        case 9 : monthString = "October"; break;
        case 10 : monthString = "November"; break;
        case 11 : monthString = "December"; break;
        default : weekDay = "Error";
    };

    // compute the hour under string format
    let hourString ;
    if(dateObject.getHours().toString().length == 1){
        hourString = "0" + dateObject.getHours();
    } else {
        hourString = dateObject.getHours();
    }

    hourString += "h";
    if(dateObject.getMinutes().toString().length == 1){
        hourString = hourString + "0" + dateObject.getMinutes();
    } else {
        hourString = hourString + dateObject.getMinutes();
    }
    
    // concise writing
    hourStringBis = ((dateObject.getHours().toString().length == 1) ? "0" :"" ) + dateObject.getHours() + "h" 
                       + ((dateObject.getMinutes().toString().length == 1)? "0" :"" ) + dateObject.getMinutes();
    alert(`hourStringBis = ${hourStringBis}.`);
    
    let message = weekDay + " " +  dateObject.getDate() + " " + monthString + " " + dateObject.getFullYear() + ", " + hourString;
    //alert(`message = ${message}.`);
    document.getElementById("target").innerHTML = message; 
