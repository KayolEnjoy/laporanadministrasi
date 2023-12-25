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

    // Menampilkan SweetAlert "Mengirim Pesan..."
    const sendingAlert = Swal.fire({
        title: 'Mengirim laporan...',
        text: 'Harap tunggu sebentar.',
        showConfirmButton: false,
        allowOutsideClick: false,
        willOpen: () => {
            Swal.showLoading();
        }
    });

    // Kirim data melalui Email.js
    emailjs.send('service_ult3jh6', 'template_76d2fsr', data)
        .then(response => {
            console.log('Email terkirim dengan sukses:', response);
            // Menutup SweetAlert "Mengirim Pesan..."
            sendingAlert.close();

            // Menampilkan SweetAlert "Laporan terkirim"
            Swal.fire({
                icon: 'success',
                title: 'Laporan Terkirim!',
                text: 'Terima kasih atas laporannya.',
                confirmButtonColor: '#4070f4'
            });

            // Tindakan atau logika lainnya setelah email terkirim
        })
        .catch(error => {
            console.error('Error saat mengirim email:', error);
            // Menutup SweetAlert "Mengirim Pesan..."
            sendingAlert.close();

            // Menampilkan SweetAlert "Laporan Gagal"
            Swal.fire({
                icon: 'error',
                title: 'Laporan Gagal',
                text: 'Gagal mengirim laporan. Silakan coba lagi nanti.',
                confirmButtonColor: '#4070f4'
            });
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

    var dengan_rupiah = document.getElementById('dengan-rupiah');
    dengan_rupiah.addEventListener('keyup', function(e)
    {
        dengan_rupiah.value = formatRupiah(this.value, 'Rp. ');
    });
    
    /* Fungsi */
    function formatRupiah(angka, prefix)
    {
        var number_string = angka.replace(/[^,\d]/g, '').toString(),
            split    = number_string.split(','),
            sisa     = split[0].length % 3,
            rupiah     = split[0].substr(0, sisa),
            ribuan     = split[0].substr(sisa).match(/\d{3}/gi);
            
        if (ribuan) {
            separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }
        
        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
    }
