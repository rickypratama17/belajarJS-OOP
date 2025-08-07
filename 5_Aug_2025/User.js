class User{
    constructor(name,role){
        this.name=name
        this.role=role
    }
}

let form = document.getElementById("form")
let inputName = document.getElementById("name")
let inputRole = document.getElementById("role")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    console.log("button clicked")

    formValidation();
})

function formValidation(){
    if(inputName.value === "" && inputRole.value === ""){
        msg.innerText = "Nama dan Role harus terisi"
    }else{
        msg.innerText = ""
        acceptData()
    }
}


function acceptData () {
    let data = []
    const user = new User(inputName.value, inputRole.value)
    data.push(user)
    localStorage.setItem("user",JSON.stringify(data))
    console.log(data)
    createPost()
}

function createPost(){
    posts.innerHTML = ``
    data.forEach((user, index) => {
        posts.innerHTML += `
        <div>
            <p>${user.name}-${user.role}</p>
            <div>
                <button onclick="editPost(${index})">Edit</button>
                <button onclick="deletePost(${index})">Delete</button>
            </div>
        </div>`
    });
}

function deletePost(index){
    data.splice(index, 1)
    localStorage.setItem("user",JSON.stringify(data))
    createPost()
}

function editPost(){
    inputName.value = data[index].nama
    inputRole.value = data[index].role
    deletePost(index)
}

window.onload = () => {
    const saved = localStorage.getItem("user")
    if(saved){
        data = JSON.parse(saved)
        createPost()
    }
}