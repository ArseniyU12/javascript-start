// zavdanya
/*switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Ми підтримуємо і ці браузери");
    break;

  default:
    alert("Маємо надію, що ця сторінка виглядає добре!");
}*/

// 1 dz - vurishenya

/*let browser;

if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (browser == "Chrome") {
  alert("Ми підтримуємо і ці браузери");
} else if (browser == "Firefox") {
  alert("Ми підтримуємо і ці браузери");
} else if (browser == "Safari") {
  alert("Ми підтримуємо і ці браузери");
} else if (browser == "Opera") {
  alert("Ми підтримуємо і ці браузери");
} else {
  alert("Маємо надію, що ця сторінка виглядає добре!");
}*/

// 2 dz
// zavdanya
let a = +prompt("a?", "");

if (a == 0) {
  alert(0);
}
if (a == 1) {
  alert(1);
}

if (a == 2 || a == 3) {
  alert("2,3");
}

// vurishenya

let a = +prompt("a?", "");

switch (a) {
  case "0":
    alert(0);
    break;
  case "1":
    alert(1);
    break;
  case "2":
  case "3":
    alert(2, 3);
    break;
}
