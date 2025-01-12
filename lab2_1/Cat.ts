class Cat extends Animal {
    constructor(food: string, location: string, private lives: number) {
        super(food, location);
        this.lives = lives;
    }

    makeNoise(): void {
        console.log("Кот мяукает.");
    }

    eat(): void {
        console.log("Кот ест.");
    }

    sleep(): void {
        console.log("Кот спит")
    }
}