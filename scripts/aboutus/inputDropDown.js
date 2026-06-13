window.addEventListener("DOMContentLoaded", () => {
  const selected = document.querySelector("#input-option");
  const options = document.querySelector("#options");

  selected.addEventListener("click", () => {
    options.classList.toggle("options-hidden");
  });

  options.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      selected.textContent = item.textContent;
      options.classList.add("options-hidden");
    });
  });
});
