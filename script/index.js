document.addEventListener("DOMContentLoaded", function () {
  // Get the display input element
  var display = document.querySelector(".display input");

  // Get all the calculator buttons
  var buttons = document.querySelectorAll(".button");

  // Add click event listeners to all the buttons
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var buttonText = this.innerText;

      // Handle button click based on the button text
      switch (buttonText) {
        case "AC":
          display.value = "";
          break;
        case "+/-":
          // Negate the current value
          display.value = -display.value;
          break;
        case "%":
          // Calculate percentage
          display.value = display.value / 100;
          break;
        case "=":
          try {
            // Evaluate the expression and display the result
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
