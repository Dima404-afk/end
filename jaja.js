
let sign = prompt("Привет?");

if (sign.toLowerCase() === "Привет") {
  alert("Вау какой ты дружелюбный всё встал и вышел");
}

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt(); //  open the blank prompt window
sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
sign = window.prompt("Are you feeling lucky", "sure"); // open the window with Text "Are you feeling lucky" and default value "sure"


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("demo").innerHTML = "Привет, " + sign;
});
