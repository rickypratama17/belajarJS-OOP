class User{
    constructor(nama,role){
        this.nama = nama
        this.role = role
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

let formValidation = () => {
    if(inputName.value === "" && inputRole.value === ""){
        msg.innerText = "Please enter name and role"
    }else{
        msg.innerText = ""
        acceptData()
    }
}

let data = {}

acceptData = () => {
    const user = new User(inputName.value, inputRole.value)
    data.push(user)
    localStorage.setItem("user", JSON.stringify(data))
    console.log(data)
    createPost()
}

createPost = () => {
    posts.innerHTML = ``
    data.forEach((user, index) => {
        posts.innerHTML += `
          <div>
            <p>${user.nama}-${user.role}</p>
            <div class="option">
              <button onclick="editPost(${index})">edit</button>
              <button onclick="deletePost(${index})">delete</button>
            </div>
          </div>
        `
    });
}

deletePost = (index) =>{
    data.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(data));
    createPost()
}

editPost = (index) => {
    inputName.value = data[index].nama
    inputRole.value = data[index].role
    deletePost(index);
}

window.onload = () => {
    const saved = localStorage.getItem("users");
    if (saved) {
    data = JSON.parse(saved);
    createPost();
    }
}