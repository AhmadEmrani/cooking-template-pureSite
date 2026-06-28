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
        :host {
          display: block;
          width: 100%;
        }

        footer {
          margin-top: 50px;
          width: min(80%, 1200px);
          margin-left: auto;
          margin-right: auto;
          font-family: Inter, sans-serif;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-sizing: border-box;
        }

        .upper-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          padding-bottom: 40px;
        }

        .upper-footer-logo {
          display: flex;
          flex-direction: column;
          gap: 15px;
          max-width: 420px;
        }

        .upper-footer-logo img {
          width: 110px;
          display: block;
        }

        .upper-footer-logo p {
          font-weight: 400;
          opacity: 0.6;
          font-size: 16px;
          line-height: 1.6;
        }

        .upper-footer-links {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }

        .upper-footer-links a {
          font-size: 16px;
          color: inherit;
          text-decoration: none;
        }

        #social-div-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          gap: 40px;
          padding-bottom: 10px;
        }

        #social-div-footer img {
          width: 20px;
          height: 20px;
          display: block;
        }

        @media (max-width: 768px) {
          footer {
            width: 100%;
            padding: 0 16px;
            gap: 18px;
          }

          .upper-footer {
            flex-direction: column;
            padding-bottom: 24px;
            gap: 20px;
          }

          .upper-footer-logo {
            max-width: 100%;
            gap: 10px;
          }

          .upper-footer-logo img {
            width: 90px;
          }

          .upper-footer-logo p {
            font-size: 13px;
          }

          .upper-footer-links {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .upper-footer-links a {
            font-size: 14px;
          }

          #social-div-footer {
            gap: 24px;
          }

          #social-div-footer img {
            width: 18px;
            height: 18px;
          }
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
          </div>
        </div>

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
