class MembershipBox extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Deliciousness to your inbox";
    const text =
      this.getAttribute("text") ||
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim";
    const placeholder =
      this.getAttribute("placeholder") || "Your email address...";
    const buttonText = this.getAttribute("button-text") || "Subscribe";
    const imgRight = this.getAttribute("img-right") || "./homepage/Photo.png";
    const imgLeft =
      this.getAttribute("img-left") ||
      "./homepage/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png";

    const root = this.attachShadow({ mode: "open" });

    root.innerHTML = `
      <style>
        /* اینجا استایل‌های مربوط به کامپوننت را قرار دهید */
        /* استایل‌هایی که قبلاً در فایل styleHome.css داشتید و مربوط به .membership بود */
        /* مطمئن شوید از ':host' برای استایل خود تگ کامپوننت استفاده می کنید */
        :host {
          display: block; /* یا flex، بسته به نیاز */
          width: 100%;
          margin: 50px auto; /* برای وسط چین کردن و فاصله */
        }

        .membership {
          width: 90%;
          margin: 0 auto; /* این خط برای وسط چین کردن خود section داخل کامپوننت */
          min-height: 450px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 50px;
          flex-direction: column;
          background-color: #E7F9FD;
          border-radius: 30px;
          padding: 40px 20px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .text-membership {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 15px;
          align-items: center;
          margin-bottom: 50px;
          text-align: center;
        }

        .text-membership h2 {
          font-size: 48px;
          font-weight: 600;
          letter-spacing: -0.04em; /* اصلاح شده */
          margin: 0;
        }

        .text-membership p {
          font-size: 16px;
          color: #000000;
          opacity: 0.6;
          max-width: 600px;
          margin: 0;
        }

        .input-container-member {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 450px;
          height: 80px;
          border-radius: 30px;
          background-color: white;
          box-sizing: border-box;
          padding: 0 0 0 0;
        }

        .input-container-member input {
          outline: none;
          border: none;
          width: 80%;
          padding: 10px 20px;
          border-radius: inherit;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
          font: inherit;
          box-sizing: border-box;
        }

        .input-container-member button {
          outline: none;
          border: none;
          background-color: #000000;
          color: #ffffff;
          width: 160px;
          height: 60px;
          border-radius: 16px;
          margin-right: 20px;
          cursor: pointer;
          font: inherit;
        }

        #image-right-member {
          position: absolute;
          right: 0px;
          bottom: 0px;
          border-bottom-right-radius: inherit;
          max-width: 45%;
          height: auto;
          pointer-events: none;
        }

        #image-left-member {
          position: absolute;
          bottom: 0px;
          left: 0px;
          border-bottom-left-radius: inherit;
          max-width: 45%;
          height: auto;
          pointer-events: none;
        }
      </style>

      <section class="membership">
        <img src="${imgRight}" alt="membership right" id="image-right-member">
        <img src="${imgLeft}" alt="membership left" id="image-left-member">

        <div class="text-membership">
          <h2>${title}</h2>
          <p>${text}</p>
        </div>

        <form class="input-container-member">
          <input name="email" type="email" placeholder="${placeholder}" required>
          <button type="submit">${buttonText}</button>
        </form>
      </section>
    `;

    const form = root.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = root.querySelector('input[name="email"]').value.trim();

      this.dispatchEvent(
        new CustomEvent("subscribe", {
          detail: { email },
          bubbles: true,
          composed: true,
        }),
      );
    });
  }
}

customElements.define("membership-box", MembershipBox);
