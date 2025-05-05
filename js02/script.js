function computeNum() {
    let numa = parseInt(document.querySelector("#numOne").value);
    let numb = parseInt(document.querySelector("#numTwo").value);
    let ans = numa + numb
    console.log(ans);

    document.querySelector("#numAns").value = ans;

}
function btnClear() {
    document.querySelector("#numOne").value = '';
    document.querySelector("#numTwo").value = '';
    document.querySelector("#numAns").value = '';
}