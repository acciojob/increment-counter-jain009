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
