"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function IsInteger(target, propertyKey) {
    let value;
    const getter = () => value;
    const setter = (newValue) => {
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
function NonNegative(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        if (this.value < 0) {
            throw new Error("Нельзя извлекать корень из отрицательного числа.");
        }
        return originalMethod.apply(this, args);
    };
}
class Integer {
    constructor(value) {
        this.value = value;
    }
    sqrt() {
        return Math.sqrt(this.value);
    }
}
__decorate([
    IsInteger
], Integer.prototype, "value", void 0);
__decorate([
    NonNegative
], Integer.prototype, "sqrt", null);
try {
    let int = new Integer(16);
    console.log(`Корень из ${int.value} = ${int.sqrt()}`);
    let negativeInt = new Integer(-4);
    console.log(`Корень из ${negativeInt.value} = ${negativeInt.sqrt()}`);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
try {
    let notAnInt = new Integer(3.14);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
