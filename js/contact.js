import { createHeader } from "./komponenter/header.js";
import { createHero } from "./komponenter/hero.js";
import { createFooter } from "./komponenter/footer.js";
import { createContactIntro } from "./komponenter/contactIntro.js";

const app = document.querySelector("#app");

app.innerHTML = `
    ${createHeader()}

    ${createHero({
      label: "CONTACT",
      title: "LET'S START A CONVERSATION",
      image: "./assets/img/Heste-Middelfart_2500x1667-1.jpg",
      linkText: "GET IN TOUCH ↓",
      link: "#contact",
    })}
    ${createContactIntro()}

    ${createFooter()}
`;
