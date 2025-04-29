// Fungsi untuk menentukan kategori usia
function kategoriUsia(age) {
  if (age >= 0 && age <= 12) {
    return "Anak-anak";
  } else if (age >= 13 && age <= 17) {
    return "Remaja";
  } else if (age >= 18 && age <= 59) {
    return "Dewasa";
  } else if (age >= 60) {
    return "Lansia";
  } else {
    return null; // usia negatif atau tidak valid
  }
}

// Main program
function klasifikasiUsia() {
  // Inisialisasi counter untuk tiap kategori
  const counters = {
    "Anak-anak": 0,
    "Remaja": 0,
    "Dewasa": 0,
    "Lansia": 0
  };

  // 1. Minta jumlah input
  let jumlah = parseInt(prompt("Masukkan jumlah orang: "));
  if (isNaN(jumlah) || jumlah <= 0) {
    alert("Jumlah tidak valid!");
    return;
  }

  // 2. Loop untuk memasukkan usia tiap orang
  for (let i = 1; i <= jumlah; i++) {
    let usia = parseInt(prompt(`Masukkan usia orang ke-${i}: `));
    if (isNaN(usia) || usia < 0) {
      alert("Usia tidak valid, silakan ulang untuk orang ini.");
      i--; // ulangi indeks ini
      continue;
    }

    // 3. Klasifikasi dan hitung
    const kategori = kategoriUsia(usia);
    if (kategori) {
      counters[kategori]++;
    }
  }

  // 4. Tampilkan hasil
  console.log("=== Hasil Klasifikasi Usia ===");
  for (const [kategori, count] of Object.entries(counters)) {
    console.log(`${kategori}: ${count} orang`);
  }
}

// Jalankan
klasifikasiUsia();
