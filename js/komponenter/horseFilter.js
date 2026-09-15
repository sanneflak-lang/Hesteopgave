export function createHorseFilter() {
  return `
        <section class="horse-filter">

            <div class="filter-header">

                <span>FIND YOUR HORSE</span>

                <h2>EXPLORE OUR HORSES</h2>

            </div>

            <div class="filter">

                <input
                    id="searchInput"
                    type="text"
                    placeholder="Search horse..."
                >

                <select id="disciplineFilter">

                    <option value="">DISCIPLINE</option>

                    <option value="DRESSAGE">
                        Dressage
                    </option>

                    <option value="JUMPING">
                        Jumping
                    </option>

                    <option value="EVENTING">
                        Eventing
                    </option>

                </select>

                <select id="breedFilter">

                    <option value="">BREED</option>

                    <option value="KWPN">
                        KWPN
                    </option>

                    <option value="HOLSTEINER">
                        Holsteiner
                    </option>

                    <option value="HANNOVERANER">
                        Hannoveraner
                    </option>

                </select>

                <select id="ageFilter">

                    <option value="">AGE</option>

                    <option value="young">
                        4–7 years
                    </option>

                    <option value="adult">
                        8–12 years
                    </option>

                    <option value="senior">
                        13+ years
                    </option>

                </select>

                <select id="sexFilter">

                    <option value="">SEX</option>

                    <option value="MARE">
                        Mare
                    </option>

                    <option value="STALLION">
                        Stallion
                    </option>

                    <option value="GELDING">
                        Gelding
                    </option>

                </select>

            </div>

        </section>
    `;
}
