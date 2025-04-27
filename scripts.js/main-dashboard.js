

document.addEventListener('DOMContentLoaded', () => {
  const raw = localStorage.getItem('users');
  const users = raw ? JSON.parse(raw) : [];
  const tbody = document.getElementById('userList');

  if (users.length === 0) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 3; 
    cell.textContent = 'No user data found.';
    row.appendChild(cell);
    tbody.appendChild(row);
  } else {
    users.forEach(user => {
      const row = document.createElement('tr');

      const nameCell = document.createElement('td');
      nameCell.textContent = user.fullName || 'N/A';

      const emailCell = document.createElement('td');
      emailCell.textContent = user.email || 'N/A';

      const scoreCell = document.createElement('td');
      scoreCell.textContent = user.score !== undefined ? user.score : '0';

      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(scoreCell);
      tbody.appendChild(row);
    });
  }
});

  