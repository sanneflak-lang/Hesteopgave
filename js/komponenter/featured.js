export function createFeaturedHorses() {
  return `
        <section class="featured-horses">

            <div class="featured-header">
                <h2>FEATURED HORSES</h2>
                <p>Exceptional horses, carefully selected.</p>
            </div>

            <div class="horse-cards">

                <article class="horse-card">
                    <img 
                        src="./assets/img/hvidhest2.jpeg"
                        alt="Luna af Rosenholm"
                    >

                    <h3>LUNA AF ROSENHOLM</h3>

                    <p>KWPN · MARE · 2019</p>

                    <span>€45.000</span>
                </article>


                <article class="horse-card">
                    <img 
                        src="./assets/img/hvidhest1.jpg"
                        alt="Valentino Z"
                    >

                    <h3>VALENTINO Z</h3>

                    <p>KWPN · STALLION · DRESSAGE</p>

                    <span>€80.000</span>
                </article>

            </div>

        </section>
    `;
}
