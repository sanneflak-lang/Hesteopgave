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
                        src="./assets/img/sales1.png"
                        alt="Luna af Rosenholm"
                    >
                   <div class="text">
                    <h3>LUNA AF ROSENHOLM</h3>

                    <p>KWPN · MARE · 2019</p>

                    <span>€45.000</span>
                       </div>
                </article>


                <article class="horse-card">

                    <img 
                        src="./assets/img/sales2.png"
                        alt="Valentino Z"
                    >
                  <div class="text">
                    <h3>VALENTINO Z</h3>

                    <p>KWPN · STALLION · DRESSAGE</p>

                    <span>€80.000</span>
                    </div>
                </article>

            </div>

        </section>
    `;
}
