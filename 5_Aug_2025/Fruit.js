let fruit = ["Apple", "Orange", "Banana"]

fruit.sort()

for(let f of fruit){
    console.log(f)
}

for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

//menambahkan data ke index terakhir pada array
fruit.push("Coconut")

//Menampilkan Array yang outputnya ["apple", "orange", "banana"]
console.log(fruit)

//Menghapus data index terakhir yang ada dalam array
fruit.pop()

//menampilkan array yang data pada index terakhirnya sudah dihapus
console.log(fruit)

//Menghapus data index pertama yang ada dalam array
fruit.shift()

//menampilkan array yang data pada index pertama sudah dihapus
console.log(fruit)

//menambahkan data pertama array
fruit.unshift("Melon")

//menampilkan data array yang sudah ada tambahan data pada index awal
console.log(fruit)

//menghitung seberapa banya isi array
const numOfFruits = fruit.length

//menampilkan seberapa banyak isi array
console.log(numOfFruits)

//Menampilkan Array yang outputnya apple
console.log(fruit[0])

//Menambahkan data ke array pada index ke 3
fruit[4]="Watermelon"

//Menampilkan Array yang outputnya coconut
console.log(fruit[4])

//Mencari data Orange ini pada index berapa
let index = fruit.indexOf("Orange")
//menampilkan posisi index Orange
console.log(index)