function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "mom50";
  
    if (password === correctPassword) {
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("content-screen").style.display = "block";
      window.scrollTo(0, 0);
    } else {
      document.getElementById("error-msg").innerText = "Incorrect password. Try again.";
    }
  }
  