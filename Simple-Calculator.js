// Fungsi-fungsi operasi matematika
function penjumlahan(a, b) {
    return a + b;
}

function pengurangan(a, b) {
    return a - b;
}

function perkalian(a, b) {
    return a * b;
}

function pembagian(a, b) {
    return a / b;
}

// Mendapatkan input dari pengguna
const pilihan = prompt(`Pilih operasi:
1. Penjumlahan
2. Pengurangan
3. Perkalian
4. Pembagian
`);

const angka1 = parseFloat(prompt("Angka 1: "));
const angka2 = parseFloat(prompt("Angka 2: "));

// Variabel untuk menyimpan hasil dan nama operasi
let hasil;
let namaOperasi;

// Proses pemilihan operasi menggunakan switch-case
switch (pilihan) {
    case '1':
        namaOperasi = "Penjumlahan";
        hasil = penjumlahan(angka1, angka2);
        break;
    case '2':
        namaOperasi = "Pengurangan";
        hasil = pengurangan(angka1, angka2);
        break;
    case '3':
        namaOperasi = "Perkalian";
        hasil = perkalian(angka1, angka2);
        break;
    case '4':
        namaOperasi = "Pembagian";
        hasil = pembagian(angka1, angka2);
        break;
    default:
        alert("Pilihan tidak valid!");
        throw new Error("Operasi tidak tersedia");
}

// Menampilkan output
console.log(`
Operasi: ${namaOperasi}
Angka 1: ${angka1}
Angka 2: ${angka2}
Hasil: ${hasil}
`);
