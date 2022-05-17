// OOP Object oriented programming

const car = {
    color: 'red',
    model: 'corolla',
    maker: 'toyota',
    year: 2014,

    drive: function() {
        console.log(`you are driving ${this.maker}`)
    }
}

console.log(car.drive())


// classes, a class is a blueprint for creating objects 
// define what properties and methods they have 
// typically use a contructor for unique properties

class Player{
    score = 0


    pasue() {
        console.log('you paused the game')
    }

    exit() {
        console.log('game over')
    }
}

const player1 = new Player()

console.log(player1.score)

player1.score = 4

console.log(player1.score)


// constructor

class Student {
    constructor (name,age,gpa) {
        this.name = name
        this.age = age
        this.gpa = gpa
    }
    study() {
        console.log(`${this.name} has gpa ${this.gpa}`)
    }
}

const student1 = new Student('spongebob', 24, 3.4)

console.log(`${student1.name} is ${student1.age} years old and with gpa of ${student1.gpa}`)



// static = belongs to a class, not the objects
// properties: useful for caches, fixed configurations
// methods: useful for utility functions

class Truck {

    // thats the only variable can be used everywhere inside this class
    static numberOfTrucks = 0

    constructor (name,maker,year) {
        this.name = name
        this.maker = maker
        this.year = year
        Truck.numberOfTrucks +=1
    }
    study() {
        console.log(`${this.name} has gpa ${this.year}`)
    }
    // it belongs to class only, like Math.round
    static startRace(){
        console.log('3....2....2....go')
    }
}

const truck1 = new Truck('spongebob', 'toyota', 1990)
const truck3 = new Truck('spongebob', 'toyota', 1990)

console.log(Truck.numberOfTrucks)


// inheritance .... inherting properties and methods from parent class
// inheritance = a child class can inherit all the 
//                        methods and properties from another class

// class Animal{

//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{

//     name = "rabbit";

//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }
// class Fish extends Animal{

//     name = "fish";

//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }
// class Hawk extends Animal{

//     name = "hawk";

//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();



// super = Refers to the parent class. 
//               Commonly used to invoke constructor of a parent class

class Animal{
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);


