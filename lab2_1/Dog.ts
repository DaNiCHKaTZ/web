 class Dog extends Animal {
    constructor(food: string, location: string,private bone: number) {
        super(food, location);
        this.bone = bone;
    }

    makeNoise(): void {
        console.log("Собака лает.");
    }

    eat(): void {
        console.log("Собака ест.");
    }

    sleep(): void {
        console.log("Собака спит")
    }
}