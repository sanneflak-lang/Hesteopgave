export function createHorseCard(horse) {
  return `
        <article class="horse-card">

            <img
                src="${horse.image}"
                alt="${horse.name}"
            >

            <div class="horse-info">

                <h3>${horse.name}</h3>

                <p>
                    ${horse.breed} ·
                    ${horse.sex} ·
                    ${horse.age} YEARS ·
                    ${horse.height}
                </p>

                <div class="horse-bottom">

                    <span>${horse.price}</span>
                    <a href="./horse.html?id=${horse.id}">
                       VIEW HORSE →
                   </a>

                </div>

            </div>

        </article>
    `;
}
