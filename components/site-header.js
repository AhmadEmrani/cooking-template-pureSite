class SiteHeader extends HTMLElement {
  connectedCallback() {
    const logo = this.getAttribute("logo") || "";
    const links = {
      home: this.getAttribute("link-home") || "#",
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

        header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          border-bottom: 1px solid #ccc;
          background: white;
          box-sizing: border-box;
          position: relative;
        }

        .logo-img {
          height: 40px;
          display: block;
        }

        #main-div-header {
          display: flex;
          align-items: center;
          gap: 60px;
          font-family: "Inter", sans-serif;
          font-weight: 600;
        }

        #social-div-header {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
          background: none;
          border: none;
          padding: 0;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background-color: black;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          header {
            padding: 12px 16px;
          }

          .logo-img {
            height: 28px;
          }

          .hamburger {
            display: flex;
          }

          #main-div-header {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            flex-direction: column;
            gap: 18px;
            padding: 16px 0;
            background: white;
            border-bottom: 1px solid #ccc;
            box-shadow: 0 4px 8px rgba(0,0,0,0.08);
            z-index: 10;
          }

          #main-div-header.active {
            display: flex;
          }

          #social-div-header {
            display: none;
          }
        }
      </style>

      <header>
        <img src="${logo}" alt="Foodieland" class="logo-img" />

        <button class="hamburger" id="hamburger-btn" aria-label="Toggle menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="main-div-header">
          <a href="${links.home}">Home</a>
          <a href="${links.recipes}">Recipes</a>
          <a href="${links.blog}">Blog</a>
          <a href="${links.contact}">Contact</a>
          <a href="${links.about}">About us</a>
        </nav>

        <div id="social-div-header">
          <figure><img src="${icons.facebook}" alt="Facebook" /></figure>
          <figure><img src="${icons.twitter}" alt="Twitter" /></figure>
          <figure><img src="${icons.instagram}" alt="Instagram" /></figure>
        </div>
      </header>
    `;

    const btn = this.querySelector("#hamburger-btn");
    const nav = this.querySelector("#main-div-header");

    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("active");
      btn.setAttribute("aria-expanded", String(open));
    });
  }
}

customElements.define("site-header", SiteHeader);
