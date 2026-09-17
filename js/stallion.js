import { createHeader } from "./komponenter/header.js";
import { createFooter } from "./komponenter/footer.js";

const response = await fetch("./js/data/stallions.json");
const stallions = await response.json();

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const stallion = stallions.find(
  (stallion) => String(stallion.id) === String(id),
);

const app = document.querySelector("#app");

app.innerHTML = `
    ${createHeader()}

    <main class="stallion-detail">

        <div class="stallion-detail-image">
            <img 
                src="${stallion.image}" 
                alt="${stallion.name}"
            >
        </div>

        <div class="stallion-detail-content">

            <span>
                ${stallion.breed} · ${stallion.year}
            </span>

            <h1>${stallion.name}</h1>

            <p>
                ${stallion.discipline} ·
                ${stallion.height}
            </p>

            <h2>
                STUD FEE ${stallion.studFee}
            </h2>
<a href="./breedingBooking.html?id=${stallion.id}">
    BESTIL BEDÆKNING →
</a>

        </div>

    </main>

    ${createFooter()}
`;
