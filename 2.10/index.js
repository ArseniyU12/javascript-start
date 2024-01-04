// 1 dz

/*let nameJavaScript = prompt("Яка “офіційна” назва JavaScript?", "");

nameJavaScript == "ECMAScript" ? alert("Правильно!") : alert("Неправильно.");*/

// 2 dz

/*let num = prompt("Введіть любе число: ", 0);

if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
}
*/

// 3 dz

/*let result = a + b > 4 ? "True" : a + b < 4 ? "False" : alert(result);*/

// 4 dz

let name = prompt("Введіть вашу посаду: ", "");

let message =
  name == "Працівник"
    ? alert("Привіт")
    : name == "Директор"
    ? alert("Вітаю")
    : name == ""
    ? alert("Немає логіну")
    : "";
