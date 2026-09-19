const display = document.querySelector(".display");
const keypad = document.querySelector("#keypad");

const buttons = document.querySelectorAll("#keypad button");

var Num1 = 0,
  Num2 = 0,
  Operator = null,
  result = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // display.innerHTML = "";
    display.textContent += button.textContent;

    calculation(button.textContent, button.getAttribute("aria-label" || ""));
  });
});

function calculation(value, attri) {
  if (Operator) {
    if (
      value == "1" ||
      value == "2" ||
      value == "3" ||
      value == "4" ||
      value == "5" ||
      value == "6" ||
      value == "7" ||
      value == "8" ||
      value == "9" ||
      value == "0"
    ) {
      // data++;
      Num2 = Num2 + value;
      console.log("Num2 : ", Num2);
    }
  }
  switch (attri) {
    case "Divide":
      console.log("Divide");
      Operator = "/";
      Num2 = 0;
      break;
    case "Multiply":
      Operator = "*";
      console.log("Multiply");
      Num2 = 0;
      break;
    case "Subtract":
      Operator = "-";
      console.log("Subtract");
      break;
    case "Add":
      Operator = "+";
      console.log("Add");
      break;
  }

  if (Operator == null) {
    if (
      value == "1" ||
      value == "2" ||
      value == "3" ||
      value == "4" ||
      value == "5" ||
      value == "6" ||
      value == "7" ||
      value == "8" ||
      value == "9" ||
      value == "0"
    ) {
      // Num1 = Num1 * 10;
      Num1 = Num1 + value;
      // console.log("value: ", value);
      // let data = data + value;
      console.log(typeof Num1);
      // Num1 = Number(data);
      console.log("Num1 : ", Num1);
    }
  }

  if (attri == "Equals") {
    console.log(attri);
    console.log(Operator);
    console.log(Number(Num1));
    console.log(Number(Num2));

    switch (Operator) {
      case "/":
        result = Number(Num1) / Number(Num2);
        break;
      case "*":
        result = Number(Num1) * Number(Num2);
        break;
      case "-":
        result = Number(Num1) - Number(Num2);
        break;
      case "+":
        result = Number(Num1) + Number(Num2);
        break;
    }

    ((Num1 = 0), (Num2 = 0), (Operator = null));

    display.textContent = result;
    console.log("result", result);
  }
}
