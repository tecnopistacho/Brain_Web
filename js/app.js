document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("nav button");
    const views = document.querySelectorAll("main .view");

    function showView(viewId) {
        views.forEach(view => {
            view.classList.add("hidden");
        });

        const activeView = document.getElementById(viewId);
        if (activeView) {
            activeView.classList.remove("hidden");
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetView = button.getAttribute("data-view");
            showView(targetView);
        });
    });

    showView("home");
});

// Virtual Doset Logic

const form = document.getElementById("medicine-form");
const list = document.getElementById("medicine-list");
function loadMedicines() {
    const meds = JSON.parse(localStorage.getItem("medicines")) || [];
    list.innerHTML = "";

    meds.forEach((med, index) =>  {
        const li = document.createElement("li");
        li.innerHTML = `
        <stron>${med.name}</strong> (${med.dose}) at ${med.time}<br/>
        Purpose: ${med.purpose || "-"}<br/>
        Notes: ${med.extra || "-"}<br/>
        <label>
            <input type="checkbox" ${med.taken ? "checked" : ""} data-index=${index}" />
            Taken
        </label>
        <button data-delete="${index}">Delete</button>
        `;
        list.appendChild(li);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newMed = {
        name: document.getElementById("med-name").value,
        dose: document.getElementById("med-dose").value,
        time: document.getElementById("med-time").value,
        purpose: document.getElementById("med-purpose").value,
        extra: document.getElementById("med-extra").value,
        taken: false
    };

    const meds = JSON.parse(localStorage.getItem("medicines")) || [];
    meds.push(newMed);
    localStorage.setItem("medicines", JSON.stringify(meds));
    form.reset();
    loadMedicines();
});

list.addEventListener("change", (e) => {
    if (e.target.matches("input[type='checkbox']")) {
        const index = e.target.dataset.index;
        const meds = JSON.parse(localStorage.getItem("medicines")) || [];
        meds[index].taken = e.target.checked;
        localStorage.setItem("medicines", JSON.stringify(meds));
    }
});

list.addEventListener("click", (e) => {
    if (e.target.matches("button[data-delete]")) {
        const index = e.target.dataset.delete;
        const meds = JSON.parse(localStorage.getItem("medicines")) || [];
        meds.splice(index, 1);
        localStorage.setItem("medicines", JSON.stringify(meds));
        loadMedicines();
    }
});

// Load medicines when view is shown
document.querySelector("button[data-view='medicine']").addEventListener("click", () => {
    loadMedicines();
});