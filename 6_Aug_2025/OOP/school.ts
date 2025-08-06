class Person{
    _name:string
    role:string
    age?: number
    constructor(name: string, role : string){
        this._name=name
        this.role=role
    }
    get name():string {
        if(this._name){
            return this.name
        }else{
            return "Name is empty"
        }
    }
    set name(value : string){
        if(value !== ""){
            this._name = value
        }
    }
    
    introduceSelf(name:string){
        console.info(`Hello ${name}, my name is ${this._name}`)
    }
}
class Teacher extends Person{
    
}
let p = new Person("","Admin")
console.log(p.name)
p.introduceSelf("mamat")

interface Hasname{
    name: string
}
interface CanSayHello{
    sayHello(name:string): void
}
class Persons implements Hasname, CanSayHello{
    name: string

    constructor(name:string){
        this.name=name
    }

    sayHello(name: string): void {
        console.log(`Helo ${name}, my name is ${this.name}`)
    }
}
let pers = new Persons("")
console.log(pers.name)
pers.sayHello("Yogi")