class SiteHeader extends HTMLElement {
  connectedCallback() {
    const logo = this.getAttribute('logo') || '';
    const links = {
      home: this.getAttribute('link-home') || '#',
      recipes: this.getAttribute('link-recipes') || '#',
      blog: this.getAttribute('link-blog') || '#',
      contact: this.getAttribute('link-contact') || '#',
      about: this.getAttribute('link-about') || '#',
    };
    const icons = {
      facebook: this.getAttribute('icon-facebook') || '',
      twitter: this.getAttribute('icon-twitter') || '',
      instagram: this.getAttribute('icon-instagram') || '',
    };

    this.innerHTML = `
      <style>
        header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px 60px;
          border-bottom: 1px solid #ccc;
        }
        #main-div-header {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          gap: 60px;
          font-family: "Inter";
          font-weight: 600;
        }
        #social-div-header {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          gap: 40px;
        }
      </style>
      <header>
        <img src="${logo}" alt="Foodieland" />
        <div id="main-div-header">
          <a href="${links.home}">Home</a>
          <a href="${links.recipes}">Recipes</a>
          <a href="${links.blog}">Blog</a>
          <a href="${links.contact}">Contact</a>
          <a href="${links.about}">About us</a>
        </div>
        <div id="social-div-header">
          <figure><img src="${icons.facebook}" alt="Facebook" /></figure>
          <figure><img src="${icons.twitter}" alt="Twitter" /></figure>
          <figure><img src="${icons.instagram}" alt="Instagram" /></figure>
        </div>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
