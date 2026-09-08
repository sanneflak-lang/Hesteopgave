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
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
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


app.innerHTML = `
    ${createHeader()}
    ${createHero()}
    ${createAbout()}
`;
