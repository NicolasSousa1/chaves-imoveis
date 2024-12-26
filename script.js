const menu = document.getElementById("navegacao");
const menuButton = document.getElementById("menuh");

function openmenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menu.classList.add("closing");
        menu.addEventListener("animationend", () => {
            menu.classList.remove("closing");
        }, { once: true });
    } else {
        menu.classList.add("active");
    }
}

menuButton.addEventListener("click", openmenu);
