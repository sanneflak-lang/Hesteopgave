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

function createAboutHero() {
  return `
        <section class="about-hero">

            <img 
                src="./assets/img/Heste-Middelfart_2500x1667-1.jpg"
                alt="Horse"
            >

            <div class="about-hero-overlay"></div>

            <div class="about-hero-content">
                <span>ABOUT EQUORIA</span>

                <h1>
                    WHERE PASSION<br>
                    MEETS BLOODLINES
                </h1>
            </div>

        </section>
    `;
}

// OUR STORY

function createOurStory() {
  return `
        <section class="our-story">

            <div class="story-image">
                <img 
                    src="./assets/img/equoria_horse_card_1.png"
                    alt="Equestrian horse"
                >
            </div>

            <div class="story-content">

                <span>OUR STORY</span>

                <h2>
                    BUILT ON PASSION.<br>
                    GUIDED BY HERITAGE.
                </h2>

                <p>
                    Equoria was created from a passion for exceptional
                    horses and the stories that live within their
                    bloodlines.
                </p>

                <p>
                    We believe that finding the right horse is about
                    more than appearance or performance. It is about
                    understanding its history, qualities and potential.
                </p>

                <p>
                    Our vision is to create a place where horses,
                    breeders and passionate equestrians can come
                    together.
                </p>

            </div>

        </section>
    `;
}

// WHAT WE BELIEVE IN

function createValues() {
  return `
        <section class="values">

            <div class="values-header">

                <span>WHAT WE BELIEVE IN</span>

                <h2>
                    THE VALUES BEHIND<br>
                    EQUORIA
                </h2>

            </div>


            <div class="value-cards">

                <article class="value-card">
                    <span>01</span>

                    <h3>QUALITY</h3>

                    <p>
                        We carefully select horses with
                        exceptional qualities and potential.
                    </p>
                </article>


                <article class="value-card">
                    <span>02</span>

                    <h3>WELFARE</h3>

                    <p>
                        Every horse deserves respect,
                        care and the right environment.
                    </p>
                </article>


                <article class="value-card">
                    <span>03</span>

                    <h3>HERITAGE</h3>

                    <p>
                        Bloodlines tell a story. We believe
                        in preserving and understanding it.
                    </p>
                </article>


                <article class="value-card">
                    <span>04</span>

                    <h3>TRUST</h3>

                    <p>
                        Honest relationships and transparency
                        are at the heart of what we do.
                    </p>
                </article>

            </div>

        </section>
    `;
}

// MEET THE TEAM

function createTeam() {
  return `
        <section class="team">

            <div class="team-header">

                <span>THE PEOPLE BEHIND EQUORIA</span>

                <h2>MEET THE TEAM</h2>

                <p>
                    A shared passion for horses, breeding and
                    creating lasting connections.
                </p>

            </div>


            <div class="team-cards">

                <article class="team-card">

                    <div class="team-image">
                        <img 
                            src="./assets/img/founder.jpeg"
                            alt="Equoria team"
                        >
                    </div>

                    <h3>FOUNDER</h3>

                    <p>Equestrian & Founder</p>

                </article>


                <article class="team-card">

                    <div class="team-image">
                        <img 
                            src="./assets/img/breed.jpeg"
                            alt="Equoria team"
                        >
                    </div>

                    <h3>BREEDING</h3>

                    <p>Bloodline Specialist</p>

                </article>


                <article class="team-card">

                    <div class="team-image">
                        <img 
                            src="./assets/img/sales.jpeg"
                            alt="Equoria team"
                        >
                    </div>

                    <h3>SALES</h3>

                    <p>Horse Sales Consultant</p>

                </article>

            </div>

        </section>
    `;
}

// OUR FACILITIES

function createFacilities() {
  return `
        <section class="facilities">

            <div class="facilities-image">

                <img 
                    src="./assets/img/stalden.jpeg"
                    alt="Equestrian facilities"
                >

            </div>


            <div class="facilities-content">

                <span>OUR FACILITIES</span>

                <h2>
                    A PLACE FOR<br>
                    EXCEPTIONAL HORSES
                </h2>

                <p>
                    Our surroundings are an important part of
                    the Equoria experience.
                </p>

                <p>
                    From peaceful stables to carefully considered
                    spaces, every detail is created with the
                    wellbeing of the horse in mind.
                </p>

                <a href="#">
                    DISCOVER OUR FACILITIES →
                </a>

            </div>

        </section>
    `;
}

// CTA

function createAboutCTA() {
  return `
        <section class="about-cta">

            <span>THE EQUORIA PHILOSOPHY</span>

            <h2>
                OUR HORSES.<br>
                OUR HERITAGE.<br>
                OUR FUTURE.
            </h2>

            <a href="#">
                EXPLORE OUR HORSES →
            </a>

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

// INSERT EVERYTHING

app.innerHTML = `
    ${createHeader()}
    ${createAboutHero()}
    ${createOurStory()}
    ${createValues()}
    ${createTeam()}
    ${createFacilities()}
    ${createAboutCTA()}
    ${createFooter()}
`;
