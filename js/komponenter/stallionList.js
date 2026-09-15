import { createStallionCard } from "./stallionCard.js";

export function createStallionList(stallions) {
  return `
        <section class="stallions" id="stallions">

            <div class="stallions-header">
                <span>OUR STALLIONS</span>

                <h2>
                    MEET THE SIRES<br>
                    BEHIND THE NEXT GENERATION
                </h2>
            </div>

            <div class="stallion-grid">
                ${stallions.map(createStallionCard).join("")}
            </div>

        </section>
    `;
}
