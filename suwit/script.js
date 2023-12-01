var tanya = true;

while (tanya) {
  var player = prompt("Masukan pilihan anda Gajah/Semut/Orang");

  var computer = Math.random();

  if (computer < 0.34) {
    computer = "gajah";
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = "orang";
  } else {
    computer = "semut";
  }

  var jawaban = "";

  if (player == computer) {
    jawaban = "anda seri";
  } else if (player == "semut") {
    jawaban = computer == "gajah" ? "MENANG" : "KALAH";
  } else if (player == "gajah") {
    jawaban = computer == "orang" ? "MENANG" : "KALAH";
  } else if (player == "orang") {
    jawaban = computer == "semut" ? "MENANG" : "KALAH";
  } else {
    jawaban = "pilihan anda tidak ada";
  }

  alert(
    "Plihan Anda : " +
      player +
      "\nPilihan Computer : " +
      computer +
      "\nHasilnya : Anda " +
      jawaban
  );

  tanya = confirm("Mau bermain lagi?");
}
// console.log(player);
// console.log(computer);
// console.log(jawaban);
