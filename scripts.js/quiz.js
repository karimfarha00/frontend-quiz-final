function showCustomAlert(message, onOk) {
  const alertBox = document.getElementById("customAlert");
  const alertMessage = document.getElementById("customAlertMessage");
  const alertOk = document.getElementById("customAlertOk");

  document.getElementById("quizContent").classList.add("blurred");

  alertMessage.textContent = message;
  alertBox.style.display = "flex";

  alertOk.onclick = () => {
    alertBox.style.display = "none";
    document.getElementById("quizContent").classList.remove("blurred");
    if (typeof onOk === "function") onOk();
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    showCustomAlert("Access denied. Please log in first.", () => {
      window.location.href = "login.html";
    });
  }
});

function submitQuiz() {
  const answers = {
    q1: "A",
    q2: "B",
    q3: "C",
    q4: "A",
    q5: "D",
    q6: "C"
  };

  let score = 0;
  const total = Object.keys(answers).length;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  
  const result = document.getElementById("result");
  result.textContent = `You scored ${score} / ${total}`;

 
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (loggedInUser && users.length > 0) {
    loggedInUser.score = score;
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    users = users.map(u => {
      if (u.email === loggedInUser.email) {
        return { ...u, score: score };
      }
      return u;
    });

    localStorage.setItem("users", JSON.stringify(users));
  }

  alert(`You scored ${score}`);
  window.location.href = "../index.html";
}

function resetQuiz() {
  const selectedRadios = document.querySelectorAll("input[type='radio']:checked");
  selectedRadios.forEach(radio => radio.checked = false);

  const result = document.getElementById("result");
  result.textContent = "";
}

function goHome() {
  window.location.href = "../index.html";
}
