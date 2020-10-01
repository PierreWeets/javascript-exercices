//07-classes/02-methods/script.js - 7.2: methods

document.getElementById("run").addEventListener("click", () => {
    // your code here
    class Person {
        constructor(fistname, lastname){
            this.fistname = fistname;
            this.lastname = lastname;
        };

        sayHello(){
            console.log(`Hello, ${this.fistname} ${this.lastname}`);
        };
    }

    let person1 = new Person("Pierre", "Weets");
    person1.sayHello();
});
