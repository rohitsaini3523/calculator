document.addEventListener("DOMContentLoaded", function () {
  // Get the display input element
  var display = document.querySelector(".display input");

  // Get all the calculator buttons
  var buttons = document.querySelectorAll(".button");

  // Add click event listeners to all the buttons
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var buttonText = this.innerText;
      switch (buttonText) {
        case "AC":
          display.value = "";
          break;
        case "+/-":
          display.value = -display.value;
          break;
        case "%":
          display.value = display.value / 100;
          break;
        case "=":
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = "Error";
          }
          break;
        default:
          // Append the button text to the display
          display.value += buttonText;
          break;
      }
    });
  });
});
