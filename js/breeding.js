import { createHeader } from "./komponenter/header.js";
import { createHero } from "./komponenter/hero.js";
import { createBreedingIntro } from "./komponenter/breedingIntro.js";
import { createStallionList } from "./komponenter/stallionList.js";
import { createFooter } from "./komponenter/footer.js";

const app = document.querySelector("#app");

const response = await fetch("./js/data/stallions.json");
const stallions = await response.json();

app.innerHTML = `
    ${createHeader()}
    ${createHero({
      label: "BREEDING",
      title: "WHERE GREATNESS BEGINS",
      image: "./assets/img/Heste-Middelfart_2500x1667-1.jpg",
      linkText: "EXPLORE STALLIONS ↓",
      link: "#stallions",
    })}
    ${createBreedingIntro()}
    ${createStallionList(stallions)}
    ${createFooter()}
`;

const stallionCards = document.querySelectorAll(".stallion-card");
console.log("ANTAL CARDS:", stallionCards.length);

stallionCards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;

    const stallion = stallions.find((stallion) => stallion.id === id);

    console.log("Valgt hingst:", stallion);
  });
});
