class Animal {
    constructor(public food: string, public location: string) {}

    makeNoise(): void {
        console.log("Какое-то животное издает звуки.");
    }

    eat(): void {
        console.log("Какое-то животное ест.");
    }

    sleep(): void {
        console.log("Какое-то животное спит.");
    }
}