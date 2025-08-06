var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, role) {
        this._name = name;
        this.role = role;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            if (this._name) {
                return this.name;
            }
            else {
                return "Name is empty";
            }
        },
        set: function (value) {
            if (value !== "") {
                this._name = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.introduceSelf = function (name) {
        console.info("Hello ".concat(name, ", my name is ").concat(this._name));
    };
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(Person));
var p = new Person("", "Admin");
console.log(p.name);
p.introduceSelf("mamat");
var Persons = /** @class */ (function () {
    function Persons(name) {
        this.name = name;
    }
    Persons.prototype.sayHello = function (name) {
        console.log("Helo ".concat(name, ", my name is ").concat(this.name));
    };
    return Persons;
}());
var pers = new Persons("");
console.log(pers.name);
pers.sayHello("Yogi");
