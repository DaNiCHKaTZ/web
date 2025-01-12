function IsInteger(target: any, propertyKey: string): any {
    let value: number;

    const getter = () => value;
    const setter = (newValue: number) => {
        if (!Number.isInteger(newValue)) {
            throw new Error("Значение должно быть целым числом.");
        }
        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

function NonNegative(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if (this.value < 0) {
            throw new Error("Нельзя извлекать корень из отрицательного числа.");
        }
        return originalMethod.apply(this, args);
    };
}

class Integer {
    @IsInteger
    public value: number;

    constructor(value: number) {
        this.value = value;
    }

    @NonNegative
    public sqrt(): number {
        return Math.sqrt(this.value);
    }
}


try {
    let int = new Integer(16);
    console.log(`Корень из ${int.value} = ${int.sqrt()}`);

    let negativeInt = new Integer(-4);
    console.log(`Корень из ${negativeInt.value} = ${negativeInt.sqrt()}`);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}

try {
    let notAnInt = new Integer(3.14);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } 
    
}
