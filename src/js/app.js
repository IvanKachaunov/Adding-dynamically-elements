import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

    for(let i = 0; i < 5; i++){
      let elements = document.createElement("article");
      elements.classList = "message";
      elements.innerHTML = "lorem ipsum random text"
      document.body.append(elements);
    }
});
