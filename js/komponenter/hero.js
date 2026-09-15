export function createHero({ label, title, image, linkText = "", link = "#" }) {
  return `
        <section class="hero">

            <img 
                src="${image}"
                alt="Horse"
            >

            <div class="hero-overlay"></div>

            <div class="hero-content">

                <span>${label}</span>

                <h1>${title}</h1>

                ${linkText ? `<a href="${link}">${linkText}</a>` : ""}

            </div>

        </section>
    `;
}
