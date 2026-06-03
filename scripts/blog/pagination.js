document.addEventListener("DOMContentLoaded", () => {
  const articlesContainer = document.querySelector(".main-articles");
  const paginationContainer = document.querySelector(".pagination");

  const allArticles = Array.from(
    articlesContainer.querySelectorAll("article-card"),
  );

  // تغییر به ۶ مقاله در هر صفحه
  const itemsPerPage = 6;
  const totalPages = Math.ceil(allArticles.length / itemsPerPage);
  let currentPage = 1;

  function displayPage(page) {
    articlesContainer.innerHTML = "";

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const articlesToShow = allArticles.slice(startIndex, endIndex);

    articlesToShow.forEach((article) => {
      articlesContainer.appendChild(article);
    });
  }

  function setupPagination() {
    paginationContainer.innerHTML = "";

    // اگر فقط ۱ صفحه بود، می‌توانید شرط بگذارید که پجینیشن مخفی شود،
    // اما اینجا دکمه صفحه ۱ ساخته می‌شود.
    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.textContent = i;

      if (i === currentPage) {
        pageLink.classList.add("active");
      }

      pageLink.addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = i;
        displayPage(currentPage);
        updatePaginationClasses();
        document
          .querySelector(".blog-header")
          .scrollIntoView({ behavior: "smooth" });
      });

      paginationContainer.appendChild(pageLink);
    }
  }

  function updatePaginationClasses() {
    const links = paginationContainer.querySelectorAll("a");
    links.forEach((link) => link.classList.remove("active"));
    links[currentPage - 1].classList.add("active");
  }

  if (allArticles.length > 0) {
    displayPage(currentPage);
    setupPagination();
  }
});
