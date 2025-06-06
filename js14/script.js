document.querySelector("#btnSnd").addEventListener("click", displayMes);
const parMess = document.querySelector("#parMes");

function displayMes() {
    // parMess.textContent = "Array is working properly";
    const employMen = ["Richard", "Mathew", "Rizen","Philip"];
    const employWomen = ["Natalie", "Ashely", "Willow", "Cristy", "Tiffany"];

    // PUSH, POP, JOIN, SORT, LENGTH, CONCAT, REVERSE
    // Combine Array
    const employCombine = employMen.concat(employWomen);

    // Add value to the Array
    const pushArray = employMen.push("Crimson", "Jayward", "Preight");

    // Remove value to the array
    const popArray = employWomen.pop();

    // Convert array to string
    const stringArray = employMen.join();

    // Reverse the value of array
    const reverseArray = employWomen.reverse();

    // Count the number of array index;
    const countArray = employMen.length;

    
    // 1.  parMess.innerHTML = employCombine.join(" - <br>");   
    // parMess.innerHTML = popArray;
    // parMess.innerHTML = 
    const joiner = employWomen.sort();

    console.log(joiner);


    

}