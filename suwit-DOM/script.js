// var tanya = true;

// while (tanya) {
//   var player = prompt("Masukan pilihan anda Gajah/Semut/Orang");

//   var jawaban = "";

//   if (player == computer) {
//     jawaban = "anda seri";
//   } else if (player == "semut") {
//     jawaban = computer == "gajah" ? "MENANG" : "KALAH";
//   } else if (player == "gajah") {
//     jawaban = computer == "orang" ? "MENANG" : "KALAH";
//   } else if (player == "orang") {
//     jawaban = computer == "semut" ? "MENANG" : "KALAH";
//   } else {
//     jawaban = "pilihan anda tidak ada";
//   }

//   alert(
//     "Plihan Anda : " +
//       player +
//       "\nPilihan Computer : " +
//       computer +
//       "\nHasilnya : Anda " +
//       jawaban
//   );

//   tanya = confirm("Mau bermain lagi?");
// }

function multipleComp() {
  let computer = Math.random();

  if (computer < 0.34) return "gajah";
  if (computer >= 0.34 && computer < 0.67) return "orang";
  return "semut";
}

function result(comp, player) {
  if (player == comp) return "anda seri";
  if (player == "semut") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "orang") return comp == "gajah" ? "MENANG" : "KALAH";
}

function rotate() {
  const pic = document.querySelector(".img-komputer");
}

const choose = document.querySelectorAll("li img");
choose.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilComp = multipleComp();
    const pilPlayer = pil.className;
    const hasil = result(pilComp, pilPlayer);

    const staticGambar = document.querySelector(".img-komputer");
    staticGambar.setAttribute("src", "assets/" + pilComp + ".png");

    const info = document.querySelector(".info");
    info.innerHTML = hasil;
  });
});
