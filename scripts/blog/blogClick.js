const articlesContainer = document.querySelector(".main-articles");
const allArticles = articlesContainer.querySelectorAll("article-card");

allArticles.forEach((article, index) => {
  article.addEventListener("click", (event) => {
    //console.log(`Article ${index} clicked!`);
    article.style.display = "block";
    article.style.border = "1px solid pink";
    article.style.borderRadius = "20px";
    window.location.href = "http://127.0.0.1:37557/BlogPost/blogPost.html";
  });
});
