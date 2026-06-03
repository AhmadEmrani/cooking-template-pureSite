class ArticleCard extends HTMLElement {
  connectedCallback() {
    const imageSrc = this.getAttribute("image-src") || "";
    const imageAlt = this.getAttribute("image-alt") || "";
    const title = this.getAttribute("title") || "";
    const description = this.getAttribute("description") || "";
    const authorImg = this.getAttribute("author-img") || "";
    const authorName = this.getAttribute("author-name") || "";
    const dateDatetime = this.getAttribute("date-datetime") || "";
    const dateText = this.getAttribute("date-text") || "";

    this.innerHTML = `
            <article class="article-card">
                <img src="${imageSrc}" alt="${imageAlt}">
                <div class="article-content">
                    <h2>${title}</h2>
                    <p>${description}</p>
                    <div class="author-info">
                        <img src="${authorImg}" alt="${authorName}">
                        <span>${authorName}</span>
                        <time datetime="${dateDatetime}">${dateText}</time>
                    </div>
                </div>
            </article>
        `;
  }
}

// معرفی کامپوننت به مرورگر
customElements.define("article-card", ArticleCard);
