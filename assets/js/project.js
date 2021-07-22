
let text = document.getElementById("text-background");
let button = document.getElementById("submit");


function textFocused() {
    text.classList.add("blue-border");
    button.classList.remove("blue-border");
}

function buttonFocused() {
    button.classList.add("blue-border");
    text.classList.remove("blue-border");
}

function buttonClicked() {
    buttonFocused();
    setBodyBackground();
}

function setBodyBackground() {
    document.body.style.background = text.value;
}
