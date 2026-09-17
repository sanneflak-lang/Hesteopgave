import { createHeader } from "./komponenter/header.js";
import { createFooter } from "./komponenter/footer.js";
import { createHero } from "./komponenter/hero.js";
import { createHorseFilter } from "./komponenter/horseFilter.js";
import { createHorseCards } from "./komponenter/horseList.js";
import { createFeaturedHorse } from "./komponenter/featuredHorse.js";
import { createBloodlineSection } from "./komponenter/bloodline.js";
import { createHorseCard } from "./komponenter/horseCard.js";

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

const searchInput = document.querySelector("#searchInput");
const disciplineFilter = document.querySelector("#disciplineFilter");
const breedFilter = document.querySelector("#breedFilter");
const ageFilter = document.querySelector("#ageFilter");
const sexFilter = document.querySelector("#sexFilter");

function filterHorses() {
  const searchValue = searchInput.value.toLowerCase();
  const disciplineValue = disciplineFilter.value;
  const breedValue = breedFilter.value;
  const ageValue = ageFilter.value;
  const sexValue = sexFilter.value;

  const filteredHorses = horses.filter((horse) => {
    const matchesSearch = horse.name.toLowerCase().includes(searchValue);

    const matchesDiscipline =
      disciplineValue === "" || horse.discipline === disciplineValue;

    const matchesBreed = breedValue === "" || horse.breed === breedValue;

    const matchesSex = sexValue === "" || horse.sex === sexValue;

    const matchesAge =
      ageValue === "" ||
      (ageValue === "young" && horse.age >= 4 && horse.age <= 7) ||
      (ageValue === "adult" && horse.age >= 8 && horse.age <= 12) ||
      (ageValue === "senior" && horse.age >= 13);

    return (
      matchesSearch &&
      matchesDiscipline &&
      matchesBreed &&
      matchesAge &&
      matchesSex
    );
  });

  document.querySelector("#horseGrid").innerHTML = filteredHorses
    .map((horse) => createHorseCard(horse))
    .join("");
}

searchInput.addEventListener("input", filterHorses);

disciplineFilter.addEventListener("change", filterHorses);

breedFilter.addEventListener("change", filterHorses);

ageFilter.addEventListener("change", filterHorses);

sexFilter.addEventListener("change", filterHorses);