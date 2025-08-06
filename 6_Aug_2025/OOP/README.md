TAMBAHAN PEMBELAJARAN OOP
-	Class digunakan untuk membuat objek, class berisikan deklarasi semua properties dan function yang dimiliki oleh object
-	Properti/atribut yang memiliki tandatanya(?) boleh tidak diisi, jika diimplementasikan ke code menjadi 
```
class Person{
	readonly id: number
	name: string
	age?: number
	
	constructor(id: number, name: string){
		this.id= id
		this.name=name
	}
}
```
Karena properti/attribute yang diconstructor . didalam constructor ditambahkan parameter supaya bisa dikirim dari luar ketika pembuatan object
-	Method adalah function didalam class, jika diimplementasikan pada code yakni
```
class Person{
	name: string
	role: string
	age?: number
	constructor(name: string, role: string){
		this.name=name
		this.role=role
}
introduceSelf(name:string){
	console.log(`Hello ${name}, my name is ${this.name}`)
}
}
```
-	Setter/Getter juga bisa buat validasi input dengan cara diberikan if else pada setter/getter tersebut. Jika diimplementasikan di code menjadi
```
class Person{
	_name: string
	role: string
	age?: number
	constructor(name: string, role: string){
		this._name=name
		this.role=role
}
get name(): string{
	if(this._name){
		return this._name
}else{
	Return “empty”
}
}
set name(value: string){
if(value!==””){
	this._name = value
}
}
introduceSelf(name:string){
	console.log(`Hello ${name}, my name is ${this.name}`)
}
}
```
-	Inheritance bertumpuk
Inheritance tidak hanya 1 relasi seperti parent dan childnya, tetapi child tersebut juga bisa parent. Misalnya kalau diimplementasikan dicode menjadi:
```
class Employee{
	name : string;
	
	constructor(name: string){
		this.name = name
}
}

class Manager extends Employee{
}
class Director extends Manager{
}
const employee = new Employee(“Mamat”)
console.log(employee.name)

const manager = new Manager(“Yoga”)
console.log(manager.name)

const director = new Director(“Devit”)
console.log(director.name)
```
-	Inheritance pada interface
Kita bisa membuat class yang mengikuti kontrak sebuah interface dengan cara menggunakan implements, jadi kalau diimplementasikan ke code menjadi:
```
Interface Hasname{
	name: string
}
Interface CanSayHello{
	sayHello(name:string): void
}
class Persons implement Hasname, CanSayHello{
	name: string
	constructor(){
	this.name=name
}

sayHello(name: string): void{
	console.log(`Hello ${name}, my name is ${this.name})
}
}
let pers = new Persons(“”)
console.log(pers.name)
pers.sayHello(“Yogi”)
```


 
## Perbedaan OOP JS dengan Typescript
1.	Penulisan Class
Pada JS penulisan objek bisa langsung ke constructor tanpa atribut seperti
```
class Person{
constructor(name,role){
        		this.name=name
        		this.role=role
}
}
```
Tetapi pada TypeScript property tersebut harus didefinisikan terlebih dahulu type datanya apa seperti name: string, jika diimplementasikan kecode menjadi
```
class Person{
    name:string
    role:string
    constructor(name,role){
        this.name=name
        this.role=role
    }
}
```

Referensi : 
1.	https://www.youtube.com/watch?v=KwfRFkHAlVo
2.	https://www.freecodecamp.org/news/learn-object-oriented-programming-in-typescript/ 
