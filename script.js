//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  let counterValue = 0;
  
  const counterElement = document.getElementById("counter");
  const incrementButton = document.getElementById("incrementBtn");

  incrementButton.addEventListener("click", () => {
    alert(`Current value before increment: ${counterValue}`);
    counterValue++;
    counterElement.textContent = counterValue;
  });
});
https://www.svgrepo.com/show/345221/three-dots.svg
document addEventListnerById("")https://www.svgrepo.com/show/345221/three-dots.svg