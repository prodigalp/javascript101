document.querySelector("#btnPink").addEventListener("click", pinkBG);
document.querySelector("#btnWhite").addEventListener("click", whiteBG);

function pinkBG() {
    document.body.style.background = "pink"
}
function whiteBG() {
    document.body.style.background = "white";
    // document.body.style.background = ""
}
