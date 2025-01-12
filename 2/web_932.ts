function adminOnly(target: any, propertyName: string, descriptor: PropertyDescriptor){    
	let originalMethod = descriptor.value;
 	
	descriptor.value = function (...args: any[]) {
        const role = this.role
        if (role != "admin") {
            throw new Error("not admin");
        }
        return originalMethod.apply(this, args);
    };
}

function anyUser(target: any, propertyName: string, descriptor: PropertyDescriptor){    
	let originalMethod = descriptor.value;
 	
	descriptor.value = function (...args: any[]) {
        const role = this.role
        if (role.length == 0) {
            throw new Error("empty role");
        }
        return originalMethod.apply(this, args);
    };
}

class User{
	name: string
	role: string
	
	constructor(name = "Anon", role = "user"){
		this.name = name
		this.role = role
	}
	
	@adminOnly
	allmightyUser(): void{
		console.log("Я все могу")
	}
	
	@anyUser
	defUser(): void{
		console.log("Я не все могу")
	}

}

let ad = new User("Chel", "admin")
let anon = new User("Chel2", "user")

console.log(ad.allmightyUser())
console.log(anon.defUser())

console.log(anon.allmightyUser())
