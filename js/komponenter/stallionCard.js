export function createStallionCard(stallion) {
  return `
        <article class="stallion-card" data-id="${stallion.id}">

            <div class="stallion-image">
                <img
                    src="${stallion.image}"
                    alt="${stallion.name}"
                >
            </div>

            <div class="stallion-info">

                <span>${stallion.breed} · ${stallion.year}</span>

                <h3>${stallion.name}</h3>

                <p>
                    ${stallion.discipline} ·
                    ${stallion.height}
                </p>

                <div class="stallion-bottom">
                    <span>STUD FEE ${stallion.studFee}</span>

                 <a href="./stallion.html?id=${stallion.id}">
    VIEW STALLION →
</a>
                </div>

            </div>

        </article>
    `;
}
