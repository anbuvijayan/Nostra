//Offer Banner

var offerbtn = document.querySelector(".off")

document.getElementById("offerbnt").addEventListener("click",

    function () {
        offerbtn.style.display = "none";
    }
);

//menu

var sideMenu = document.getElementById('menu');
var sideNavBar = document.getElementById('sidenav');
var closeNav = document.getElementById('closenav');

sideMenu.addEventListener("click", () => {
    sideNavBar.style.left = 0;
});

closeNav.addEventListener("click", () => {
    sideNavBar.style.left = "-50%";
});


document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".categ-item input[type='checkbox']");
    const searchInput = document.getElementById("search");
    const dresses = document.querySelectorAll(".dresses");

    // Event listener for checkboxes and search input
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterItems);
    });
    searchInput.addEventListener("input", filterItems);

    function filterItems() {
        const selectedFilters = {
            occasion: [],
            color: [],
            arrivals: []
        };

        // Collect selected filters
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                let category = checkbox.closest(".categ-item").querySelector("h3").textContent.toLowerCase();
                selectedFilters[category].push(checkbox.name.toLowerCase());
            }
        });

        const searchQuery = searchInput.value.toLowerCase();

        dresses.forEach(dress => {
            const title = dress.querySelector("h2").textContent.toLowerCase();
            let matchesFilters = true;

            // Check if the dress matches any selected filters
            Object.keys(selectedFilters).forEach(key => {
                if (selectedFilters[key].length > 0) {
                    let found = selectedFilters[key].some(filter => title.includes(filter));
                    if (!found) matchesFilters = false;
                }
            });

            // Apply search filter
            if (!title.includes(searchQuery)) {
                matchesFilters = false;
            }

            // Show or hide items
            dress.style.display = matchesFilters ? "block" : "none";
        });
    }
});










