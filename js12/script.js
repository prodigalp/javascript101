// Global declaration
document.querySelector("#btnSnd").addEventListener("click", displayMes);

// Instance of an object
const prodigal = new employee("Eyestrain", 45);
const jerbon = new employee("Jerbon Calida", 20);

// Constructor function
function employee(name, age) {
    // Declare object properties
    this.name = name;
    this.age = age;
    this.retirementAge = retAge;
}
// Declared Object Method
function retAge() {
    const ageToRetire = 65 - retirement ;
    return ageToRetire;
}
function displayMes() {
    // Function trigged after clicking send button
    const retirement = parseInt(document.querySelector("#txtAge").value);
    console.log("Age till retirement is:  " + this.retirementAge());
    console.log(jerbon.name);
}





