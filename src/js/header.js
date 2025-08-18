const header = document.querySelector("header");
const themeButton = document.getElementById("theme-btn");
const welcomeModal = document.getElementById("welcome-modal");
const nameInput = document.getElementById("name-input");
const userHello = document.getElementById("user-hello");

welcomeModal.addEventListener("submit", (e) => {
    e.preventDefault()
    if (nameInput.value.length >= 6 && nameInput.value.length <= 16) {
        userHello.textContent = "Вітаємо, " + nameInput.value;
        welcomeModal.style.display = "none";
    } else {
        nameInput.placeholder = "Ім'я повинне бути більше 6 символів і менше 16!"
        nameInput.style.color = "red";
        nameInput.value = ""
    }
});



themeButton.checked = false
themeButton.addEventListener("change", () => {
    header.classList.toggle("dark", themeButton.checked);
})