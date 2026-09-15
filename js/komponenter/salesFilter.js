export function createSalesFilter() {
  return `
        <section class="sales-filter">

            <div class="sales-filter-header">
                <span>FIND YOUR HORSE</span>
                <h2>FIND YOUR PERFECT MATCH</h2>
            </div>

            <div class="filter-options">

                <div class="filter-group">
                    <label for="disciplineFilter">DISCIPLINE</label>

                    <select id="disciplineFilter">
                        <option value="all">ALL</option>
                        <option value="DRESSAGE">DRESSAGE</option>
                        <option value="JUMPING">JUMPING</option>
                        <option value="EVENTING">EVENTING</option>
                    </select>
                </div>

                <div class="filter-group">
                    <label for="breedFilter">BREED</label>

                    <select id="breedFilter">
                        <option value="all">ALL</option>
                        <option value="KWPN">KWPN</option>
                        <option value="HOLSTEINER">HOLSTEINER</option>
                        <option value="HANNOVERANER">HANNOVERANER</option>
                    </select>
                </div>

                <div class="filter-group">
                    <label for="sexFilter">SEX</label>

                    <select id="sexFilter">
                        <option value="all">ALL</option>
                        <option value="MARE">MARE</option>
                        <option value="STALLION">STALLION</option>
                        <option value="GELDING">GELDING</option>
                    </select>
                </div>

            </div>

        </section>
    `;
}
