// 07-classes/04-getter-setter/script.js - 7.4: getter & setter

document.getElementById("run").addEventListener("click", () => {
    // your code here
    class Person {
        constructor(firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        };

        get name(){
            return (`${this.firstname} ${this.lastname}`);
        }

        set name(fullName) {
            let stringArray= fullName.split(" ");
            this.firstname = stringArray[0];
            this.lastname = stringArray[1];
          }
    }

    let person1 = new Person("Pierre", "Weets");
    console.log(person1.name);
    person1.name = "Paul Dupont";
    console.log(person1.name);
});