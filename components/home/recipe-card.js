
class RecipeCard extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute('image') || '';
    const title = this.getAttribute('title') || '';
    const time = this.getAttribute('time') || '30 Minutes';
    const category = this.getAttribute('category') || 'Chicken';
    const liked = this.getAttribute('liked') === 'true';
    const likeIcon = liked ? './homepage/like.svg' : './homepage/unlike.svg';

    this.innerHTML = `
      <style>
        .cart-recepies {
          background: linear-gradient(
            to bottom,
            rgba(231, 249, 253, 0) 0%,
            rgba(231, 249, 253, 1) 100%
          );
          position: relative;
          width: 400px;
          height: 435px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
          border-radius: 30px;
          padding: 25px 15px;
          font-family: inter;
        }
        .cart-recepies > p {
          font-size: 24px;
          font-weight: 600;
        }
        .cart-recepies > div {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          gap: 20px;
        }
        .like-button {
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          position: absolute;
          top: 45px;
          right: 30px;
          width: 48px;
          height: 48px;
          border-radius: 100%;
          cursor: pointer;
          background: white;
        }
        .like-button img {
          object-fit: cover;
        }
        .info-card-box {
          display: flex;
          flex-direction: row;
          gap: 10px;
        }
      </style>

      <div class="cart-recepies">
        <button class="like-button">
          <img src="${likeIcon}" alt="like">
        </button>
        <img src="${image}" alt="${title}">
        <p>${title}</p>
        <div>
          <div class="info-card-box">
            <img src="./homepage/Timer.svg" alt="time">
            <p>${time}</p>
          </div>
          <div class="info-card-box">
            <img src="./homepage/ForkKnife.svg" alt="category">
            <p>${category}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('recipe-card', RecipeCard);
