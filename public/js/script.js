// Example starter JavaScript for disabling form submissions if there are invalid fields
/*(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const loveButtons = document.querySelectorAll(".love-btn");

loveButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");

        if (btn.classList.contains("active")) {
            btn.innerHTML = "❤";
        } else {
            btn.innerHTML = "♡";
        }
    });
});



const taxSwitch = document.getElementById("switchCheckDefault");
if (taxSwitch) {

taxSwitch.addEventListener("change", () => {
  const showTax = taxSwitch.checked;

  document.querySelectorAll(".gst-price").forEach(el => {
    el.classList.toggle("d-none", !showTax);
  });
});
}


document.addEventListener("DOMContentLoaded", () => {

    const wrapper = document.querySelector(".search-wrapper");
    const dropdown = document.getElementById("filterDropdown");
    const searchInput = document.querySelector(".search-input");
    const searchBtn = document.getElementById("searchFocusBtn");
    const filterBtn = document.getElementById("filterBtn");
    const searchForm = document.getElementById("navSearchForm");

    let isOpen = false;

    // Search icon
    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (!isOpen) {
            dropdown.classList.add("show");
            searchInput.focus();
            isOpen = true;
        } else {
            searchForm.submit();
        }
    });

    // Filter icon
    filterBtn.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.classList.add("show");
        searchInput.focus();
        isOpen = true;
    });

    // Clicking inside input also opens dropdown
    searchInput.addEventListener("focus", () => {
        dropdown.classList.add("show");
        isOpen = true;
    });

    // Click outside closes
    document.addEventListener("click", (e) => {
        if (!wrapper.contains(e.target)) {
            dropdown.classList.remove("show");
            isOpen = false;
        }
    });

});
*/

// Bootstrap form validation
(() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach(form => {
        form.addEventListener("submit", event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add("was-validated");
        }, false);
    });
})();


// Love button
const loveButtons = document.querySelectorAll(".love-btn");

loveButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        btn.innerHTML = btn.classList.contains("active") ? "❤" : "♡";
    });
});


// Tax ON/OFF feature
const taxSwitch = document.getElementById("switchCheckDefault");

if (taxSwitch) {

    function updateTaxDisplay() {
        document.querySelectorAll(".gst-price").forEach(el => {
            el.classList.toggle("d-none", !taxSwitch.checked);
        });
    }

    taxSwitch.addEventListener("change", updateTaxDisplay);

    // Maintain correct state after page load
    updateTaxDisplay();
}


// Search & Filter Dropdown
document.addEventListener("DOMContentLoaded", () => {

    const wrapper = document.querySelector(".search-wrapper");
    const dropdown = document.getElementById("filterDropdown");
    const searchInput = document.querySelector(".search-input");
    const searchBtn = document.getElementById("searchFocusBtn");
    const filterBtn = document.getElementById("filterBtn");
    const searchForm = document.getElementById("navSearchForm");

    let isOpen = false;

    // Run only if all elements exist
    if (
        wrapper &&
        dropdown &&
        searchInput &&
        searchBtn &&
        filterBtn &&
        searchForm
    ) {

        // Search icon click
        searchBtn.addEventListener("click", (e) => {
            e.preventDefault();

            if (!isOpen) {
                dropdown.classList.add("show");
                searchInput.focus();
                isOpen = true;
            } else {
                searchForm.submit();
            }
        });


        // Filter icon click
        filterBtn.addEventListener("click", (e) => {
            e.preventDefault();
            dropdown.classList.add("show");
            searchInput.focus();
            isOpen = true;
        });


        // Input focus
        searchInput.addEventListener("focus", () => {
            dropdown.classList.add("show");
            isOpen = true;
        });


        // Click outside closes dropdown
        document.addEventListener("click", (e) => {
            if (!wrapper.contains(e.target)) {
                dropdown.classList.remove("show");
                isOpen = false;
            }
        });
    }
});