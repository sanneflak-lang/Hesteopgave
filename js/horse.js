import { createHeader } from "./komponenter/header.js";
import { createFooter } from "./komponenter/footer.js";

const response = await fetch("./js/data/horse.json");
const horses = await response.json();

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const horse = horses.find((horse) => String(horse.id) === String(id));

const app = document.querySelector("#app");

app.innerHTML = `
    ${createHeader()}

    <main class="horse-detail">

        <div class="horse-detail-image">
            <img src="${horse.image}" alt="${horse.name}">
        </div>

        <div class="horse-detail-content">

            <span>${horse.breed} · ${horse.discipline}</span>

            <h1>${horse.name}</h1>

            <p>
                ${horse.sex} ·
                ${horse.age} YEARS ·
                ${horse.height}
            </p>

            <h2>${horse.price}</h2>

        </div>

    </main>

    ${createFooter()}
`;
