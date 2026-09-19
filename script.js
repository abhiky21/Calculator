const display = document.querySelector(".display");
const keypad = document.querySelector("#keypad");

const buttons = document.querySelectorAll("#keypad button");

var Num1 = 0,
  Num2 = 0,
  Operator = null,
  result = 0;

let isVisible = true;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isVisible) {
      display.textContent = "";
      isVisible = false;
    }
    display.textContent += button.textContent;

    calculation(button.textContent, button.getAttribute("aria-label" || ""));
  });
});

function calculation(value, attri) {
  if (Operator) {
    if (value >= "0" && value <= "9") {
      Num2 = Num2 + value;
    }
  }

  switch (attri) {
    case "Divide":
      Operator = "/";

      break;
    case "Multiply":
      Operator = "*";

      break;
    case "Subtract":
      Operator = "-";

      break;
    case "Add":
      Operator = "+";

      break;
  }

  if (Operator == null) {
    if (value >= "0" && value <= "9") {
      Num1 = Num1 + value;
    }
  }

  if (attri == "Equals") {
    totalResult();
    display.textContent = result;
    result = 0;
    Operator = null;
    isVisible = true;
  }
}

function totalResult() {
  //   console.log("Section: A");
  //   console.log("Operator: ", Operator);
  //   console.log("Num1: ", Number(Num1));
  //   console.log("Num2: ", Number(Num2));

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
  ((Num1 = 0), (Num2 = 0));
}
