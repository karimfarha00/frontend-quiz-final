document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  
  const ADMIN_EMAIL    = 'karim-farha@outlook.com';
  const ADMIN_PASSWORD = 'karim123';

  const emailInput    = document.getElementById('adminEmail').value.trim();
  const passwordInput = document.getElementById('adminPassword').value;

  if (emailInput === ADMIN_EMAIL && passwordInput === ADMIN_PASSWORD) {
    
    window.location.href = 'main-dashboard.html';
  } else {
    alert('Invalid admin email or password.');
  }
});
