var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
function adminOnly(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.role !== 'admin') {
            throw new Error('not admin');
        }
        return originalMethod.apply(this, args);
    };
}
function anyUser(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.role || this.role.length === 0) {
            throw new Error('empty role');
        }
        return originalMethod.apply(this, args);
    };
}
var User = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _allmightyUser_decorators;
    var _defUser_decorators;
    return _a = /** @class */ (function () {
            function User(name, role) {
                if (name === void 0) { name = 'Anon'; }
                if (role === void 0) { role = 'user'; }
                this.name = __runInitializers(this, _instanceExtraInitializers);
                this.name = name;
                this.role = role;
            }
            User.prototype.allmightyUser = function () {
                console.log('Я все могу');
            };
            User.prototype.defUser = function () {
                console.log('Я не все могу');
            };
            return User;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _allmightyUser_decorators = [adminOnly];
            _defUser_decorators = [anyUser];
            __esDecorate(_a, null, _allmightyUser_decorators, { kind: "method", name: "allmightyUser", static: false, private: false, access: { has: function (obj) { return "allmightyUser" in obj; }, get: function (obj) { return obj.allmightyUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _defUser_decorators, { kind: "method", name: "defUser", static: false, private: false, access: { has: function (obj) { return "defUser" in obj; }, get: function (obj) { return obj.defUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var ad = new User('Chel', 'admin');
var anon = new User('Chel2', 'user');
console.log(ad.allmightyUser());
console.log(anon.defUser());
try {
    console.log(anon.allmightyUser());
}
catch (e) {
    console.error(e.message);
}
