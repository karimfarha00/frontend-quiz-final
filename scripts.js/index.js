
function showCustomAlert(message, onOk) {
  const alertBox     = document.getElementById("customAlert");
  const alertMessage = document.getElementById("customAlertMessage");
  const alertOk      = document.getElementById("customAlertOk");

  alertMessage.textContent = message;
  alertBox.style.display   = "flex";

  alertOk.onclick = () => {
    alertBox.style.display = "none";
    if (typeof onOk === "function") onOk();
  };
}

document.addEventListener("DOMContentLoaded", () => {                             
  const htmlBtn = document.getElementById("startHtmlQuizBtn");
  const cssBtn  = document.getElementById("startCssQuizBtn");
  const jsBtn   = document.getElementById("startJsQuizBtn");

  function goToSection(sectionId, event) {
    
    event.preventDefault();                                                          

     
    const user = JSON.parse(localStorage.getItem("loggedInUser"));                 

     
    if (!user) {
      showCustomAlert(
        "Please login or register first to access the quiz.",
        () => window.location.href = "./pages.html/login.html"
      );
      return;
    }

    
    window.location.href = `./pages.html/quiz.html#${sectionId}`;
  }

  if (htmlBtn) htmlBtn.addEventListener("click", (e) => goToSection("html-section", e));  
  if (cssBtn)  cssBtn.addEventListener("click",  (e) => goToSection("css-section",   e));
  if (jsBtn)   jsBtn.addEventListener("click",   (e) => goToSection("js-section",    e));
});

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
     
      localStorage.removeItem("loggedInUser");

      
      window.location.href = "./pages.html/login.html";
    });
  }
});

