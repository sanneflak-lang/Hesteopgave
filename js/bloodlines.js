import { createHeader } from "./komponenter/header.js";
import { createFooter } from "./komponenter/footer.js";

const response = await fetch("./js/data/bloodlines.json");
const bloodlines = await response.json();

const app = document.querySelector("#app");

app.innerHTML = `
    ${createHeader()}

    <main class="bloodlines">

        <section class="bloodlines-header">
            <span>BLOODLINES</span>
            <h1>EXPLORE OUR BLOODLINES</h1>
            <p>
                Discover the heritage and achievements
                behind our exceptional stallions.
            </p>
        </section>

        <section class="bloodline-list">

            ${bloodlines
              .map(
                (stallion) => `
                <article class="bloodline-card">
                <img src="${stallion.image}" alt="${stallion.name}">

                    <h2>${stallion.name}</h2>

                    <span>
                        ${stallion.breed} · ${stallion.discipline}
                    </span>

                    <a href="./bloodline.html?id=${stallion.id}">
                        EXPLORE BLOODLINE →
                    </a>

                </article>
            `,
              )
              .join("")}

        </section>

    </main>

    ${createFooter()}
`;
