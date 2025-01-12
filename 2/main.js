var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function adminOnly(target, propertyName, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const role = this.role;
        if (role != "admin") {
            throw new Error("not admin");
        }
        return originalMethod.apply(this, args);
    };
}
function anyUser(target, propertyName, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const role = this.role;
        if (role.length == 0) {
            throw new Error("empty role");
        }
        return originalMethod.apply(this, args);
    };
}
class User {
    constructor(name = "Anon", role = "user") {
        this.name = name;
        this.role = role;
    }
    allmightyUser() {
        console.log("Я все могу");
    }
    defUser() {
        console.log("Я не все могу");
    }
}
__decorate([
    adminOnly
], User.prototype, "allmightyUser", null);
__decorate([
    anyUser
], User.prototype, "defUser", null);
let ad = new User("Chel", "admin");
let anon = new User("Chel2", "user");
console.log(ad.allmightyUser());
console.log(anon.defUser());
console.log(anon.allmightyUser());
