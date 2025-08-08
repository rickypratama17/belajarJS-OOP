#  Fitur Log Out
    
Fitur log out yang saya buat ini sangat simple, karena tidak memiliki sesion dan login hanya menggunakan id, sehingga logOut yang saya buat hanya redirect ke halaman login menggunakan function berikut
```
function logOut(){
    window.location.href= 'signIn.html'
}
window.logOut = logOut
```

# Fitur Delete

Pada fitur delete, yang saya buat kali ini adalah dengan cara memfilter menurut id, mengecualikan id yang diperlukan kemudian menjalankan perintah set pada localstorage untuk menyimpan data dengan pengecualian sehingga data yg didelete tadi tidak tampil dan hanya menampilkan data dengan id lain
```
function deleteQuest(idQuest){

    console.log(idQuest)

    let saved = JSON.parse(localStorage.getItem("quest"))
    let delQuest = saved.filter(q => q.id !== idQuest)
    localStorage.setItem("quest", JSON.stringify(delQuest))

    const brain = new Brainy()
    brain.createPosts() 
}
window.deleteQuest=deleteQuest
```

# Perapihan Code

Pada progress sebelumnya pada tanggal 7 Agustus 2025, saya memindahkan beberapa method yang ada di Model.js ke file Question.js, kemudian Question.js tersebut saya ubah nama menjadi Controller.js karena semua method digunakan untuk mengatur perpindahan/penghubung data anatara view ke Model, sehingga Objek-objek yang ada pada Question.js tersebut dipindahkan ke Model.js

# Progress Update data
Pada web yang saya buat ini rencananya terdapat fitur balas pesan, tetapi pada saat klik jawab akan teredirect ke form input tersebut dan course menentukan quest yang direply, masih terdapat kendala pada input yang masih tidak beraturan
```
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
```