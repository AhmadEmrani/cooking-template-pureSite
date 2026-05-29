
class SiteCategories extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .categories {
          width: 80%;
          display: flex;
          flex-direction: column;
          gap: 50px;
          margin-top: 50px;
        }
        .header-categories {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .header-categories h2 {
          font-family: inter;
          font-size: 40px;
          font-weight: 600;
        }
        .header-categories button {
          border: none;
          width: 12.5rem;
          height: 3.75rem;
          background-color: #e7fafe;
          border-radius: 16px;
          cursor: pointer;
        }
        .header-categories button p {
          font-family: inter;
          font-size: 16px;
          font-weight: 600;
        }
        .categories-container {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }
        .category-card {
          width: 180px;
          height: 130px;
          background: white;
          border-radius: 22px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          margin-top: 30px;
          padding-bottom: 5px;
          transition: transform 0.2s ease;
        }
        .category-card .cat-icon {
          position: absolute;
          top: -35px;
          width: 80px;
          height: 80px;
          object-fit: contain;
          filter: drop-shadow(0 5px 8px rgba(0, 0, 0, 0.12));
        }
        .category-card p {
          font-size: 1rem;
          font-weight: 500;
          color: black;
          z-index: 2;
        }
        .category-card:hover {
          transform: translateY(-6px);
        }
        .bg-green-light {
          background: linear-gradient(to top, rgba(130, 210, 130, 0.2) 0%, rgba(130, 210, 130, 0.05) 40%, white 100%);
        }
        .bg-green {
          background: linear-gradient(to top, rgba(108, 198, 63, 0.2) 0%, rgba(108, 198, 63, 0.05) 40%, white 100%);
        }
        .bg-red {
          background: linear-gradient(to top, rgba(255, 120, 120, 0.22) 0%, rgba(255, 120, 120, 0.06) 40%, white 100%);
        }
        .bg-yellow {
          background: linear-gradient(to top, rgba(250, 220, 150, 0.22) 0%, rgba(250, 220, 150, 0.06) 40%, white 100%);
        }
        .bg-orange {
          background: linear-gradient(to top, rgba(255, 180, 90, 0.22) 0%, rgba(255, 180, 90, 0.06) 40%, white 100%);
        }
        .bg-brown {
          background: linear-gradient(to top, rgba(180, 120, 90, 0.22) 0%, rgba(180, 120, 90, 0.06) 40%, white 100%);
        }
      </style>

      <section class="categories">
        <div class="header-categories">
          <h2>categories</h2>
          <button><p>view all categories</p></button>
        </div>
        <div class="categories-container">

          <div class="category-card bg-green-light">
            <img class="cat-icon" src="./homepage/image 25.png" alt="Breakfast">
            <p>Breakfast</p>
          </div>

          <div class="category-card bg-green">
            <img class="cat-icon" src="./homepage/image 20.svg" alt="Vegan">
            <p>Vegan</p>
          </div>

          <div class="category-card bg-red">
            <img class="cat-icon" src="./homepage/image 21.png" alt="Meat">
            <p>Meat</p>
          </div>

          <div class="category-card bg-yellow">
            <img class="cat-icon" src="./homepage/image 22.png" alt="Dessert">
            <p>Dessert</p>
          </div>

          <div class="category-card bg-orange">
            <img class="cat-icon" src="./homepage/image 23.png" alt="Lunch">
            <p>Lunch</p>
          </div>

          <div class="category-card bg-brown">
            <img class="cat-icon" src="./homepage/image 24.png" alt="Chocolate">
            <p>Chocolate</p>
          </div>

        </div>
      </section>
    `;
  }
}

customElements.define('site-categories', SiteCategories);
