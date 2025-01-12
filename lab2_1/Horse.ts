class Horse  extends Animal {
    constructor(food: string, location: string, private griva: string) {
        super(food, location);
        this.griva = griva;
    }

    makeNoise(): void {
        console.log("Лошадь ржет.");
    }

    eat(): void {
        console.log("Лошадь ест.");
    }

    sleep(): void {
        console.log("Лошадь спит")
    }
}