 # 3 Konsep utama OOP: 
1.	classes and instances
2.	inheritance
3.	and encapsulation.

# **Classes and instances**
Pada studi kasus sekolahan, terdapat representasi dalam sekolahan tersebut yakni professor
Setiap Profesor memiliki atrubut umum yakni :
-	mereka semua memiliki nama dan matapelajaran yang mereka ajarkan
setiap profesor dapat melakukan hal-hal tertentu yakni:
-	mereka(profesor) dapat menilai semua makalah dan mereka dapat memperkenalkan dirinya ke murid-muridnya diawal tahun
Dua hal tersebut yang harus ada pada data dan metode yang dimiliki profesor tersebut
Contoh penulisan Class Professor dalam Pseudocode:
Class Professor
	properties
		name
		teach
	method
		grade(paper)
		introdceself()

## Perbedaan method dan function, constructor
-	constructor adalah pendefinisian class dan biasanya nama constructor sama dengan nama class tersebut
-	Method adalah fungsi yang terkait dengan objek tertentu, hal yang bisa dijalankan class tersebut
-	Function adalah blok kode yang dapat digunakan untuk melakukan tugas tertentu.
Contoh pseudocode Class Professor:
Class Professor
properties
name
teaches
constructor
Professor(name, teaches)
    	methods
        		grade(paper)
        		introduceSelf()

# Inheritance
Masih dalam studi case sekolah, kita juga bisa merepresentasikan student. Berbeda dengan professor, student tidak bisa menilai makalah(paper). Contoh pseudocode class student yakni
```
class Student
  properties
    name
    year
  constructor
    Student(name, year)
    methods
  introduceSelf()
```
akan lebih membantu apabila pada professor dan student berbagi properties/data yang sama pada 
jika dianalisa, terdapat persamaan pada professor dan student yakni pada properties : 
- nama
- constructor : student/professor(name)
- methods: introduceSelf().
Jadi kalau misalkan ditulis secara kesamaan
```
Class Person
  Properties
    Name
  Constructor
    Person(name)
  Methods
    introduceSelf()
```
jadi Class Person tersebut menjadi pusat atau bisa disebut superclass/parentclass dari inheritance atau turunan yang akan dilakukan pada SubClass Class Professor dan Class Student
```
Class Person
  Properties
    Name
  Constructor
    Person(name)
  Methods
    introduceSelf()
```
```
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
```
## Encapsulation
Internal objek dijaga kerahasiaanya yang membuat objek tersebut hanya bisa diakses oleh metode milik objek itu sendiri, 
dalam praktek ini saya mengimplementasikan pada password yang saya tambahkan pada Class Professor. 
```
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
```
Dari implementasi code diatas, dapat kita buat data static dengan cara 
```
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
```
## POLYMORPHISM
-	Method Overriding
  menulis ulang method yang sudah didefinisikan seperti pada Class Professor dan Class Student
```
  introduce(){
        console.log('Nama saya adalah '+this.name)
    }
```
kemudian akan mengeluarkan hasil yakni
<img width="1860" height="959" alt="image" src="https://github.com/user-attachments/assets/2cc6661c-181e-405a-a6aa-801d54844be7" />

REFERENCE : 
1. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming
2. https://www.geeksforgeeks.org/javascript/polymorphism-in-javascript/
3. https://www.w3schools.com/js/js_class_inheritance.asp
4. https://www.youtube.com/watch?v=CAFThg6XE-8
5. https://codesandbox.io/p/sandbox/javascript-inheritance-getter-setter-sfy2g
