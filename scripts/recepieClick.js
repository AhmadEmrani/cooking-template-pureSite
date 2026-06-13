window.addEventListener("DOMContentLoaded", () => {
  const clickableCards = document.querySelectorAll(
    ".cart-recepies, .card-recepie-day , .recipe-item , .sidebar-recipe-card",
  );

  clickableCards.forEach((element) => {
    element.style.cursor = "pointer";
    element.addEventListener("click", () => {
      console.log("clicked");

      window.location.href = "/recepiedetails/recepie.html";
    });
  });
});
