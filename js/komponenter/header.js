export function createHeader() {
  return `
    <header class="header">

      <img class="logo" src="./assets/img/logo.png" alt="Equoria logo">

      <nav class="nav">
        <a href="index.html">HOME</a>
        <a href="about.html">ABOUT</a>
        <a href="breeding.html">BREEDING</a>
        <a href="sales.html">SALES</a>
        <a href="contact.html">CONTACT</a>
      </nav>

      <div class="socials">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>

      <button class="burger-menu" id="burgerMenu" aria-label="Open menu">
    <i class="fas fa-bars"></i>
</button>

    </header>

    <nav class="mobile-nav" id="mobileNav">
      <a href="index.html">HOME</a>
      <a href="about.html">ABOUT</a>
      <a href="breeding.html">BREEDING</a>
      <a href="sales.html">SALES</a>
      <a href="contact.html">CONTACT</a>
    </nav>
  `;
}


