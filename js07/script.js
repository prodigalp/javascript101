function checkEntry() {
    const entry = parseInt(document.querySelector(".txtValue").value);

    if( (entry >= 1 ) && (entry <= 10)) {
        document.querySelector("#parOne").innerHTML = "Entered value is : " + entry;
    } else {
        document.querySelector("#parOne").innerHTML = "";
    }
}