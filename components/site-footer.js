class SiteFooter extends HTMLElement {
  connectedCallback() {
    const logo = this.getAttribute("logo") || "";
    const description = this.getAttribute("description") || "";
    const links = {
      recipes: this.getAttribute("link-recipes") || "#",
      blog: this.getAttribute("link-blog") || "#",
      contact: this.getAttribute("link-contact") || "#",
      about: this.getAttribute("link-about") || "#",
    };
    const icons = {
      facebook: this.getAttribute("icon-facebook") || "",
      twitter: this.getAttribute("icon-twitter") || "",
      instagram: this.getAttribute("icon-instagram") || "",
    };

    this.innerHTML = `
      <style>
        footer {
          margin-top: 50px;
          font-family: inter;
          width: 80%;
          display: flex;
          margin: auto;
          flex-direction: column;
          gap: 10px;
        }
        .upper-footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          padding-bottom: 40px;
        }
        .upper-footer-logo {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .upper-footer-logo img {
          width: 110px;
        }
        .upper-footer-logo p {
          font-weight: 400;
          opacity: 60%;
        }
        .upper-footer-links {
          width: 30%;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          align-items: center;
        }
        #social-div-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          gap: 40px;
          margin-top: 40px;
        }
      </style>
      <footer>
        <div class="upper-footer">
          <div class="upper-footer-logo">
            <img src="${logo}" alt="logo" />
            <p>${description}</p>
          </div>
          <div class="upper-footer-links">
            <a href="${links.recipes}">Recipes</a>
            <a href="${links.blog}">Blog</a>
            <a href="${links.contact}">Contact</a>
            <a href="${links.about}">About us</a>
          </div></div>
        <div id="social-div-footer">
          <img src="${icons.facebook}" alt="facebook" />
          <img src="${icons.twitter}" alt="twitter" />
          <img src="${icons.instagram}" alt="instagram" />
        </div>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
