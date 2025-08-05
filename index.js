document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".enter-btn");
  const sound = document.getElementById("clickSound");

  if (button) {
    button.addEventListener("click", () => {
      sound.play();
      setTimeout(() => {
        window.location.href = "home.html";
      }, 400); // Wait to let the sound finish before navigating
    });
  }
});
