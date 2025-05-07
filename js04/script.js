function btnChk() {
   const x = parseInt(document.querySelector(".numOne").value);
   const y = parseInt(document.querySelector(".numTwo").value); 
   const z = solve(x, y);

   document.querySelector("#numAns").value = z;
}

function solve(a, b) {
 
    const c = a + b;
    return c;
}