// 07-classes/03-inheritance/script.js - 7.3: inheritance
document.getElementById("run").addEventListener("click", () => {
    
    class Animal {
        constructor(name) {
            this.name = name;
        }

        sayHello() {
            // ${this.constructor.greeting} refers to the static variable 'greeting' in the inherited class
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
   
    class Cat extends Animal {
        static greeting = "meeow"; 
    }

    class Dog extends Animal {
        static greeting = "warf"; 
    }

    let dog = new Dog("Bill");
    let cat = new Cat("Pussy");

    console.log(dog.sayHello());
    console.log(cat.sayHello());

});
