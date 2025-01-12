class Animal {
    constructor(food, location) {
        this.food = food;
        this.location = location;
    }
    makeNoise() {
        console.log("Какое-то животное издает звуки.");
    }
    eat() {
        console.log("Какое-то животное ест.");
    }
    sleep() {
        console.log("Какое-то животное спит.");
    }
}
class Cat extends Animal {
    constructor(food, location, lives) {
        super(food, location);
        this.lives = lives;
        this.lives = lives;
    }
    makeNoise() {
        console.log("Кот мяукает.");
    }
    eat() {
        console.log("Кот ест.");
    }
    sleep() {
        console.log("Кот спит");
    }
}
class Dog extends Animal {
    constructor(food, location, bone) {
        super(food, location);
        this.bone = bone;
        this.bone = bone;
    }
    makeNoise() {
        console.log("Собака лает.");
    }
    eat() {
        console.log("Собака ест.");
    }
    sleep() {
        console.log("Собака спит");
    }
}
class Horse extends Animal {
    constructor(food, location, griva) {
        super(food, location);
        this.griva = griva;
        this.griva = griva;
    }
    makeNoise() {
        console.log("Лошадь ржет.");
    }
    eat() {
        console.log("Лошадь ест.");
    }
    sleep() {
        console.log("Лошадь спит");
    }
}
class Veterinar {
    treatAnimal(animal) {
        console.log(animal.location);
        console.log(animal.food);
    }
}
let cat = new Cat("Рыба", "Ул. Cадовая", 7);
let dog = new Dog("Кость", "Будка", 12);
let poni = new Horse("Трава", "Луг", "Длинная");
let animals = [cat, dog, poni];
let vet = new Veterinar();
for (let i of animals) {
    vet.treatAnimal(i);
}
