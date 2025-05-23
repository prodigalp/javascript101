document.querySelector("#btnPink").addEventListener("mouseover", pinkBG);
document.querySelector("#btnYel").addEventListener("mouseover", yelBG);
document.querySelector("#btnBlue").addEventListener("mouseover", blueBG);

function pinkBG() {
    const pnk = document.querySelector("#btnPink");

    document.body.style.background = "pink"
    pnk.style.cursor = "pointer";
}
function yelBG() {
    const wh =  document.querySelector("#btnYel");

    document.body.style.background = "yellow";
    wh.style.cursor = "pointer";
}
function blueBG() {
    const bl = document.querySelector("#btnBlue");

    document.body.style.background = "blue";
    bl.style.cursor = "pointer";
}
function testfunction() {
    console.log("Working");
}
