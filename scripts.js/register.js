

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", e => {
    e.preventDefault();

   
    const fullName = document.getElementById("fullName").value.trim();      
    const email    = document.getElementById("regEmail").value.trim();        
    const password = document.getElementById("regPassword").value;
    

   
    let users = JSON.parse(localStorage.getItem("users")) || [];

   
    if (users.some(u => u.email === email)) {
      alert("User already exists!");
      return;
    }

    
    const newUser = { fullName, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));                    

    
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    
    alert("Registration successful! You are now logged in.");
    window.location.href = "../index.html";
  });
});

