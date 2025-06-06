document.querySelector("#btnSnd").addEventListener("click", displayName);

function displayName() {

    // Old method of declaring array
    const employ1 = new Array("Leonard", "Beasly", "Jasper");
    const employ2 = new Array("Alice", "Natalie", "Nicole");
    
    // Modern method of declaring array
    const employ3 = ["Eyestrain", "Elnie", "Kaypen", "Maxpen"];

    // Join convert Array to String and add hypen in between of indexes
    const stringArray = employ3.join(" - ");

    const fruits = ["Apple", "Guava", "Orange", "Melon", "Banana"];

    const mixed = fruits.join(" - ");
    console.log(mixed);
    fruits.pop();
    console.log(fruits);

    


    // Concat combine two arrays 
    const combi = employ1.concat(employ2);


    // document.querySelector(".parOne").innerHTML = employ1[1];
    // document.querySelector(".parOne").innerHTML = combi.length;
    // console.log(combi.length);

    // JOIN is for string use only  ----
    // POP is for Array use only    ----

    document.querySelector(".parOne").innerHTML = employ3;
    console.log(combi);

    console.log(stringArray);
    employ3.pop();
    console.log(employ3);
    
}