// 04-dates/03-age-by-select/script.js - 4.3: calculate the age
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let dayNumber = parseInt(document.getElementById("dob-day").value);
        let monthNumber = parseInt(document.getElementById("dob-month").value);
        let yearNumber = parseInt(document.getElementById("dob-year").value);
        //alert(`your birthdate = ${dayNumber}/${monthNumber}/${yearNumber}`);

        //create the birthdate from chosen combo-boxes. ATTENTION : monthNumber : 0 -> 11, then July = 6 AND NOT 7.
        let userBirthDate = new Date(yearNumber, monthNumber-1,dayNumber);
        var diff_ms = Date.now() - userBirthDate.getTime();// difference in Milliseconds between the 2 dates
        var age_dt = new Date(diff_ms); // creates a new date from this number of milliseconds.
 
        let age = Math.abs(age_dt.getUTCFullYear() - 1970);// calculate age from 1970 : reference for Universal Time 

        //alert(`presentDate & userBirthDate ${Date().toString()} & ${userBirthDate}.`)

        alert(`Your age is ${age}.`)
    });
