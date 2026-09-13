const app = document.querySelector("#app");

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

app.innerHTML = `
    ${createHeader()}
    ${createAboutHero()}
`;
