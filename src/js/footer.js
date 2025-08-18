const body = document.body;
const subscribeForm = document.getElementById("subscribe-form");
const subscribeInput = document.getElementById("email-subscribe-input");
const subscribeModal = document.getElementById("subscribe-modal");
subscribeInput.value = ""

subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (subscribeInput.value.length > 3 && subscribeInput.value.length <= 64) {
        subscribeModal.style.display = "flex"
    } else {
        subscribeInput.value = ""
        subscribeInput.style.border = "1px solid crimson"
        subscribeInput.style.color = "crimson"
    }
});

subscribeModal.addEventListener("click", () => {
    subscribeModal.style.display = "none";
});
document.addEventListener("keydown", (e) => {
    if (subscribeModal.style.display == "flex" && e.key == "Escape") {
        subscribeModal.style.display = "none"
    }
});
