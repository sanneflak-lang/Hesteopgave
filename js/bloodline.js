import { createHeader } from "./komponenter/header.js";
import { createFooter } from "./komponenter/footer.js";

const response = await fetch("./js/data/bloodlines.json");
const bloodlines = await response.json();

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const stallion = bloodlines.find(
  (stallion) => String(stallion.id) === String(id),
);

const app = document.querySelector("#app");

app.innerHTML = `
    ${createHeader()}

    <main class="bloodline-detail">

        <section class="bloodline-detail-header">

            <span>BLOODLINE</span>

            <h1>${stallion.name}</h1>

            <p>
                ${stallion.breed} · ${stallion.discipline}
            </p>

        </section>


        <section class="pedigree">

            <div class="section-title">
                <span>PEDIGREE</span>
                <h2>THE BLOODLINE</h2>
            </div>

            <div class="pedigree-grid">

                <div class="pedigree-card">
                    <span>SIRE</span>

                    <h3>${stallion.bloodline.sire.name}</h3>

                    <p>
                        Sire: ${stallion.bloodline.sire.sire}<br>
                        Dam: ${stallion.bloodline.sire.dam}
                    </p>
                </div>


                <div class="pedigree-card">
                    <span>DAM</span>

                    <h3>${stallion.bloodline.dam.name}</h3>

                    <p>
                        Sire: ${stallion.bloodline.dam.sire}<br>
                        Dam: ${stallion.bloodline.dam.dam}
                    </p>
                </div>

            </div>

        </section>


        <section class="approvals">

            <div class="section-title">
                <span>APPROVALS</span>
                <h2>RECOGNITION</h2>
            </div>

            <div class="approval-list">

                ${stallion.approvals
                  .map(
                    (approval) => `
                    <div class="approval-item">

                        <span>${approval.year}</span>

                        <div>
                            <h3>${approval.title}</h3>
                            <p>${approval.event}</p>
                        </div>

                    </div>
                `,
                  )
                  .join("")}

            </div>

        </section>


        <section class="achievements">

            <div class="section-title">
                <span>ACHIEVEMENTS</span>
                <h2>A LEGACY IN SPORT</h2>
            </div>

            <div class="achievement-list">

                ${stallion.achievements
                  .map(
                    (achievement) => `
                    <div class="achievement-item">

                        <span>${achievement.year}</span>

                        <div>
                            <h3>${achievement.title}</h3>
                            ${achievement.event ? `<p>${achievement.event}</p>` : ""}
                        </div>

                    </div>
                `,
                  )
                  .join("")}

            </div>

        </section>

    </main>

    ${createFooter()}
`;
