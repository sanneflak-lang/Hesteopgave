export function createHeader(){
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
                <a href="breeding.html">BREEDING</a>
                <a href="sales.html">SALES</a>
                <a href="contact.html">CONTACT</a>
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
