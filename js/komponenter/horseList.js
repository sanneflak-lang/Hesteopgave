import { createHorseCard } from "./horseCard.js";

export function createHorseCards(list) {
  return `
        <section class="horses" id="horses">

            <div class="horses-top">

                <span>OUR COLLECTION</span>

                <p id="horseCount">
                    ${list.length} HORSES
                </p>

            </div>

            <div class="horse-grid" id="horseGrid">

                ${list.map(createHorseCard).join("")}

            </div>

        </section>
    `;
}
