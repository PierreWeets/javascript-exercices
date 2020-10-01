
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13

document.getElementById("run").addEventListener("click", () => {

    function leapYear(year){
        /* returns TRUE if year divisible by 100  & divisible by 400 => leap year.
        if year NOT divisible by 100 & divisible by 4 => leap year.
        else returns FALSE (NOT leap year)
        */
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    }

    function getMonthsWithFriday13th(){
        let listOfMonths =[];
        
        //test if leap year => number of days for the year
        let nbreOfDays = (leapYear(year)? 366 : 365);
        //alert(`leapYear ? , nbreOfDays = ${leapYear(year)}, ${nbreOfDays}.`)
        
        //get the date of 1st day of the chosen year, under format of ms
        let firstDayTimeInMS =  new Date(`1/1/${year}`).getTime();
        //create an date object = 1st day of the year
        let nextDateObj = new Date(firstDayTimeInMS);
        
        //test each day of the year
        for(i=1; i <= nbreOfDays; i++){
            // console.log(`first date + ${i} days = ${nextDateObj.toString()}.`);
            // console.log(`week day = ${nextDateObj.getDay()}, date = ${nextDateObj.getDate()}.`);

            // test if day of the week = friday (index=5) & if date = 13
            if (nextDateObj.getDay() == 5 && nextDateObj.getDate() == 13){
                //select month string from month index
                switch(nextDateObj.getMonth()){
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
                // add the month string to the array of months
                listOfMonths.push(monthString);
            }

            // add 84400000 milliseconds to go to the next day
            nextDateObj = new Date(firstDayTimeInMS + i*24*60*60*1000)  ;

        }
        // retunr the array of the names of the months 
        return listOfMonths;
    };

    let year = parseInt(document.getElementById("year").value);
    //display result
    alert(`List of months with a friday 13th in ${year} : ${getMonthsWithFriday13th(year)}.`);
 });
