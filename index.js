//function for displaying values
function display(value) {
  document.getElementById("screen").value += value;
}
//function for evaluating the calculation
function calculate() {
  let a = document.getElementById("screen").value;
  if (a !== "") {
    let b = eval(a);
    document.getElementById("screen").value = b;
  } else {
    return;
  }
}
//function for clearing the display
function cancel() {
  document.getElementById("screen").value = "";
}
