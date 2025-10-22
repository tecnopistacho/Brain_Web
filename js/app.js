document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("nav button");
    const views = document.querySelectorAll("main .view");
    const form = document.getElementById("medicine-form");
    const list = document.getElementById("medicine-list");
    const board = document.getElementById("game-board");
    const restartBtn = document.getElementById("restart-game");
    const languageSelect = document.getElementById("language-select");
    let currentLang = "en";


    const translations = {
        en: {
            title: "Brain Rehabilitation App",
            nav: {
                home: "Home",
                info: "Info",
                medicine: "Medicines",
                memory: "Memory Game",
                about: "About"
            },
            home: "Welcome to the Brain Rehabilitation App!",
            infoHeading: "What is a stroke",
            infoParagraph: "A brain stroke refers to permanent brain tissue damage caused by insufficient blood flow, also known as ischemia.",
            infoSource: "Source: https://www.kaypahoito.fi/khp00062",
            typesHeading: "Types of Stroke",
            spotHeading: "How to Spot a Stroke",
            spotSource: 'Source: <a href="https://www.health.harvard.edu/blog/how-to-recognize-a-ministroke-or-stroke-and-what-to-do-2020111021318" target="_blank">Harvard Health Publishing</a>',
            symptomsHeading: "Common Symptoms",
            treatmentHeading: "Treatment and Recovery",
            treatmentParagraph: "Treatment depends on the type of stroke. Recovery may include medication, physical and occupational therapy, resting and cognitive exercises.",
            tipsHeading: "Tips for Recovery",
            medicineHeading: "Virtual Doset",
            addMedBtn: "Add Medicine",
            restartBtn: "Restart Game",
            yourMedsHeading: "Your Medicines",
            memoryHeading: "Memory Game",
            memoryInstructions: "Click 2 cards to find a matching pair. Great for cognitive rehabilitation!",
            aboutHeading: "About This App",
            aboutParagraph: "This web application was created as a course projectThis web application was created as a course project for a web development class. Its purpose is to support individuals recovering from a stroke by providing educational content, a virtual doset, and a memory game to aid cognitive rehabilitation.",
            developerHeading: "Developer",
            developerParagraph: "Created by Pilar Murcia Pozuelo as part of a hands-on learning assignment. The project demonstrates responsive design, JavaScript functionality, and version control using GitHub.",
            featuresHeading: "Features",
            sourcesHeading: "Sources & Credits",
            licenseHeading: "License",
            licenseParagraph: "This project is for educational use only and not intended for clinical guidance or medical decision-making.",
            medFormLabels: {
                name: "Medicine Name:",
                dose: "Dose:",
                time: "Time:",
                purpose: "Purpose:",
                extra: "Extra info:"
            },
            medExtraPlaceholder: "e.g. after or before breakfast, avoid milk",
            typesList: [
                "<strong>Ischemic Stroke:</strong> Caused by a blockage in an artery.",
                "<strong>Hemorrhagic Stroke:</strong> Caused by a bleeding in the brain.",
                "<strong>Transient Ischemic Attack (TIA):</strong> A temporary blockage, often called mini-stroke."
            ],
            symptomsList: [  
                "Numbness or weakness, especially on one side",
                "Confusion",
                "Speech and vision problems",
                "Dizziness, loss of balance or conscience",
                "Headache"
            ],
            tipsList: [
                "Follow your doctor's instructions",
                "Take your medications, right pill, right dose, right time",
                "Stay active, but avoid extreme exercises",
                "Practice cognitive exercises and mental stimulation, like memory games",
                "Keep a balanced diet and stay hydrated",
                "Seek support from family, friends, or professionals"
            ],
            featuresList: [
                "Informational section about stroke types, symptoms, and recovery",
                "Virtual doset with localStorage",
                "Interactive memory game to support cognitive rehabilitation",
                "SPA-style navigation for good user experience"
            ],
            sourcesList: [
                'Stroke information: <a href="https://www.kaypahoito.fi/khp00062" target="_blank">Käypä hoito</a>',
                "Icons and emojis used for educational purposes",
                "JavaScript logic and layout inspired by MDN Web Docs and personal experimentation"
            ],
            spotSource: 'Source: <a href="https://www.health.harvard.edu/blog/how-to-recognize-a-ministroke-or-stroke-and-what-to-do-2020111021318" target="_blank">Harvard Health Publishing</a>'
        },
        fi: {
            title: "Aivokuntoutussovellus",
            nav: {
                home: "Etusivu",
                info: "Tietoa",
                medicine: "Lääkkeet",
                memory: "Muistipeli",
                about: "Tietoa sovelluksesta"
            },
            home: "Tervetuloa aivokuntoutussovellukseen!",
            infoHeading: "Mikä on aivohalvaus?",
            infoParagraph: "Aivohalvaus tarkoittaa pysyvää aivokudoksen vauriota, joka johtuu riittämättömästä verenvirtauksesta eli iskemia.",
            infoSource: "Lähde: https://www.kaypahoito.fi/khp00062",
            typesHeading: "Aivohalvaustyypit",
            spotHeading: "Aivohalvauksen tunnistaminen",
            spotSource: 'Lähde: <a href="https://www.health.harvard.edu/blog/how-to-recognize-a-ministroke-or-stroke-and-what-to-do-2020111021318" target="_blank">Harvard Health Publishing</a>',
            symptomsHeading: "Yleiset oireet",
            treatmentHeading: "Hoito ja kuntoutus",
            treatmentParagraph: "Hoito riippuu aivohalvauksen tyypistä. Kuntoutus voi sisältää lääkitystä, fysioterapiaa ja toimintaterapiaa, lepoa sekä kognitiivisia harjoituksia.",
            tipsHeading: "Kuntoutusvinkkejä",
            medicineHeading: "Virtuaalinen Dosetti",
            addMedBtn: "Lisää lääke",
            restartBtn: "Aloita peli uudelleen",
            yourMedsHeading: "Lääkkeesi",
            memoryHeading: "Muistipeli",
            memoryInstructions: "Klikkaa 2 korttia löytääksesi parin. Hyvä kognitiiviseen kuntoutukseen!",
            aboutHeading: "Tietoa sovelluksesta",
            aboutParagraph: "Tämä verkkosovellus on luotu kurssiprojektina osana web-kehityksen opintoja. Sen tarkoituksena on tukea aivohalvauksesta toipuvia henkilöitä tarjoamalla informatiivista sisältöä, virtuaalinen dosetti lääkkeiden seurantaan sekä muistipeli kognitiivisen kuntoutuksen tueksi.",            
            developerHeading: "Kehittäjä",
            developerParagraph: "Sovelluksen on kehittänyt Pilar Murcia Pozuelo osana käytännön oppimistehtävää. Projekti esittelee responsiivista suunnittelua, JavaScript-toiminnallisuutta ja versionhallintaa GitHubin avulla.",            
            featuresHeading: "Ominaisuudet",
            sourcesHeading: "Lähteet & Kiitokset",
            licenseHeading: "Lisenssi",
            licenseParagraph: "Tämä projekti on tarkoitettu vain opetuskäyttöön, eikä sitä ole tarkoitettu kliiniseen neuvontaan tai lääketieteelliseen päätöksentekoon.",   
            medFormLabels: {
                name: "Lääkkeen nimi:",
                dose: "Annos:",
                time: "Antoaika:",
                purpose: "Tarkoitus:",
                extra: "Huomioittava:"
            },
            medExtraPlaceHolder: "esim. ennen aamupalaa, tai sen jälkeen, välttää maitotuoteita",
            typesList: [
                "<strong>Iskeeminen aivohalvaus:</strong> Johtuu valtimon tukkeutumisesta.",
                "<strong>Verenvuotoinen aivohalvaus:</strong> Johtuu verenvuodosta aivoissa.",
                "<strong>Ohimenevä iskeeminen kohtaus (TIA):</strong> Väliaikainen tukos, jota kutsutaan myös mini-aivohalvaukseksi."
            ],
            symptomsList: [
                "Puutuminen tai heikkous, erityisesti toisella puolella kehoa",
                "Sekavuus",
                "Puhe- ja näköhäiriöt",
                "Huimaus, tasapainon menetys tai tajunnan menetys",
                "Päänsärky"
            ],
            tipsList: [
                "Noudata lääkärin ohjeita",
                "Ota lääkkeesi oikein: oikea lääke, oikea annos, oikeaan aikaan",
                "Pysy aktiivisena, mutta vältä raskasta liikuntaa",
                "Harjoita kognitiivisia taitoja ja muistin stimulointia, kuten muistipelejä",
                "Syö tasapainoisesti ja muista juoda riittävästi",
                "Hae tukea perheeltä, ystäviltä tai ammattilaisilta"
            ],
            featuresList: [
                "Tieto-osio aivohalvaustyypeistä, oireista ja kuntoutuksesta",
                "Virtuaalinen dosetti, joka tallentaa tiedot paikallisesti",
                "Interaktiivinen muistipeli kognitiivisen kuntoutuksen tueksi",
                "Yksisivuisen sovelluksen navigointi hyvän käyttökokemuksen takaamiseksi"
            ],
            sourcesList: [
                'Aivohalvaustiedot: <a href="https://www.kaypahoito.fi/khp00062" target="_blank">Käypä hoito</a>',
                "Kuvakkeet ja emojit opetuskäytössä",
                "JavaScript-logiikka ja ulkoasu inspiroitu MDN Web Docsista ja omista kokeiluista"
            ],
        spotSource: 'Lähde: <a href="https://www.health.harvard.edu/blog/how-to-recognize-a-ministroke-or-stroke-and-what-to-do-2020111021318" target="_blank">Harvard Health Publishing</a>'
        }
    };

    function showView(viewId) {
        views.forEach(view => {
            view.classList.add("hidden");
        });

        const activeView = document.getElementById(viewId);
        if (activeView) {
            activeView.classList.remove("hidden");
        }
    }

    function updateLanguage(lang) {
        currentLang = lang;
        const t = translations[lang];

        function updateList(id, items) {
            const ul = document.getElementById(id);
            ul.innerHTML = "";
            items.forEach(item => {
                const li = document.createElement("li");
                li.innerHTML = item;
                ul.appendChild(li);
            });
        }

        // Page title and header
        document.title = t.title;
        document.getElementById("main-heading").innerText = t.title;
        document.getElementById("page-title").innerText = t.title;

        // Navigation buttons
        document.getElementById("nav-home").innerText = t.nav.home;
        document.getElementById("nav-info").innerText = t.nav.info;
        document.getElementById("nav-medicine").innerText = t.nav.medicine;
        document.getElementById("nav-memory").innerText = t.nav.memory;
        document.getElementById("nav-about").innerText = t.nav.about;

        // Home and Info section
        document.getElementById("home").innerText = t.home;
        document.querySelector("#info h2").innerText = t.infoTitle;
        document.querySelector("#info p").innerText = t.infoText;

        document.getElementById("info-heading").innerText = t.infoHeading;
        document.getElementById("info-paragraph").innerText = t.infoParagraph;
        document.getElementById("spot-heading").innerText = t.spotHeading;
        document.getElementById("types-heading").innerText = t.typesHeading;
        document.getElementById("symptoms-heading").innerText = t.symptomsHeading;
        document.getElementById("treatment-heading").innerText = t.treatmentHeading;
        document.getElementById("treatment-paragraph").innerText = t.treatmentParagraph;
        document.getElementById("tips-heading").innerText = t.tipsHeading;

        // Virtual Doset
        document.getElementById("medicine-heading").innerText = t.medicineHeading;
        document.getElementById("add-med-btn").innerText = t.addMedBtn;
        document.getElementById("your-meds-heading").innerText = t.yourMedsHeading;
        document.getElementById("label-med-name").childNodes[0].nodeValue = t.medFormLabels.name;
        document.getElementById("label-med-dose").childNodes[0].nodeValue = t.medFormLabels.dose;
        document.getElementById("label-med-time").childNodes[0].nodeValue = t.medFormLabels.time;
        document.getElementById("label-med-purpose").childNodes[0].nodeValue = t.medFormLabels.purpose;
        document.getElementById("label-med-extra").childNodes[0].nodeValue = t.medFormLabels.extra;
        document.getElementById("med-extra").placeholder = t.medExtraPlaceHolder;

        // Memory Game
        document.getElementById("memory-heading").innerText = t.memoryHeading;
        document.getElementById("memory-instructions").innerText = t.memoryInstructions;
        document.getElementById("restart-game").innerText = t.restartBtn;

        // About
        document.getElementById("about-heading").innerText = t.aboutHeading;
        document.getElementById("about-paragraph").innerText = t.aboutParagraph;
        document.getElementById("developer-heading").innerText = t.developerHeading;
        document.getElementById("developer-paragraph").innerText = t.developerParagraph;
        document.getElementById("features-heading").innerText = t.featuresHeading;
        document.getElementById("sources-heading").innerText = t.sourcesHeading;
        document.getElementById("license-heading").innerText = t.licenseHeading;
        document.getElementById("license-paragraph").innerText = t.licenseParagraph;

        // Sources
        document.getElementById("info-source").innerText = t.infoSource;
        document.getElementById("spot-source").innerHTML = t.spotSource;

        // Lists
        updateList("types-list", t.typesList);
        updateList("symptoms-list", t.symptomsList);
        updateList("tips-list", t.tipsList);
        updateList("features-list", t.featuresList);
        updateList("sources-list", t.sourcesList);
    }

    languageSelect.addEventListener("change", (e) => {
        updateLanguage(e.target.value);
    });

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetView = button.getAttribute("data-view");
            showView(targetView);

            if (targetView == "medicine") loadMedicines();
            if (targetView == "memory") createBoard();
        });
    });

    showView("home");

    // Virtual Doset Logic
    function loadMedicines() {
        const meds = JSON.parse(localStorage.getItem("medicines")) || [];
        list.innerHTML = "";

        meds.forEach((med, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <strong>${med.name}</strong> (${med.dose}) at ${med.time}<br/>
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

    // Memory Game Logic
    const cardValues = ["🧠", "💊", "🍎", "🍏", "🐈‍⬛", "🌸", "🍭", "🧸", "🧠", "💊", "🍎", "🍏", "🐈‍⬛", "🌸", "🍭", "🧸"];
    let flippedCards = [];
    let matchedCards = [];

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function createBoard() {
        board.innerHTML = "";
        flippedCards = [];
        matchedCards = [];
        const shuffled = shuffle([...cardValues]);

        shuffled.forEach((value, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.index = index;
            card.dataset.value = value;

            const inner = document.createElement("div");
            inner.classList.add("card-inner");

            const front = document.createElement("div");
            front.classList.add("card-front");
            front.innerText = "❓";
            
            const back = document.createElement("div");
            back.classList.add("card-back");
            back.innerText = value;

            inner.appendChild(front);
            inner.appendChild(back);
            card.appendChild(inner);
            board.appendChild(card);
        });
    }

    board.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        if (!card || flippedCards.includes(card) || matchedCards.includes(card)) return;

        card.classList.add("flipped");
        flippedCards.push(card);

        if (flippedCards.length == 2) {
            const [card1, card2] = flippedCards;
            if (card1.dataset.value == card2.dataset.value) {
                matchedCards.push(card1, card2);
            }
            else {
                setTimeout(() => {
                    card1.classList.remove("flipped");
                    card2.classList.remove("flipped");

                }, 800);
            }
            flippedCards = [];
        }
    });

    restartBtn.addEventListener("click", createBoard);

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetView = button.getAttribute("data-view");
            showView(targetView);

            if (targetView == "medicine") {
                loadMedicines();
            }

            if (targetView == "memory") {
                createBoard();
            }
        });
    });

    const themeSelect = document.getElementById("theme-select");

    themeSelect.addEventListener("change", (e) => {
        const mode = e.target.value;
        document.documentElement.setAttribute("data-theme", mode);
        if (mode == "light" || mode == "dark") {
            document.documentElement.setAttribute("data-theme", mode);
        }
        else {
            document.documentElement.removeAttribute("data-theme");
        }
    });
});











