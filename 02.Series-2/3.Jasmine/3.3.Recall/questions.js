let selectElementsStartingWithA = (array) => {
    return array.filter(el => el.toLowerCase().substr(0,1) === 'a');
    //return array.filter(el => RegExp(/^[a].*/i).test(el));
}

let selectElementsStartingWithVowel = (array) => {
    // ^ = beginning of the string
    // [aeiouy] = match any character inside brackets
    // .*      = match any amount of characters after [Greedy]
    // i       = case-insensitive
    return array.filter(el => RegExp(/^[aeiouy].*/i).test(el));
}

let removeNullElements = (array) => {
    return  array.filter(el => el !== null );
}

let removeNullAndFalseElements = (array) => {
    return array.filter(el => el !== null && el !== false );
}

let reverseWordsInArray = (array) => {
    let invertedString = "";
    let letterArray = [];
    for(i=0 ; i < array.length; i++){
        letterArray = Array.from(array[i]);
        for(j=(letterArray.length-1); j>=0;j-- ){
            invertedString += letterArray[j];
        }
        array[i]=invertedString;
        invertedString = "";
    }
    return array;
}

let everyPossiblePair = (array) => {
    array.sort();
    let coupleArray = [];
    for(i=0, counter = 0 ; i < array.length; i++){
        for(j=i+1; j< array.length;j++ ){
            coupleArray[counter] = [array[i], array[j]];
            counter++;
        }
    }
    return coupleArray;
}

let allElementsExceptFirstThree = (array) => {
    array.shift();
    array.shift();
    array.shift();
    return array;
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort(function(a, b) {
        //sort 2 elements on the value of their last character : If the value of the last caractère is higher than these of the next element
        //then intervert them , 
        if (a[a.length - 1] > b[b.length - 1])
            return 1;
            //If the value of the last caractère is lower than these of the next element
        //then no intervert 
        else if (a[a.length - 1] < b[b.length - 1])
            return -1;
        return 0;
    });
}

let getFirstHalf = (string) => {
    //return from the 1st letter (index=0) with a length = rounded half-length of the string
    return string.substr(0,Math.round(string.length/2));
}

let makeNegative = (number) => {
    return (number > 0) ? number*-1 : number;
}

let numberOfPalindromes = (array) => {
	let wordsArray = Array.from(array);
    let invertedWordsArray = reverseWordsInArray(array);
    for(i=0; i<invertedWordsArray.length;i++){
        if (invertedWordsArray[i] !== wordsArray[i]) 
        { invertedWordsArray[i]=null;
        }
       palindromsArray = removeNullElements(invertedWordsArray)
    }
    return palindromsArray.length;
}

let shortestWord = (array) => {
    return array.reduce( (firstWord, nextWord) => {
        if (nextWord.length < firstWord.length) firstWord = nextWord;
        return firstWord;//needed ,to be re-used, for the next iteration on the array. Otherwise , firstWord is undefined
    });
}

let longestWord = (array) => {
    return array.reduce( (firstWord, nextWord) => {
        if (nextWord.length > firstWord.length) firstWord = nextWord;
        return firstWord;//needed ,to be re-used, for the next iteration on the array. Otherwise , firstWord is undefined
    });
}

let sumNumbers = (array) => {
    return array.reduce((acc, num) => {acc += num ; return acc} );
}

let repeatElements = (array) => {
    return array.concat(array);
}

let stringToNumber = (string) => {
    return Number(string);
}

let calculateAverage = (array) => {
    return array.reduce((acc, num) => {acc += num ; return acc})/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
	let reduced = array.reduce(function(accumulator, value, index){
        //console.log(`accumulator: ${accumulator} , value : ${value}  ,  index :  ${index} `)
        if(index <= 5) accumulator.push(array[index]); // method 'push' : adds the current value (with index <= 5), into the accumulator
        return accumulator;
    }, []); // [] means that the returned value 'reduced' is an array
    return reduced;
}

let convertArrayToObject = (array) => {
    let string = "{";
    for(i=0;i<array.length; i+=2){
        string +=`"${array[i]}":"${array[i+1]}",`
    }
    string = string.substr(0, string.length-1);
    string += "}";
    return JSON.parse(string);
}	

let getAllLetters = (array) => {
    let allLettersArray = [];
    array.forEach(el => {
        //concatenate the letters of all the words
        allLettersArray = allLettersArray.concat(Array.from(el));
    })
    allLettersArray.sort();//sort all the letters, with ascending direction
    //console.log("allLettersArray=" + allLettersArray)
		
    return Array.from(new Set(allLettersArray));//return a array from a SET object = contains only once a same value
}

let swapKeysAndValues = (object) => {
	let string = "{";
	for (let key in object) {
      string +=`"${object[key]}":"${key}",`;
		}

    string = string.substr(0, string.length-1);//remove the last character of the string
    string += "}";
    //console.log(string);
    return JSON.parse(string);//sent a JSON object from the string
}

let sumKeysAndValues = (object) => {
    let sum = 0;
    for (let key in object) {
        sum += Number(key) + Number(object[key]);//object contains key = string => transform all keys into numeric
    }
    return sum;
}

let removeCapitals = (string) => {
    return string.replace(/([A-Z])*/g, ""); //change all the capital letters by nothing
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let dateString = (date.getDate() < 10) ?  "0" + date.getDate().toString(): date.getDate().toString();
    dateString += "/" ;
    dateString += (date.getMonth() < 10) ?  "0" + (date.getMonth()+1).toString(): date.getMonth().toString();
    dateString += "/" ;
    dateString += date.getFullYear().toString();
    return dateString;
}

let getDomainName = (string) => {
    //return all the characters after the "@" and before the last "."
    return string.substr(string.indexOf("@")+1, string.lastIndexOf(".")- string.indexOf("@")-1);
}

let titleize = (string) => {
    let substringsArray = string.split("."); //split string into substrings
    let wordsArray = [];
    let responseString ="";
    //for each substring
    for(i=0; i < substringsArray.length; i++){
        //extract the words of the substring
        wordsArray = substringsArray[i].trim().split(" ");//split substring into words 
        //for each word in the substring
        for(j=0; j< wordsArray.length; j++){
            //for 1st word and words <> 'or', 'and' 'the'
            //console.log(`wordsArray[${j}]:` + wordsArray[j] );
          	if(j===0 || (wordsArray[j] !== "or" && wordsArray[j] !== "and" & wordsArray[j] !== "the")) wordsArray[j] = wordsArray[j].substr(0,1).toUpperCase() + wordsArray[j].slice(1);
            
             if (j < wordsArray.length-1){
                responseString += wordsArray[j] + " " ; //add a " " after all the words except the last one
            } else {
                responseString += wordsArray[j] + "." ; //add a "." after the last word
            }
        }
        responseString += " ";// add a blank at the end of the substring
    }
    responseString = responseString.trim().substr(0,responseString.length-2); //removes start & end blanks, £And remove the 2 last character 
    return responseString;
}

let checkForSpecialCharacters = (string) => {
    return (/[^A-Za-z0-9]/g).test(string);//RegEx : each character that is not a letter (lower & uppercases) or digit
}
let squareRoot = (number) => {
    return Math.sqrt(number);
};

let factorial = (number) => {
    if (number > 0){
        return (number * factorial(number-1));
    } else {
        return 1;
    }
}
let findAnagrams = (string) => {
    let anagramsArray =[];
    let anagram = "";
    for(i=0;i<string.length;i++){
    	console.log("i:"+i);
        anagram += string.substr(i,1);
        console.log("anagram 1st letter :" + anagram);
        subString=string.substr(0,i) + string.substr(i+1);
        console.log("subString:"+subString);
        for(j=0;j<subString.length;j++){
        		console.log("j:"+j);
        	  console.log(`subString.substr(${j},1):`+subString.substr(j,1));
            anagram += subString.substr(j,1);
            console.log("anagram:"+anagram);
           	if(anagram.length == string.length)	anagramsArray.push(anagram);
        }
        anagram="";
    }
    console.log("anagramsArray:"+anagramsArray);
    return anagramsArray;
}

let convertToCelsius = (number) => {
    return Math.round((number-32)*5/9);
}

let letterPosition = (array) => {
    let resultArray = [];
    
    for(i=0; i< array.length;i++){
        //test if character is lower case
        if ( array[i] ==  array[i].toLowerCase()){
            resultArray[i]=array[i].charCodeAt(0)-96;
        }
        else{ //consider as a uppercase
            resultArray[i]=array[i].charCodeAt(0)-64;
        }
    }
    return resultArray;
}