import { createHero } from "./komponenter/hero.js";
import { createOurStory } from "./komponenter/ourStory.js";
import { createTeam } from "./komponenter/team.js";
import { createValues } from "./komponenter/values.js";
import { createFacilities } from "./komponenter/facilities.js";
import { createAboutCTA } from "./komponenter/aboutCTA.js";
import { createHeader } from "./komponenter/header.js";
import { createFooter } from "./komponenter/footer.js";

const app = document.querySelector("#app");

app.innerHTML = `
    ${createHeader()}
    ${createHero({
      label: "ABOUT EQUORIA",
      title: "WHERE PASSION MEETS BLOODLINES",
      image: "./assets/img/Heste-Middelfart_2500x1667-1.jpg",
      linkText: "",
      link: "#",
    })}
    ${createOurStory()}
    ${createValues()}
    ${createTeam()}
    ${createFacilities()}
    ${createAboutCTA()}
    ${createFooter()}
`;
