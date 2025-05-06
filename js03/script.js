function alertBtn(x, y, z) {
    document.querySelector(".empName").innerHTML = x;
    document.querySelector(".empAge").innerHTML = y;
    document.querySelector(".empPos").innerHTML = z;

    console.log(x);
    console.log(y);
    console.log(z);
}
function clearText() {
    document.querySelector(".empName").innerHTML = '';
    document.querySelector(".empAge").innerHTML = '';
    document.querySelector(".empPos").innerHTML = '';
}