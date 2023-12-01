// /*
// melakukan input angka dari 1-10 oleh pemain
// memiliki 3 kesempatan
// */
// alert(
//   "Perintah !!!\n\nAnda disuruh menebak angka dari 1-10\nMemiliki kesempatan untuk menebak 3x"
// );

// // jika tekan oke, muncul prompt utk masukan angka nya
// let input = prompt("Masukan angka nya dari 1-10");

// // mengacak angka nya 1 - 10
// let min = 1;
// let max = 10;
// let random = Math.floor(Math.random() * max) + min;
// // console.log(random);

// // jika angka yang di tebak == random, maka anda benar
// // jika angka yang di tebak < random, maka angka terlalu rendah
// // jika angka yang di tebak > random, maka angka terlalu tinggi

// for (let i = 3; i >= 1; i--) {
//   let hasil = "";
//   if (input == random) {
//     hasil = "TEBAKAN ANDA BENAR";
//   } else if (input < random) {
//     hasil = "TEBAKAN ANDA TERLALU RENDAH";
//   } else if (input > random) {
//     hasil = "TEBAKAN ANDA TERLALU TINGGI";
//   } else {
//     hasil = "INPUTAN YANG DIMINTA TIDAK SESUAI";
//   }
//   alert("Hasil nya ialah " + hasil);

//   for (j = 1; j >= 1; j--) {
//     input = Number(prompt("kamu punya " + i + " lagi"));
//   }
// }

// // hasil akhir
// alert(
//   "Kamu memilih : " +
//     input +
//     " dan komputer memilih : " +
//     random +
//     "\n maka hasilnya : " +
//     hasil
// );

// // ------------------------------
// // // menagkap pilihan player
// // var p = prompt("Pilih : 1 - 10 ");

// // //menangkap pilihan komputer
// // //membangkitkan bilangan random
// // var comp = Math.floor(Math.random() * 10) + 1;

// // var hasil = " ";
// // //menentukan rules

// // for (i = 3; i >= 1; i--) {
// //   if (p == comp) {
// //     hasil = "BENAR";
// //     break;
// //   } else if (p > comp) {
// //     hasil = "TERLALU BESAR";
// //   } else if (p < comp) {
// //     hasil = "TERLALU RENDAH";
// //   } else {
// //     hasil = "anda salah memasukkan angka";
// //   }
// //   alert("jawaban : " + hasil);

// //   for (j = 1; j >= 1; j--) {
// //     p = Number(prompt("kamu punya " + i + " lagi"));
// //   }
// // }
// // //tampilkan hasil

// // alert(
// //   "Kamu memilih : " +
// //     p +
// //     " dan komputer memilih : " +
// //     comp +
// //     "\n maka hasilnya : " +
// //     hasil
// // );

let ulang = true;
while (ulang) {
  let percobaan = 3;
  let random = Math.floor(Math.random() * 10) + 1;
  let hasil = "";

  // alert(
  // "RULES!!! \n Anda diminta untuk menembak angka 1-10 \n Setiap permainan dengan memiliki " +
  //   percobaan +
  //   " kesempatan menebak \n lebih itu di anggap gagal"
  // );

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
