// document.querySelector("#parOne").addEventListener("click", prompter);

let employ = [];

for(i=0; i<5; i++) {
    employ[i] = prompt("Enter name " + (i+1) + " :");
    console.log(employ.length);
}

employ = employ.sort();

for(i=0; i<employ.length; i++) {
    document.querySelector("#parOne").innerHTML += employ[i] + "<br>";
    console.log(employ[i]);
}