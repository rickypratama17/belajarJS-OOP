# Mini Project
## Brainy
Mini porject yang saya kerjakan ini terinspirasi dari brainly https://brainly.co.id . yang dimana web tersebut terdapat banyak fitur, fitur yang saya aplikasikan adalah Register, Login, Upload pertanyaan dan Menjawab pertanyaan dari user lain. Berikut adalah tampilan Register yang saya buat :
img
1. Register
Pada fitur Register ini terdapat inputan yang membutuhkan credential nama dan password
<img width="940" height="499" alt="image" src="https://github.com/user-attachments/assets/041e3fe1-4ce7-4e3b-a023-3132a9a49cad" />

3. Login
Pada fitur login ini, membutuhkan credential nama dan password, kemudian akan diredirect ke halaman utama
<img width="940" height="499" alt="image" src="https://github.com/user-attachments/assets/3a640344-a507-412a-acd1-78d7e6d5c83d" />

5. Input Pertanyaan
Pada page ini kita dapat menginputkan pertanyaan perihal matapelajaran, dalam contoh ini adalah pertanyaan mengenai matematika
<img width="940" height="499" alt="image" src="https://github.com/user-attachments/assets/109fdeed-0d7f-4d36-9877-31a0956b35d7" />


pada Mini Project kali ini terdapat 2 JS untuk menangani Mini Project kali ini, sebenarnya masih bisa digabungkan juga.
pada file Model.js digunakan untuk autentikasi signUp dan SignIn, pada file tersebut terdapa model User yang digunakan untuk penstrukturan data user
```
class User{
    #password
    constructor(id, name,password){
        this.id=id
        this._name=name
        this.#password=password
    }
    set password(newPassword){
        this.#password=newPassword
    }
    get password(){
        return this.#password
    }
    getData(){
        return {id: this.id ,name: this._name, password:this.#password}
    }
}
```
selain itu terdapat pendeklarasian variabel element html supaya terhubung ke js dan value dari element html tersebut dapat diinputkan ke storage
```
let formRegis = document.getElementById("formRegis")
let formLogin = document.getElementById("formLogin")
let nameSignUp = document.getElementById("nameSignUp")
let passwordSignUp =  document.getElementById("passwordSignUp")
let nameSignIn = document.getElementById("nameSignIn")
let passwordSignIn =  document.getElementById("passwordSignIn")
```

selain itu terdapat event listener semisal pada form tersebut terdapat even seperti button type submit diclick, kemudian akan lanjut ke function selanjutnya
```
if(formRegis){
    formRegis.addEventListener("submit",(e)=>{
        e.preventDefault()
        console.log(nameSignUp.value, passwordSignUp.value)
        brain.Register(nameSignUp.value, passwordSignUp.value)
    })
}

if(formLogin){
    formLogin.addEventListener("submit",(e)=>{
        e.preventDefault()
        console.log(nameSignIn.value, passwordSignIn.value)
        brain.login(nameSignIn.value, passwordSignIn.value)
    })
}
```
