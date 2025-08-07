class Question {
    constructor(message, course) {
        this.message = message
        this.course = course
    }
}

const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")
console.log("ID dari URL:", id)

class Brainy {
    data = []

    addQuest(newMessage, newCourse) {
        const quest = new Question(newMessage, newCourse)
        console.log("met Reg", quest)

        this.data.push(quest)
        console.log("this.data", this.data)

        let saved = JSON.parse(localStorage.getItem("quest")) || []
        saved.push(quest)
        localStorage.setItem("quest", JSON.stringify(saved))

        this.createPosts()
    }

    createPosts() {
        let saved = JSON.parse(localStorage.getItem("quest")) || []
        posts.innerHTML = `` // reset isi sebelum render ulang

        saved.forEach((quest, index) => {
            console.log(quest.message)
            posts.innerHTML += `
            <div class="flex flex-col items-start m-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <p class="bg-gray-200 rounded-sm w-full p-2">${quest.message}</p>
                <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                    <div class="mt-px">${quest.course}</div>
                </div>
                <div>
                    <button onclick="" class="bg-gray-200 p-2 rounded-lg">Comment</button>
                </div>
            </div>
            `
        })
    }
}

// DOM elements
let formQuest = document.getElementById("formQuestion")
let message = document.getElementById("message")
let course = document.getElementById("course")
let posts = document.getElementById("posts")

// Saat form disubmit
formQuest.addEventListener("submit", (e) => {
    e.preventDefault()
    const brain = new Brainy()
    brain.addQuest(message.value, course.value)

    // Kosongkan input setelah submit (optional)
    message.value = ""
    course.selectedIndex = 0
})

// Saat halaman dimuat
window.onload = () => {
    const brain = new Brainy()
    console.log("window ini terload")

    const saved = JSON.parse(localStorage.getItem("quest"))
    console.log("saved", saved)

    if (saved && Array.isArray(saved)) {
        brain.data = saved
        brain.createPosts()
    }
}
