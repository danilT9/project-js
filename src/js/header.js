const header = document.querySelector("header");
const body = document.body
const footer = document.querySelector("footer");
const themeButton = document.getElementById("theme-btn");
const welcomeModal = document.getElementById("welcome-modal");
const nameInput = document.getElementById("name-input");
const userHello = document.getElementById("user-hello");
const interactFilter = document.getElementById("interact-filter");
const gamesFilter = document.getElementById("games-filter");
const filterMenu = document.getElementById("filter-menu");
const filterMenuModal = document.getElementById("filter-menu-modal");
const filterMenuModalWindow = document.getElementById("filter-menu-modal-window");
const gameInt = document.getElementById("game-int");
const gameGame = document.getElementById("game-game");
const gameExploratory = document.getElementById("game-exploratory");
const scientistsAction = document.getElementById("scientists-action");


welcomeModal.addEventListener("submit", (e) => {
    e.preventDefault()
    if (nameInput.value.length >= 3 && nameInput.value.length <= 16) {
        userHello.textContent = "Вітаємо, " + nameInput.value;
        welcomeModal.style.display = "none";
    } else {
        nameInput.placeholder = "Ім'я повинне бути більше 3 символів і менше 16!"
        nameInput.style.color = "red";
        nameInput.value = ""
    }
});

gamesFilter.classList.add("hidden");
interactFilter.addEventListener("click", () => {
    gamesFilter.classList.toggle("hidden");
});

themeButton.checked = false
themeButton.addEventListener("change", () => {
    header.classList.toggle("dark", themeButton.checked);
    footer.classList.toggle("dark", themeButton.checked);
    scientistsAction.classList.toggle("dark", themeButton.checked);
});


filterMenu.addEventListener("click", () => {
    filterMenuModal.classList.toggle("show");
});
filterMenuModal.addEventListener("click", () => {
    filterMenuModal.classList.remove("show");
});


const sections = document.querySelectorAll("section");
const intSectionsIndex = [0, 1, 3, 4, 8];
const gameSectionsIndex = [2, 6, 7];
const exploratorySectionsIndex = [9, 10];
const intSections = intSectionsIndex.map(i => sections[i]);
const gameSections = gameSectionsIndex.map(i => sections[i]);
const exploratorySections = exploratorySectionsIndex.map(i => sections[i]);
gameInt.addEventListener("click", () => {
    gameInt.style.background = "#A7A7A7";
    gameGame.style.background = "none";
    gameExploratory.style.background = "none";
    gameInt.style.width = "100%";
    gameInt.style.height = "100%";
    gamesFilter.classList.toggle("hidden");
    intSections.forEach((sec) => {
        sec.style.display = ""
    });
    gameSections.forEach((sec) => {
        sec.style.display = "none"
    });
    exploratorySections.forEach((sec) => {
        sec.style.display = "none"
    });
});
gameGame.addEventListener("click", () => {
    gameInt.style.background = "none";
    gameGame.style.background = "#A7A7A7";
    gameExploratory.style.background = "none";
    gameGame.style.width = "100%";
    gameGame.style.height = "100%";
    gamesFilter.classList.toggle("hidden");
    intSections.forEach((sec) => {
        sec.style.display = "none"
    });
    gameSections.forEach((sec) => {
        sec.style.display = ""
    });
    exploratorySections.forEach((sec) => {
        sec.style.display = "none"
    });
});
gameExploratory.addEventListener("click", () => {
    gameInt.style.background = "none";
    gameGame.style.background = "none";
    gameExploratory.style.background = "#A7A7A7";
    gameExploratory.style.width = "100%";
    gameExploratory.style.height = "100%";
    gamesFilter.classList.toggle("hidden");
    intSections.forEach((sec) => {
        sec.style.display = "none"
    });
    gameSections.forEach((sec) => {
        sec.style.display = "none"
    });
    exploratorySections.forEach((sec) => {
        sec.style.display = ""
    });
});
