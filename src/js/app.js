import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const articlesMessage = document.querySelectorAll(".message");
    articlesMessage.innerHTML = "Lorem ipsum dolor sit amet.";
});
