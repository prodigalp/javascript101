function compute() {
    const ops  = document.querySelector("#ops").value;
    const num1 = parseInt(document.querySelector("#numOne").value);
    const num2 = parseInt(document.querySelector("#numTwo").value);

    if(ops == 'add') {
        ans = num1 + num2;
        operand(ans);
    } else if(ops == 'sub') {
        ans = num1 - num2;
        operand(ans);
    } else if(ops == 'mul') {
        ans = num1 * num2;
        operand(ans);
    } else if(ops == 'divs') {
        ans = num1 / num2;
        operand(ans);
    }

    console.log(ops);
    console.log(num1);
    console.log(num2);
}
function wipe() {
    document.querySelector("#numOne").value = '';
    document.querySelector("#numTwo").value = '';
    document.querySelector("#numAns").value = '';
}
function operand(x) {
    // remove the decimal place of the number
    document.querySelector("#numAns").value = x.toFixed(0);
}