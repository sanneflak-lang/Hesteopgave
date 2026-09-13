const app = document.querySelector("#app");

// NAVBAR

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

                <a href="showHorse.html">SHOW HORSE</a>

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

// HERO

function createShowHorseHero() {
  return `
        <section class="show-hero">

            <img
                src="./assets/img/Heste-Middelfart_2500x1667-1.jpg"
                alt="Horse"
            >

            <div class="show-hero-overlay"></div>

            <div class="show-hero-content">

                <span>SHOW HORSE</span>

                <h1>
                    FIND YOUR NEXT<br>
                    EXCEPTIONAL HORSE
                </h1>

                <a href="#horses">
                    VIEW HORSES ↓
                </a>

            </div>

        </section>
    `;
}

// FILTER

function createHorseFilter() {
  return `
        <section class="horse-filter">

            <div class="filter-header">

                <span>FIND YOUR HORSE</span>

                <h2>
                    EXPLORE OUR HORSES
                </h2>

            </div>


            <div class="filter">

                <input
                    type="text"
                    placeholder="Search horse..."
                >


                <select>
                    <option value="">DISCIPLINE</option>
                    <option value="dressage">Dressage</option>
                    <option value="jumping">Jumping</option>
                    <option value="eventing">Eventing</option>
                </select>


                <select>
                    <option value="">BREED</option>
                    <option value="kwpn">KWPN</option>
                    <option value="holsteiner">Holsteiner</option>
                    <option value="hannoveraner">Hannoveraner</option>
                </select>


                <select>
                    <option value="">AGE</option>
                    <option value="young">4–7 years</option>
                    <option value="adult">8–12 years</option>
                    <option value="senior">13+ years</option>
                </select>


                <select>
                    <option value="">SEX</option>
                    <option value="mare">Mare</option>
                    <option value="stallion">Stallion</option>
                    <option value="gelding">Gelding</option>
                </select>

            </div>

        </section>
    `;
}

// HORSE CARDS

function createHorseCards() {
  return `
        <section class="horses" id="horses">

            <div class="horses-top">

                <span>OUR COLLECTION</span>

                <p>6 HORSES</p>

            </div>


            <div class="horse-grid">


                <article class="horse-card">

                    <img
                        src="./assets/img/hest1.jpeg"
                        alt="Luna af Rosenholm"
                    >

                    <div class="horse-info">

                        <h3>LUNA AF ROSENHOLM</h3>

                        <p>KWPN · MARE · 2019 · 168 CM</p>

                        <div class="horse-bottom">

                            <span>€45.000</span>

                            <a href="#">
                                VIEW HORSE →
                            </a>

                        </div>

                    </div>

                </article>


                <article class="horse-card">

                    <img
                        src="./assets/img/hest2.png"
                        alt="Valentino Z"
                    >

                    <div class="horse-info">

                        <h3>VALENTINO Z</h3>

                        <p>KWPN · STALLION · 2018 · 172 CM</p>

                        <div class="horse-bottom">

                            <span>€80.000</span>

                            <a href="#">
                                VIEW HORSE →
                            </a>

                        </div>

                    </div>

                </article>


                <article class="horse-card">

                    <img
                        src="./assets/img/hest3.jpeg"
                        alt="Equoria horse"
                    >

                    <div class="horse-info">

                        <h3>ROSENHOLM'S LILY</h3>

                        <p>KWPN · MARE · 2020 · 166 CM</p>

                        <div class="horse-bottom">

                            <span>€55.000</span>

                            <a href="#">
                                VIEW HORSE →
                            </a>

                        </div>

                    </div>

                </article>


                <article class="horse-card">

                    <img
                        src="./assets/img/hest4.png"
                        alt="Equoria horse"
                    >

                    <div class="horse-info">

                        <h3>ARABELLA Z</h3>

                        <p>HOLSTEINER · MARE · 2019 · 170 CM</p>

                        <div class="horse-bottom">

                            <span>€62.000</span>

                            <a href="#">
                                VIEW HORSE →
                            </a>

                        </div>

                    </div>

                </article>


                <article class="horse-card">

                    <img
                        src="./assets/img/hest5.jpeg"
                        alt="Equoria horse"
                    >

                    <div class="horse-info">

                        <h3>DON VINCENZO</h3>

                        <p>KWPN · GELDING · 2017 · 175 CM</p>

                        <div class="horse-bottom">

                            <span>€48.000</span>

                            <a href="#">
                                VIEW HORSE →
                            </a>

                        </div>

                    </div>

                </article>


                <article class="horse-card">

                    <img
                        src="./assets/img/hest6.jpeg"
                        alt="Equoria horse"
                    >

                    <div class="horse-info">

                        <h3>ELLA ROSA</h3>

                        <p>HANNOVERANER · MARE · 2021 · 165 CM</p>

                        <div class="horse-bottom">

                            <span>€38.000</span>

                            <a href="#">
                                VIEW HORSE →
                            </a>

                        </div>

                    </div>

                </article>


            </div>

        </section>
    `;
}

// FEATURED HORSE

function createFeaturedHorse() {
  return `
        <section class="featured-horse">

            <div class="featured-image">

                <img
                    src="./assets/img/hest7.jpeg"
                    alt="Valentino Z"
                >

            </div>


            <div class="featured-content">

                <span>FEATURED HORSE</span>

                <h2>
                    VALENTINO Z
                </h2>

                <p class="featured-details">
                    KWPN · STALLION · 2018
                </p>

                <p>
                    A remarkable stallion with exceptional
                    movement, presence and a distinguished
                    bloodline.
                </p>

                <a href="#">
                    VIEW PROFILE →
                </a>

            </div>

        </section>
    `;
}

// BLOODLINE

function createBloodlineSection() {
  return `
        <section class="bloodline">

            <div class="bloodline-content">

                <span>MORE THAN A HORSE</span>

                <h2>
                    THE BLOODLINE<br>
                    MATTERS.
                </h2>

                <p>
                    Discover the generations behind some
                    of Equoria's exceptional horses.
                </p>

                <a href="#">
                    EXPLORE BLOODLINES →
                </a>

            </div>

        </section>
    `;
}

// FOOTER

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
                    <a href="./show-horse.html">Show Horse</a>
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

                <p>
                    © 2026 EQUORIA. ALL RIGHTS RESERVED.
                </p>

            </div>

        </footer>
    `;
}

// BUILD PAGE

app.innerHTML = `
    ${createHeader()}
    ${createShowHorseHero()}
    ${createHorseFilter()}
    ${createHorseCards()}
    ${createFeaturedHorse()}
    ${createBloodlineSection()}
    ${createFooter()}
`;
