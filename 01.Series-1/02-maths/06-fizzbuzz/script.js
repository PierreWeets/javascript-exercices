// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
    // 
    for (i=1; i <= 100 ; i++){
        let message ="";
        //test if number is multiple of 3
        if (i%3 == 0){
            //test if number is multiple of 5
            if (i%5 == 0 ){
                message = "fizzbuzz";
            } else {
                message = "fizz";
            }
        } else if (i%5 == 0) {
            message = "buzz"
        } else {
            message = "";
        }

        console.log(`${i} ${message}`);
    }
