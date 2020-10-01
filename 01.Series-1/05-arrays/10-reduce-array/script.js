// 05-arrays/10-reduce-array/script.js - 5.10: using reducer
document.getElementById("run").addEventListener("click", () => {
    let people = [
        {
            firstname: "Grenville",
            lastname: "Stive",
            age: 64,
        },
        {
            firstname: "Luis",
            lastname: "Jedrzejewsky",
            age: 73,
        },
        {
            firstname: "Teodor",
            lastname: "Warrington",
            age: 56,
        },
        {
            firstname: "Danya",
            lastname: "Bigby",
            age: 17,
        },
        {
            firstname: "Jemmy",
            lastname: "Goodbur",
            age: 87,
        },
        {
            firstname: "Vilhelmina",
            lastname: "Fost",
            age: 43,
        },
        {
            firstname: "Igor",
            lastname: "Putson",
            age: 45,
        },
        {
            firstname: "Klement",
            lastname: "Braybrook",
            age: 88,
        },
        {
            firstname: "Trefor",
            lastname: "Le Jean",
            age: 69,
        },
        {
            firstname: "Tarrah",
            lastname: "de Clerc",
            age: 77,
        },
        {
            firstname: "Brad",
            lastname: "Hookes",
            age: 82,
        },
        {
            firstname: "Kippar",
            lastname: "Fancet",
            age: 25,
        },
        {
            firstname: "Jecho",
            lastname: "Hawket",
            age: 87,
        },
        {
            firstname: "Lief",
            lastname: "Blazy",
            age: 80,
        },
        {
            firstname: "Jo-ann",
            lastname: "Sacase",
            age: 81,
        },
    ];

    // your code here
    function arrSum (array){
        return array.reduce(function(accumulator,data){ // method 'reduce" applies the treatment of the "function(a,b) = return a +b ;"
        // on the the 1st element of the array (used as accumulator) and each of the next values of the array
        // Once done, the value of the accumator is returned
        return accumulator + data
        }, 0); // with initial Value = 0
      }

      //console.log("age : " + people[1].age);
      arrayOfAges = [];
      people.forEach(el => {arrayOfAges.push(el.age)});
      
      //call function 'arrSum' with array 'arrayOfAges' as parameter
      console.log("sum of ages via function using reduce : " + arrSum(arrayOfAges));
      console.log("sum of ages via reduce on array: " + arrayOfAges.reduce((accumulator, age) =>( accumulator += age),0 ));
});