// Constructor function (blueprint)
function person(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
}

const bucky = new person("Bucky Roberts", "Janitor", 13000);
const ella  = new person("Ella Mendez", "Director", 14500);

document.querySelector(".btnSend").addEventListener("click", displayMessage);

function displayMessage() {
    const namePerson = document.querySelector(".parOne");
    const posPerson = document.querySelector(".parTwo");
    const salPerson = document.querySelector(".parTri");

    namePerson.textContent = bucky.name;
    posPerson.textContent = bucky.position;
    salPerson.textContent = bucky.salary;

    // mess.textContent = ella.name;
    // mess.textContent = ella.name;
    // mess.textContent = bucky.name;
    // mess.textContent = bucky.position;
    // mess.textContent = bucky.salary;
}

// Test Object only!
function fruits(color, size, length) {
    this.color = color;
    this.size = size;
    this.length = length;
}
// Test Object instance only!
const apple = new fruits("Red", "Medium", "45inch");
const melon = new fruits("Orange", "Large", "90inch");