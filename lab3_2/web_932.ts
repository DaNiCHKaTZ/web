function adminOnly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if (this.role !== 'admin') {
            throw new Error('not admin');
        }
        return originalMethod.apply(this, args);
    };
}

function anyUser(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if (!this.role || this.role.length === 0) {
            throw new Error('empty role');
        }
        return originalMethod.apply(this, args);
    };
}

class User {
    name: string;
    role: string;

    constructor(name = 'Anon', role = 'user') {
        this.name = name;
        this.role = role;
    }

    @adminOnly
    allmightyUser(): void {
        console.log('Я все могу');
    }

    @anyUser
    defUser(): void {
        console.log('Я не все могу');
    }
}

const ad = new User('Chel', 'admin');
const anon = new User('Chel2', 'user');

console.log(ad.allmightyUser());
console.log(anon.defUser()); 

try {
    console.log(anon.allmightyUser());
} catch (e) {
    console.error(e.message);
}
