import { createHeader } from "./komponenter/header.js";
import { createFooter } from "./komponenter/footer.js";

const response = await fetch("./js/data/stallions.json");
const stallions = await response.json();

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("ID FRA URL:", id);
console.log("STALLIONS:", stallions);

const stallion = stallions.find(
  (stallion) => String(stallion.id) === String(id),
);

const app = document.querySelector("#app");

app.innerHTML = `
    ${createHeader()}

    <main class="breeding-booking">

        <div class="booking-header">
            <span>BREEDING</span>

            <h1>BOOK A BREEDING</h1>

            <p>
                ${stallion.name}
                · ${stallion.breed}
                · ${stallion.discipline}
            </p>
        </div>

        <form class="breeding-form">

            <label>
                YOUR NAME
                <input type="text" required>
            </label>

            <label>
                EMAIL
                <input type="email" required>
            </label>

            <label>
                PHONE
                <input type="tel" required>
            </label>

            <label>
                YOUR MARE
                <input type="text" required>
            </label>

            <button type="submit">
                REQUEST BREEDING →
            </button>

        </form>

    </main>

    ${createFooter()}
`;
    const form = document.querySelector(".breeding-form");
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    
      form.innerHTML = `
            <div class="booking-success">
    
                <span>BOOKING CONFIRMED</span>
    
                <h2>YOUR BREEDING<br>IS NOW BOOKED.</h2>
    
                <p>
                    Thank you for choosing Equoria.
                    We will contact you shortly with
                    further information about your booking.
                </p>
    
                <a href="./breeding.html">
                    BACK TO STALLIONS →
                </a>
    
            </div>
        `;
    });
