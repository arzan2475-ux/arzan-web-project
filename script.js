const button = document.querySelector("button");

button.addEventListener("click", function () {
  const username = document.querySelector('input[placeholder="Username"]').value;
  const password = document.querySelector('input[placeholder="Password"]').value;

  if (username === "admin" && password === "12345") {
    alert("Login successful!");
  } else {
    alert("Wrong username or password!");
  }
});
