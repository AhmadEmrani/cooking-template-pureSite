class CardRecipeDay extends HTMLElement {
  connectedCallback() {
    const imageSrc = this.getAttribute("image") || "";
    const title = this.getAttribute("title") || "";
    const time = this.getAttribute("time") || "";
    const category = this.getAttribute("category") || "";
    const likeIcon = this.getAttribute("icon-like") || "./icons/like.svg";
    const timerIcon = this.getAttribute("icon-timer") || "./icons/timer.svg";
    const forkIcon = this.getAttribute("icon-fork") || "./icons/fork.svg";

    this.innerHTML = `
      <div class="card-recepie-day">
        <button class="like-button-suggestion">
          <img src="${likeIcon}" alt="" />
        </button>
        <img src="${imageSrc}" alt="" />
        <p>${title}</p>
        <div class="info-card-container">
          <div class="info-card-box">
            <img src="${timerIcon}" alt="" />
            <p>${time}</p>
          </div>
          <div class="info-card-box">
            <img src="${forkIcon}" alt="" />
            <p>${category}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("card-recipe-day", CardRecipeDay);
