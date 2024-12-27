const checkBox = document.getElementById('check');
checkBox.addEventListener("change", updateBackground);
updateBackground();

function updateBackground() {
    document.body.style.overflow = checkBox.checked ? "hidden" : "scroll";
    // document.body.style.backgroundColor = checkBox.checked ? "#00000080" : "unset";
}
