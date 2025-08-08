import User, { Question, Discusion } from "./Model.js"

class Auth {
    data = []

    constructor() {
        this.nextId = parseInt(localStorage.getItem("nextId")) || 1
    }

    saveNextId() {
        localStorage.setItem("nextId", this.nextId)
    }

    Register(name, password) {
        const id = this.nextId++
        this.saveNextId()

        const user = new User(id, name, password)
        console.log("met Reg", user)
        console.log("INI GET DATA", user.getData())

        this.data.push(user.getData())
        console.log("ini this data", this.data)

        try {
            let saved = JSON.parse(localStorage.getItem("user")) || []
            saved.push(user.getData())
            localStorage.setItem("user", JSON.stringify(saved))
            console.log(saved)
            window.location.href = `index.html?id=${user.id}`
        } catch (e) {
            console.log(e)
        }
    }

    login(name, password) {
        let auth = JSON.parse(localStorage.getItem("user")) || []
        console.log(auth)
        let found = auth.find((item) => {
            return item.name === name && item.password === password
        })
        console.log(found)
        if (!found) {
            console.log("salah")
        } else {
            localStorage.setItem("authUser", JSON.stringify(found))
            console.log("Login berhasil:", found)
            window.location.href = `index.html?id=${found.id}`
        }
    }
}

// Mengambil id dari URL
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")
console.log("ID dari URL:", id)

class Brainy {
    data = []

    constructor() {
        this.data = []
        this.nextQuestId = parseInt(localStorage.getItem("nextQuestId")) || 1
        this.nextReplyQuestId = parseInt(localStorage.getItem("nextReplyQuestId")) || 1
    }

    saveNextQuestId() {
        localStorage.setItem("nextQuestId", this.nextQuestId)
    }
    saveNextReplyQuestId() {
        localStorage.setItem("nextReplyQuestId", this.nextReplyQuestId)
    }

    addQuest(newMessage, newCourse, userId) {
        const id = this.nextQuestId++

        this.saveNextQuestId()

        const quest = new Question(id, newMessage, newCourse, userId)
        console.log("met Reg", quest)

        this.data.push(quest)
        console.log("this.data", this.data)

        let saved = JSON.parse(localStorage.getItem("quest")) || []
        saved.push(quest)
        localStorage.setItem("quest", JSON.stringify(saved))

        this.createPosts()
    }

    replyQuest(newMessage, newCourse, userId, referenceId) {
        const id = this.nextReplyQuestId++
        this.saveNextReplyQuestId()

        const discus = new Discusion(id, newMessage, newCourse, userId, referenceId)
        console.log("reply quest", discus)

        this.data.push(discus)
        console.log("this.data", this.data)

        let saved = JSON.parse(localStorage.getItem("discus")) || []
        saved.push(discus)
        localStorage.setItem("discus", JSON.stringify(saved))

        this.createPosts()
    }

    createPosts() {
        let listQuest = JSON.parse(localStorage.getItem("quest")) || []
        let from = JSON.parse(localStorage.getItem("user")) || []
        let listDiscus = JSON.parse(localStorage.getItem("discus"))

        console.log("Data dari localStorage (user):", from)
        console.log("Data dari localStorage (quest):", listQuest)

        
        posts.innerHTML = ``

        listQuest.forEach((quest, index) => {
            console.log(quest.message)
            console.log(quest.userId)
            const user = from.find(u => u.id === parseInt(quest.userId))
            console.log('user',user)

            posts.innerHTML += `
            <div class="flex flex-col items-start m-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <h5 class="mb-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    from: ${user.name}
                </h5>
                <p>Pertanyaan :</p>
                <p class="bg-gray-200 rounded-sm w-full p-2">${quest.message}</p>
                <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                    <div class="mt-px">${quest.course}</div>
                </div>
                <div>
                    <button id="" onclick="replyTag(${quest.id})" class="bg-gray-200 p-2 rounded-lg">Jawab</button>
                    <button onclick="deleteQuest(${quest.id})" class="bg-red-400 p-2 rounded-lg">Delete</button>
                </div>
            </div>

            `
        })
    }
// deleteQuest(${quest.id})
    showLogin() {
        const authId = parseInt(id) 
        const users = JSON.parse(localStorage.getItem("user")) || []

        const foundUser = users.find(u => u.id === authId)

        prof.innerHTML = ``

        if (foundUser) {
            prof.innerHTML = `
                <div class="relative w-[300px] flex flex-col m-1 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-4">
                    <h5 class="mb-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        ${foundUser.name}
                    </h5>
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        ID: ${foundUser.id}
                    </p>
                    <button onclick="logOut()" class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40">
                        Log Out
                    </button>
                </div>
            `
        } else {
            prof.innerHTML = `<p class="text-red-500">User tidak ditemukan</p>`
        }
    }

    replyTag(idQuest){
        const tagData = JSON.parse(localStorage.getItem("quest"))
        const specData = tagData.find(t => t.id === idQuest)
        course.value = specData.course
        console.log(specData)

        if(specData){
            tag.innerHTML = `
                <div class="justify-between relative inline-flex w-[250px] items-center border font-sans font-medium rounded-md text-sm p-0.5 shadow-sm bg-stone-500 border-stone-500 text-stone-50">
                    <span id="tag-message" class="font-sans text-current leading-none my-1 mx-2.5 tag-message" style="max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                        ${specData.message}
                    </span>
                    <button onClick="cancleTag(event)" class="grid place-items-center shrink-0 rounded-full p-px -translate-x-1 ms-1 w-5 h-5 stroke-2">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-full w-full">
                        <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </button>
                </div>
            `
        }
    }
}

function cancleTag(event){
    if(event) event.preventDefault();
    tag.innerHTML = "";
}
window.cancleTag = cancleTag

function deleteQuest(idQuest){

    console.log(idQuest)

    let saved = JSON.parse(localStorage.getItem("quest"))
    let delQuest = saved.filter(q => q.id !== idQuest)
    localStorage.setItem("quest", JSON.stringify(delQuest))

    const brain = new Brainy()
    brain.createPosts() 
}
window.deleteQuest=deleteQuest

function replyTag(idQuest){
    console.log(idQuest)
    const brain = new Brainy()
    window.currentReplyId = idQuest
    brain.replyTag(idQuest)
}
window.replyTag = replyTag

let formQuest = document.getElementById("formQuestion")
let message = document.getElementById("message")
let course = document.getElementById("course")
let posts = document.getElementById("posts")
let prof = document.getElementById("profile")
let formRegis = document.getElementById("formRegis")
let formLogin = document.getElementById("formLogin")
let nameSignUp = document.getElementById("nameSignUp")
let passwordSignUp =  document.getElementById("passwordSignUp")
let nameSignIn = document.getElementById("nameSignIn")
let passwordSignIn =  document.getElementById("passwordSignIn")
let tag = document.getElementById("tag")
let authMod = new Auth()



if(formQuest){
    formQuest.addEventListener("submit", (e) => {
        e.preventDefault()
        const brain = new Brainy()
        const urlParams = new URLSearchParams(window.location.search)
        const userId = urlParams.get("id")
        if(tag.innerHTML == ""){
            console.log("ini reply debug form",message.value)
            console.log("ini tag value form",tag.value) 
            const referenceId = window.currentReplyId
            brain.replyQuest(message.value, course.value, userId, referenceId)
        }else{
            console.log("ini add debug form",message.value)
            console.log("ini tag value form",tag.value)
            brain.addQuest(message.value, course.value, userId)
        }
    })
}

if(formRegis){
    formRegis.addEventListener("submit",(e)=>{
        e.preventDefault()
        console.log(nameSignUp.value, passwordSignUp.value)
        authMod.Register(nameSignUp.value, passwordSignUp.value)
    })
}

if(formLogin){
    formLogin.addEventListener("submit",(e)=>{
        e.preventDefault()
        console.log(nameSignIn.value, passwordSignIn.value)
        authMod.login(nameSignIn.value, passwordSignIn.value)
    })
}

window.onload = () => {
    console.log("ini tag value",tag.value)
    const brain = new Brainy()
    console.log("window ini terload")

    const saved = JSON.parse(localStorage.getItem("user"))
    console.log("saved", saved)
    brain.createPosts()
    brain.showLogin()

    if (saved && Array.isArray(saved)) {
        brain.data = saved
        brain.createPosts()
        brain.showLogin()
    }
}

function logOut(){
    window.location.href= 'signIn.html'
}
window.logOut = logOut
