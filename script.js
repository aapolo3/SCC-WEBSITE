// set the correct username and password combination below
let correctUsername = ("123");
let correctPassword = ("321");
let button = document.querySelector("button");

button.onclick = function() {
  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;
  let message = document.querySelector(".message");

  // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
  if (username === correctUsername && password === correctPassword) {
    message.innerHTML = "Log in successful!";
  } else if (username !== correctUsername && password === correctPassword) {
    message.innerHTML = "Incorrect Username!";
  } else if (username === correctUsername && password !== correctPassword) {
    message.innerHTML = "Incorrect Password!";
  } else {
    message.innerHTML = "Both Username and Password Incorrect!"
  }


};