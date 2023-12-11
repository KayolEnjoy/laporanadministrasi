// Fungsi yang akan dipanggil saat formulir dikirim
function submitForm(event) {
    event.preventDefault(); // Mencegah perilaku formulir bawaan

    // Ambil nilai dari setiap input formulir
    const nama = document.querySelector('input[name="nama_lengkap"]').value;
    const alamat = document.querySelector('input[name="alamat"]').value;
    const namaUsaha = document.querySelector('input[name="nama_usaha"]').value;
    const mobileNumber = document.querySelector('input[name="nomor_telepon"]').value;
    const gender = document.querySelector('select[name="kelamin"]').value;
    const keterangan = document.querySelector('input[name="keterangan"]').value;
    const akun = document.querySelector('input[name="email"]').value;
    const passwordAkun = document.querySelector('input[name="password"]').value;
    const judulPesanan = document.querySelector('input[name="judul_tema"]').value;
    const keteranganPesanan = document.querySelector('input[name="keterangan_pesanan"]').value;
    const tanggalDimulai = document.querySelector('input[name="tanggal_dimulai"]').value;
    const tanggalBerakhir = document.querySelector('input[name="tanggal_berakhir"]').value;
    const pembayaranVia = document.querySelector('select[name="pembayaran_via"]').value;
    const namaRekening = document.querySelector('input[name="nama_rekening"]').value;
    const kodePembayaran = document.querySelector('input[name="kode_pembayaran"]').value;
    const pembayaranBerjumlah = document.querySelector('input[name="pembayaran_berjumlah"]').value;
    const saksi = document.querySelector('input[name="saksi"]').value;
    const periode = document.querySelector('input[name="periode"]').value;

    // Bangun objek data dengan nilai-nilai dari input formulir
    const data = {
        nama: nama,
        alamat: alamat,
        namaUsaha: namaUsaha,
        mobileNumber: mobileNumber,
        gender: gender,
        keterangan: keterangan,
        akun: akun,
        passwordAkun: passwordAkun,
        judulPesanan: judulPesanan,
        keteranganPesanan: keteranganPesanan,
        tanggalDimulai: tanggalDimulai,
        tanggalBerakhir: tanggalBerakhir,
        pembayaranVia: pembayaranVia,
        namaRekening: namaRekening,
        kodePembayaran: kodePembayaran,
        pembayaranBerjumlah: pembayaranBerjumlah,
        saksi: saksi,
        periode: periode
    };

    // Kirim data melalui Email.js
    emailjs.send('service_ult3jh6', 'template_76d2fsr', data)
        .then(response => {
            console.log('Email terkirim dengan sukses:', response);
            alert('Laporan terkirim!');
            // Tindakan atau logika lainnya setelah email terkirim
        })
        .catch(error => {
            console.error('Error saat mengirim email:', error);
            alert('Laporan Gagal');
        });
}

// Mendapatkan referensi elemen formulir dan tombol-tombol navigasi
const form = document.getElementById("myForm"),
    nextBtn = form.querySelector(".nextBtn"),
    backBtn = form.querySelector(".backBtn");

// Menangani klik tombol "Lanjut"
nextBtn.addEventListener("click", () => {
    // Mengonversi NodeList ke dalam array dan mendapatkan nilai-nilai input
    const inputValues = Array.from(form.querySelectorAll(".first input, select")).map(input => input.value);

    // Memeriksa apakah semua input tidak kosong
    const isAllInputFilled = inputValues.every(value => value.trim() !== "");

    // Menambahkan atau menghapus kelas 'secActive' berdasarkan hasil pemeriksaan
    form.classList.toggle('secActive', isAllInputFilled);
});

// Menangani klik tombol "Kembali"
backBtn.addEventListener("click", () => form.classList.remove('secActive'));

// Menambahkan event listener untuk formulir pada saat pengiriman
form.addEventListener('submit', submitForm);

// Menangani klik tombol "Gass Kirim" menggunakan class 'submitBtn'
const submitBtn = form.querySelector(".submitBtn");
submitBtn.addEventListener("click", submitForm);
