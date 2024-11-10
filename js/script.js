document.addEventListener("DOMContentLoaded", function () {
  const revealButton = document.getElementById("revealButton");
  const letterContent = document.getElementById("letterContent");

  revealButton.addEventListener("click", function () {
    // Hide the button with fade out
    revealButton.style.opacity = "0";
    revealButton.style.transform = "scale(0.8)";
    revealButton.style.transition = "all 0.5s ease";

    // After button fades out, hide it completely and show letter
    setTimeout(() => {
      revealButton.style.display = "none";
      letterContent.classList.remove("hidden");
      // Small delay to ensure display:block is processed before animation
      setTimeout(() => {
        letterContent.classList.add("visible");
      }, 50);
    }, 500);
  });
});
