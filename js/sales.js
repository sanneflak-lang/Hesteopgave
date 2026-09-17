import { createHeader } from "./komponenter/header.js";
import { createHero } from "./komponenter/hero.js";
import { createFooter } from "./komponenter/footer.js";
import { createSalesIntro } from "./komponenter/salesIntro.js";
import { createHorseCards } from "./komponenter/horseList.js";
import { createSalesFilter } from "./komponenter/salesFilter.js";
import { createHorseCard } from "./komponenter/horseCard.js";
import { createSalesPhilosophy } from "./komponenter/salesPhilosophy.js";
import { createSalesProcess } from "./komponenter/salesProcess.js";

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
    ${createSalesPhilosophy()}
    ${createSalesProcess()}
   ${createSalesFilter()} 
    ${createHorseCards(horses)}
    ${createFooter()}
`;

const disciplineFilter = document.querySelector("#disciplineFilter");
const breedFilter = document.querySelector("#breedFilter");
const sexFilter = document.querySelector("#sexFilter");


function filterHorses() {
  const disciplineValue = disciplineFilter.value;
  const breedValue = breedFilter.value;
  const sexValue = sexFilter.value;

  const filteredHorses = horses.filter((horse) => {
    console.log("VALGT:", disciplineValue);
    const matchesDiscipline =
      disciplineValue === "" ||
      horse.discipline.toUpperCase() === disciplineValue.toUpperCase();

    const matchesBreed =
      breedValue === "" ||
      horse.breed.toUpperCase() === breedValue.toUpperCase();

    const matchesSex =
      sexValue === "" || horse.sex.toUpperCase() === sexValue.toUpperCase();

    return matchesDiscipline && matchesBreed && matchesSex;
  });

  
  document.querySelector("#horseGrid").innerHTML = filteredHorses
  .map((horse) => createHorseCard(horse))
  .join("");
  
  console.log(
    "KORT PÅ SIDEN:",
    document.querySelectorAll("#horseGrid .horse-card").length,
  );
}

disciplineFilter.addEventListener("change", filterHorses);

breedFilter.addEventListener("change", filterHorses);

sexFilter.addEventListener("change", filterHorses);