// array => kumpulan data satu tipe data yang sama (menampung banyak data)

let mhs = ["Salwa", "Lila", "Bunga", "Rei", "Cendy", "lisa", "Rahmi", "Killa"]
console.log(mhs);

// mengakses array => menggunakan indeks 0
console.log(mhs[0]); // Salwa
console.log(mhs[1]); // Lila
console.log(mhs[2]); // Bunga
console.log(mhs[3]); // Rei
console.log(mhs[4]); // Cendy
console.log(mhs[5]); // lisa
console.log(mhs[6]); // Rahmi
console.log(mhs[7]); // Killa

//length => mengetahui panjang data array
console.log(mhs.length);

// pop => menghapus data terakhir pada array
mhs.pop();
console.log(mhs);

// push => menambahkan data terakhir pada array
mhs.push("Killa");
console.log(mhs);

// shift => menghapus data pertama pada array
mhs.shift();
console.log(mhs);

// unshift => menambahkan data pertama pada array
mhs.unshift("Salwa");
console.log(mhs);

// splice => menghapus data pada array sesuai index yang ditentukan
mhs.splice(3, 1); // menghapus data pada index ke-2 sebanyak 1 data
console.log(mhs);

// slice => mengambil data pada array sesuai index yang ditentukan
let mhs2 = mhs.slice(1, 3); // mengambil data pada index ke-1 sampai index ke-3
console.log(mhs2);

// join => menggabungkan data pada array menjadi string
console.log(`Data Mahasiswa: ${mhs.join(", ")}`); // Salwa - Lila - Bunga - Cendy - lisa - Rahmi

// concat => menggabungkan 2 array menjadi 1 array
let mhs3 = ["Salwa", "Lila", "Bunga"];
let mhs4 = ["killa", "Rahmi", "Cendy"];
let dataMhs = mhs3.concat(mhs4);

console.log(dataMhs);

// sort => mengurutkan data pada array
console.log(dataMhs.sort()); // mengurutkan data secara ascending

// reverse => membalikkan data pada array
console.log(dataMhs.reverse()); // mengurutkan data secara descending

// typeof => mengetahui tipe data pada array
console.log(typeof dataMhs); // object

// indexOf => mengetahui index dari data pada array
console.log(dataMhs.indexOf("Salwa")); // 0
console.log(dataMhs.indexOf("Killa")); // 3 

//forEach => melakukan perulangan pada array
dataMhs.forEach(function (mhs, index) {
    console.log(`Mahasiswa ke-${index + 1} adalah ${mhs}`);
});