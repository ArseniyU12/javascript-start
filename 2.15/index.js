// 1 dz
// zavdanya

/*function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Батьки дозволили?');
    }
  }

// vurishenya
function checkAge(age) {
    return (age > 18) || confirm('Батьки дозволяють?');
}*/

// 2 dz
// zavdanya

min(2, 5) == 2;
min(3, -1) == -1;
min(1, 1) == 1;

// vurishenya

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
