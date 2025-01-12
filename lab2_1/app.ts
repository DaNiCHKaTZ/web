let cat = new Cat("Рыба", "Ул. Cадовая",7);
let dog = new Dog("Кость", "Будка", 12);
let poni = new Horse("Трава", "Луг", "Длинная");
let animals:  Animal[] = [cat, dog, poni];
let vet = new Veterinar();
for (let i of animals){
 vet.treatAnimal(i);
}