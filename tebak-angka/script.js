let ulang = true;
while (ulang) {
  let percobaan = 3;
  let random = Math.floor(Math.random() * 10) + 1;
  let hasil = "";

  while (percobaan >= 1) {
    alert("Sisa percobaan permainan " + percobaan + " kesempatan");
    let inputan = parseInt(
      prompt(
        "RULES!!! \n Anda diminta untuk menembak angka 1-10 \n Setiap permainan dengan memiliki 3 kesempatan menebak \n lebih itu di anggap gagal"
      )
    );
    if (inputan === random) {
      hasil = "BENAR";
      alert("Anda " + hasil + " angka yang anda tebak adalah " + random);
      break;
    } else if (inputan < random) {
      hasil = "RENDAH";
      percobaan -= 1;
      alert(
        "Terlalu " +
          hasil +
          " angka yang anda tebak adalah " +
          inputan +
          "\ntersisa " +
          percobaan +
          " kesempatan lagi."
      );
    } else if (inputan > random) {
      hasil = "TINGGI";
      percobaan -= 1;
      alert(
        "Terlalu " +
          hasil +
          " angka yang anda tebak adalah " +
          inputan +
          "\ntersisa " +
          percobaan +
          " kesempatan lagi."
      );
    }

    if (percobaan === 0) {
      alert("Anda gagal \nangka yang dicari adalah " + random);
    }
  }
  ulang = confirm("Ulang Lagi?");
}
alert("Terima kasih");
