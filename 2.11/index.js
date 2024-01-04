// 1 dz
/*let age = "";

if ((age >= 14 || age <= 90)) {
  alert("its ok");
}
*/

// 2 dz

let login = prompt("Ваш логін: ");

if (login === "Admin") {
  let pass = prompt("Введіть пароль:");

  if (pass === "Господар") {
    alert("Вітаємо!");
  } else if (pass === "" || pass === null) {
    alert("Скасовано!");
  } else {
    alert("Неправильний пароль!");
  }
} else if (login === "" || login === null) {
  alert("Скасовано!");
} else {
  alert("Я вас не знаю!");
}
