document.addEventListener("DOMContentLoaded", () => {
  const page = window.location.href;

  if (page.includes("login.html")) {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
      loginForm.addEventListener("submit", e => {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
        
          localStorage.setItem('loggedInUser', JSON.stringify(user));

          
          alert(`Welcome back, ${user.fullName || user.email}!`);

          
          loginForm.reset();

          
          window.location.href = "../index.html";
        } else {
          alert("Invalid email or password. Please try again.");
        }
      });
    }
  }
});
