function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    if (username === "user" && password === "pass") {
      document.getElementById("loginForm").style.transform = "translateY(-100%)";
      document.getElementById("noteForm").style.display = "block";
    } else {
      alert("Login gagal. Coba lagi.");
    }
  }

  function simpanCatatan() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("notePassword").value;
    var domain = document.getElementById("domain").value;
    var telepon = document.getElementById("telepon").value;
    var keterangan = document.getElementById("keterangan").value;
    var tanggal = document.getElementById("tanggal").value;
    var periode = document.getElementById("periode").value;
    var pembayaran = document.getElementById("pembayaran").value;
    var alamat = document.getElementById("alamat").value;

    var catatan = {
      name: name,
      email: email,
      password: password,
      domain: domain,
      telepon: telepon,
      keterangan: keterangan,
      tanggal: tanggal,
      periode: periode,
      pembayaran: pembayaran,
      alamat: alamat
    };

    kirimKeWhatsApp(catatan);

    console.log("Catatan Pelanggan:", catatan);
  }

  function logout() {
    document.getElementById("loginForm").style.transform = "translateY(0)";
    document.getElementById("noteForm").style.display = "none";
  }

  function kirimKeWhatsApp(catatan) {
    var nomorWhatsApp = "6285803537375";
    var pesan = `Catatan Pelanggan:\nNama: ${catatan.name}\nEmail: ${catatan.email}\nPassword: ${catatan.password}\nDomain: ${catatan.domain}\nTelepon: ${catatan.telepon}\nKeterangan: ${catatan.keterangan}\nTanggal: ${catatan.tanggal}\nPeriode: ${catatan.periode}\nPembayaran: ${catatan.pembayaran}\nAlamat: ${catatan.alamat}`;
    var linkWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
    window.open(linkWhatsApp);
  }