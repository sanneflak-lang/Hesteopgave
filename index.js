const app = document.querySelector("#app");

app.innerHTML = `
    <h1>Equoria</h1>
`;

function createHeader() {
  return `
        <header class="header">

            <img 
                class="logo" 
                src="./assets/img/logo.png" 
                alt="Equoria logo"
            >

            <nav class="nav">
                <a href="index.html">HOME</a>
                <a href="about.html">ABOUT</a>
                <a href="#">SHOW HORSE</a>
                <a href="#">BREEDING</a>
                <a href="#">SALES</a>
                <a href="#">NEWS</a>
                <a href="#">CONTACT</a>
            </nav>

            <div class="socials">
                <a href="#">f</a>
                <a href="#">◎</a>
            </div>

            <button class="burger-menu">
                ☰
            </button>

        </header>

    `;
}

function createHero() {
  return `
        <section class="hero">

            <img 
                src="./assets/img/Heste-Middelfart_2500x1667-1.jpg"
                alt="Horse"
            >

            <div class="hero-content">
                <span>EXCEPTIONAL EQUESTRIAN</span>

                <h1>WHERE EXCELLENCE BEGINS</h1>

                <a href="#">EXPLORE HORSES</a>
            </div>

        </section>
    `;
}

function createAbout() {
  return `
        <section class="about">

            <div class="about-text">
                <h2>MORE THAN A<br>HORSE.<br>A BLOODLINE.</h2>

                <p>
                    At Equoria, we believe every exceptional horse has a story.
                    From generations of distinguished bloodlines to future
                    champions, every detail matters.
                </p>
            </div>

            <div class="about-image">
                <img 
                    src="./assets/img/pigeoghest.png"
                    alt="Horse and rider"
                >
            </div>

        </section>
    `;
}

function createFeaturedHorses() {
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

function createExpertise() {
  return `
        <section class="expertise">

            <div class="expertise-header">
                <span>OUR EXPERTISE</span>
                <h2>EVERY HORSE HAS A STORY</h2>
                <p>Discover the generations behind exceptional horses.</p>
            </div>

            <div class="expertise-cards">

                <article class="expertise-card">
                    <img 
                        src="./assets/img/equoria_horse_card_1.png"
                        alt="Horse"
                    >

                    <h3>HORSES</h3>

                    <p>
                        Discover exceptional horses.
                    </p>

                    <a href="#">EXPLORE HORSES →</a>
                </article>


                <article class="expertise-card">
                    <img 
                        src="./assets/img/equoria_horse_card_2.png"
                        alt="Horse bloodline"
                    >

                    <h3>BLOODLINES</h3>

                    <p>
                        Explore the generations behind every horse.
                    </p>

                    <a href="#">EXPLORE BLOODLINES →</a>
                </article>


                <article class="expertise-card">
                    <img 
                        src="./assets/img/equoria_horse_card_3.png"
                        alt="Mare and foal"
                    >

                    <h3>BREEDING</h3>

                    <p>
                        Where exceptional bloodlines meet.
                    </p>

                    <a href="#">EXPLORE BREEDING →</a>
                </article>

            </div>

        </section>
    `;
}

function createFooter() {
  return `
        <footer class="footer">

            <div class="footer-top">

                <div class="footer-brand">

                    <img 
                        src="./assets/img/logo.png"
                        alt="Equoria logo"
                    >

                    <p>
                        Exceptional horses.<br>
                        Lasting legacies.
                    </p>

                </div>


                <div class="footer-column">

                    <h3>EXPLORE</h3>

                    <a href="./index.html">Home</a>
                    <a href="./about.html">About</a>
                    <a href="#">Horses</a>
                    <a href="#">Breeding</a>

                </div>


                <div class="footer-column">

                    <h3>HELP</h3>

                    <a href="#">Contact</a>
                    <a href="#">FAQ</a>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>

                </div>


                <div class="footer-column">

                    <h3>CONTACT</h3>

                    <p>info@equoria.dk</p>
                    <p>+45 00 00 00 00</p>
                    <p>Denmark</p>

                </div>


                <div class="footer-column">

                    <h3>FOLLOW US</h3>

                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>

                </div>

            </div>


            <div class="footer-bottom">

                <p>© 2026 EQUORIA. ALL RIGHTS RESERVED.</p>

            </div>

        </footer>
    `;
}



app.innerHTML = `
    ${createHeader()}
    ${createHero()}
    ${createAbout()}
    ${createFeaturedHorses()}
    ${createExpertise()}
    ${createFooter()}
`;


