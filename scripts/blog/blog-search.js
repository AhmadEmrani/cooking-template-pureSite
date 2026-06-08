document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-form");
  const searchInput = searchForm?.querySelector('input[type="search"]');
  const articleCards = Array.from(
    document.querySelectorAll(".main-articles article-card"),
  );
  const pagination = document.querySelector(".pagination");
  const resultMessage = document.querySelector(".search-result-message");

  if (!searchForm || !searchInput || articleCards.length === 0) return;

  const normalizeText = (text) => text.trim().toLowerCase();

  const filterArticlesByTitle = () => {
    const searchValue = normalizeText(searchInput.value);
    let visibleArticlesCount = 0;

    articleCards.forEach((card) => {
      const articleTitle = normalizeText(card.getAttribute("title") || "");
      const isMatched =
        searchValue === "" || articleTitle.includes(searchValue);

      card.hidden = !isMatched;
      card.style.display = isMatched ? "" : "none";

      if (isMatched) visibleArticlesCount += 1;
    });

    if (pagination) {
      pagination.style.display = searchValue ? "none" : "";
    }

    if (resultMessage) {
      if (!searchValue) {
        resultMessage.textContent = "";
        resultMessage.classList.remove("show");
      } else if (visibleArticlesCount > 0) {
        resultMessage.textContent = `${visibleArticlesCount} article found for "${searchInput.value}"`;
        resultMessage.classList.add("show");
      } else {
        resultMessage.textContent = `No article found for "${searchInput.value}"`;
        resultMessage.classList.add("show");
      }
    }
  };

  searchInput.addEventListener("input", filterArticlesByTitle);

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    filterArticlesByTitle();
  });
});
