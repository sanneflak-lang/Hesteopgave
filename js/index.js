import { createHeader } from "./komponenter/header.js";
import { createHero } from "./komponenter/hero.js";
import { createAbout } from "./komponenter/about.js";
import { createFeaturedHorses } from "./komponenter/featured.js";
import { createExpertise } from "./komponenter/expertise.js";
import { createFooter } from "./komponenter/footer.js";

const app = document.querySelector("#app");

app.innerHTML = `
    ${createHeader()}
    ${createHero({
      label: "EXCEPTIONAL EQUESTRIAN",
      title: "WHERE EXCELLENCE BEGINS",
      image: "./assets/img/Heste-Middelfart_2500x1667-1.jpg",
      linkText: "EXPLORE HORSES",
      link: "#",
    })}
    ${createAbout()}
    ${createFeaturedHorses()}
    ${createExpertise()}
    ${createFooter()}
`;
