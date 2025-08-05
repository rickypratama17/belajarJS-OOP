class Person {
    constructor(name){
        this.name=name
        // console.log('Pesan dalam constructor Person '+this._name)
    }
    get name(){
        return this._name    
    }
    set name(newName){
        this._name = newName
    }
    life(){
        console.log(this.name+' is life')
    }
}

class Professor extends Person{
    #password
    constructor(name, teaches, password){
        super(name)
        this._teaches=teaches
        this.#password = password
        // console.log('Pesan ini dari constructor Professor, Professor ini memiliki nama ',this.name)
    }
    get teaches(){
        return this._teaches
    }
    set teaches(newTeaches){
        this._teaches = newTeaches
    }
    get password(){
        return this.#password
    }
    teaching(){
        console.log('Pak '+this.name + ' sedang mengajar ' + this._teaches)
    }
    introduce(){
        console.log('Nama saya adalah '+this.name)
    }
}

class Student extends Person{
    constructor(name, year){
        super(name)
        this.year = year
    }

    get year (){
        return this._year
    }
    set year(newYear){
        this._year = newYear
    }

    studying(){
        console.log(this.name+' masuk kampus pada tahun ' + this.year)
    }
    introduce(){
        console.log('Nama saya adalah '+this.name)
    }
}




const pers = new Person('Randy')
pers.life()
const prof = new Professor('Adib','Logika Matematika','123')
prof.teaching()
const student = new Student('Dandy','2022')
student.studying()

console.log(pers.name)
console.log(prof.name)
console.log(prof.teaches)
console.log(student.name)
console.log(student.year)
console.log(prof.password)

prof.introduce()
student.introduce()

console.log(prof.name+' sedang mengajar '+student.name + ' mata kuliah ' + prof.teaches)