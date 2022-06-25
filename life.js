var num1;
var num2;
let favDrink = prompt("Input the operation: + , - , / , * ");
switch (favDrink) {
  case "+":
    num1 = prompt("Input any number");
    num2 = prompt("Input another number");
    var total = num1 + num2;
    alert("Your answer is " + total);
    break;
  case "-":
    num1 = prompt("Input any number");
    num2 = prompt("Input another number");
    var total = num1 - num2;
    alert("Your answer is " + total);
    break;
  case "/":
    num1 = prompt("Input any number");
    num2 = prompt("Input another number");
    var total = num1 / num2;
    alert("Your answer is " + total);
    break;
  case "*":
    num1 = prompt("Input any number");
    num2 = prompt("Input another number");
    var total = num1 * num2;
    alert("Your answer is " + total);
  default:
    alert("Please input + , - , / , * and nothing else. Thank you (refresh the page to begin again)");
}
