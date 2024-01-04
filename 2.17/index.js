//dz
/*function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Ви згодні?",
    function() { alert("Ви погодились."); },
    function() { alert("Ви скасували виконання."); }
  );
*/

//vurishenya
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Ви згодні?",
  () => alert("Ви погодились."),
  () => alert("Ви скасували виконання.")
);
