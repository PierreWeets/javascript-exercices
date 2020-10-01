// 07-classes/01-instances/script.js - 7.1: instances
document.getElementById("run").addEventListener("click", () => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here

    let cat1 = new Cat("Skitty", 9);
    let cat2 = new Cat("Pixel", 6);

    console.log(`1st cat'name is ${cat1.name} and is ${cat1.age} years old`);
    console.log(`2nd cat'name is ${cat2.name} and is ${cat2.age} years old`);
    
});
