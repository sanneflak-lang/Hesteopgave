import { createHeader } from "./komponenter/header.js";
import { createFooter } from "./komponenter/footer.js";
import { createHero } from "./komponenter/hero.js";
import { createHorseFilter } from "./komponenter/horseFilter.js";
import { createHorseCards } from "./komponenter/horseList.js";
import { createFeaturedHorse } from "./komponenter/featuredHorse.js";
import { createBloodlineSection } from "./komponenter/bloodline.js";

const app = document.querySelector("#app");

const response = await fetch("./js/data/horse.json");
const horses = await response.json();



app.innerHTML = `
    ${createHeader()}
    ${createHero({
      label: "SHOW HORSE",
      title: "FIND YOUR NEXT EXCEPTIONAL HORSE",
      image: "./assets/img/Heste-Middelfart_2500x1667-1.jpg",
      linkText: "VIEW HORSES ↓",
      link: "#horses",
    })}
    ${createHorseFilter()}
    ${createHorseCards(horses)}
    ${createFeaturedHorse()}
    ${createBloodlineSection()}
    ${createFooter()}
`;