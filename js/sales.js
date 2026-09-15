import { createHeader } from "./komponenter/header.js";
import { createHero } from "./komponenter/hero.js";
import { createFooter } from "./komponenter/footer.js";
import { createSalesIntro } from "./komponenter/salesIntro.js";
import { createHorseCards } from "./komponenter/horseList.js";
 import { createSalesFilter } from "./komponenter/salesFilter.js"; 

const response = await fetch("./js/data/horse.json");
const horses = await response.json();

const app = document.querySelector("#app");

app.innerHTML = `
    ${createHeader()}
    ${createHero({
      label: "SALES",
      title: "FIND YOUR EXCEPTIONAL HORSE",
      image: "./assets/img/Heste-Middelfart_2500x1667-1.jpg",
      linkText: "VIEW HORSES ↓",
      link: "#horses",
    })}
    ${createSalesIntro()}
   ${createSalesFilter()} 
    ${createHorseCards(horses)}
    ${createFooter()}
`;
