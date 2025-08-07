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

const us = new User("Ricky","123")
console.log(us._name)
console.log(us.password)

class Brainly{

    data = []
    nextId =1

    Register( name, password){
        const id = this.nextId++
        const user = new User(id ,name,password)
        console.log("met Reg",user)

        console.log("INI GET DATA",user.getData())

        this.data.push(user.getData())
        console.log("ini this data",this.data)

        try{
            let saved = JSON.parse(localStorage.getItem("user")) || []
            
            saved.push(user.getData())
            localStorage.setItem("user",JSON.stringify(saved))
            console.log(saved)
            window.location.href = `index.html?id=${user.id}`
        }catch(e){
            console.log(e)
        }
    }
    login(name, password){
        let auth = JSON.parse(localStorage.getItem("user")) || []
        console.log(auth)
        let found = auth.find((item)=>{
            return (item.name === name) && (item.password === password)
        })
        console.log(found)
        if(!found){
            console.log("salah")
        }else{
            localStorage.setItem("authUser", JSON.stringify(found))
            console.log("Login berhasil:", found)
            window.location.href = `index.html?id=${found.id}`
        }
    }

}
const brain = new Brainly()
let formRegis = document.getElementById("formRegis")
let formLogin = document.getElementById("formLogin")
let nameSignUp = document.getElementById("nameSignUp")
let passwordSignUp =  document.getElementById("passwordSignUp")
let nameSignIn = document.getElementById("nameSignIn")
let passwordSignIn =  document.getElementById("passwordSignIn")

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


