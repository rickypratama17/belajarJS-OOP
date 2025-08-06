# Array
Array : Variabel yang bisa mempunyai lebih dari 1 value
```
let fruit = ["Apple", "Orange", "Banana"]
```
 
Untuk menambahkan data ke array pada index tertentu bisa dengan cara 
fruit[3]="coconut"
sehingga ketika di console.log(fruit[3]) maka hasilnya coconut
tetapi kalau misalnya index tersebut diganti ke 2 fruit[2]="coconut" pada susunan code yang arraynya sudah didefinisi pada line 1, maka data pada array tidak berubah dan tetap output pada array fruit ["apple", "orange", "banana"]
-	Cara untuk menambahkan data ke array adalah menggunakan push, jadi ketika diimplementasikan kecode menjadi : fruit.push(“coconut”) sehingga outputnya adalah 
[ 'apple', 'orange', 'banana', 'coconut' ]
Note* : pastikan fruit.push sebelum menampilkan data, jika fruit.push dilakukan setelah menampilkan data pada console.log maka outputnya tetap [ 'apple', 'orange', 'banana']

-	Cara untuk menghapus element/data index terakhir pada array yaitu menggunakan pop. Jadi ketika diimplementasikan kecode menjadi ```fruit.pop()```, sehingga ketika terdapat array yang memiliki isi data [ 'Apple', 'Orange', 'Banana', 'Coconut' ] kemudial menggunakan fruit.pop() maka outputnya [ 'Apple', 'Orange', 'Banana']

-	Cara untuk menghapus element/data index awal pada array yaitu menggunakan shift, jadi ketika diimplementasikan kecode menjadi ```fruit.shift()``` sehingga output data yang sebelumnya [ 'Apple', 'Orange', 'Banana', 'Coconut' ] menjadi 

-	Cara untuk menambahkan element/data index awal pada array yakni menggunakan unshift, jadi ketika diimplementasikan kecode menjadi ```fruit.unshift(“Melon”)``` sehingga data yang sebelum diunsift [ 'Orange', 'Banana' ] dan ketika sudah diunshift menjadi [ 'Melon', 'Orange', 'Banana' ]

-	Cara untuk menhitung jumlah data yang ada pada array yaitu menggunakan length. Jadi ketika diimplementasikan kecode menjadi ```let numOfFruit = fruit.length``` , numOfFruit adalah variabel yang saya buat untuk menampung data dari fruit.length.jika aku memiliki array [ 'Melon', 'Orange', 'Banana' ] sehingga ketika di console.log(numOfFruit) maka outputnya menjadi 3

-	Cara untuk mencari posisi index dari suatu data yaitu menggunakan indexOf(). Jadi ketika diimplementasikan ke dalam code menjadi ```let index = fruit.indexOf(“Orange”)``` index adalah variabel yang digunakan untuk menyimpan data dari fruit.indexOf(“Orange”). Sehingga ketika di console.log(index) maka out punya adalah 1 yang data arraynya [ 'Melon', 'Orange', 'Banana' ]

-	Cara untuk menampilkan data dengan cara perulangan pada array  menggunakan ``` for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}```
i=0 digunakan untuk deklarasi bahwa nilai i adalah 0, kemudian i<fruit.lenght adalah kondisi apakah i lebih kecil dari panjang array? Jika iya maka perulangan tersebut akan berhenti. Kemudian i++ digunakan untuk increment yang berarti setiap iterasi nilai i akan ditambah 1
console.log(fruit[i]) digunakan untuk menampilkan data ke console dengan isi array fruit index ke i atau nilai index tersebut

-	Cara lain untuk menampilkan data dengan cara perulangan pada array  menggunakan ```for(let f of fruit){
Console.log(f)
}

-	Cara untuk menampilkan data berurutan sesuai abjad yaitu menggunakan sort() yaitu fruit.sort() sehingga kalau dikombinasi dengan perulangan tadi maka hasilnya adalah 
Apple
Banana
Orange
Dari data ["Apple", "Orange", "Banana"]

Reference : 
1.	https://www.youtube.com/watch?v=yQ1fz8LY354
2.	https://www.w3schools.com/js/js_array_methods.asp 
3.	Crud https://www.freecodecamp.org/news/learn-crud-operations-in-javascript-by-building-todo-app/

# CRUD with JS-OOP-Localstorage 
Membuat Form CRUD
Buat Form dari html dan data dummy

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crud OOP-LocalStorage</title>
</head>
<body>
  <form action="">
    <h3>List Anggota</h3>
    <label for="name">name</label>
    <input type="text" name="name" id="name">

    <label for="role">role</label>
    <input type="text" name="role" id="role">

    <br>
    <p id="msg"></p>
    <br>

    <button type="submit">Submit</button>
  </form>
    <br>
    <div>
        <h3>List Anggota</h3>
        <p>Yoga-Admin</p>
        <div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
</body>
</html>
```
Buat file JS dengan nama User.js kemudian tambahkan 
```<script src="User.js"></script>```
Kemudian buat class user 
```
class User{
  constructor(name,role){
    this.name=name
    this.role=role
  }
}
```
Deklarasi element input html tadi dengan cara 
```
let form = document.getElementById("form")
let inputName = document.getElementById("name")
let inputRole = document.getElementById("role")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")
```

Supaya formnya tidak mereload dan bisa disimpan dilocal storage, maka saya menggunakan preventDefault, kala diimplementasikan ke code menjadi 
``` 
form.addEventListener("submit", (e)=>{
  e.preventDefault()  
})
```
Kemudian buat form validation sebagai pengecekan apakah form tersebut terisi atau tidak dengan code 
```
function formValidation(){
  if(inputName.value === "" && inputRole.value === ""){
    msg.innerText = "Nama dan Role harus terisi"
  }
}
```
Kemudian tambahkan code berikut ke form.addEventListener yang sebelumbnya untuk memanggil function formValidation
```
formValidation() 
```
Pada tahap ini jika dicoba untuk submit ketika input kosong maka akan keluar massage seperti berikut
 
 
Kemudian buat function untuk menyimpan data ke local storage dengan cara buat object kosong untuk menyimpan nilai input dari form yakni
```
let data[]
```
Setelah itu buat functionnya untuk menginputkan data dari form ke class User kemudian disimpan lagi ke object data
```
acceptData = () => {
  const user = new User(inputName.value, inputRole.value)
  data.push(user)
  localStorage.setItem("user",JSON.stringify(data))
  console.log(data)
}
```
Tambahkan id pada div yang membungkus data dummy serta deklarasikan seperti element-element html lainnya
```
<div id="posts">
  <p>Yoga-Admin</p>
  <div>
    <button>Edit</button>
    <button>Delete</button>
  </div>
</div>
```
Kemudian buat function untuk membuat postingan yang sudah kita input sebelumnya menggunakan foreach yang menampilkan value array secara berulang ulang dan ditambahkan innerhtml sehingga secara otomatis membuat element beserta value array secara berulang-ulang
```
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
```
Kemudian buat function delete dengan mengambil posisi index tersebut yang ada di onclick yang dikirim dari createPost tadi
```
function deletePost(){
  data.splice(index, 1)
  localStorage.setItem("user",JSON.stringify(data))
  createPost()
}
```
Kemudian buat editPost untuk mengedit postingan tersebut, untuk membuat fuction edit diperlukan index pada array tersebut 
```
function editPost(){
  inputName.value = data[index].nama
  inputRole.value = data[index].role
  deletePost(index)
}
```
Kemudia buat function Untuk mengambil data dari localStorage saat halaman dibuka dan menampilkannya lagi di halaman web.
```
window.onload = () => {
  const saved = localStorage.getItem("user")
  if(saved){
      data = JSON.parse(saved)
      createPost()
  }
}
```
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/b16ffb16-71de-479f-9976-c69b3745ad0d" />

REFRERENCE
1.	https://www.freecodecamp.org/news/learn-crud-operations-in-javascript-by-building-todo-app/
2.	https://www.w3schools.com/jsref/jsref_splice.asp
3.	https://www.w3schools.com/jsref/met_element_addeventlistener.asp
