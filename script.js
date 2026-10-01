// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("Button Pressed");
});

// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT

/*const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// listener for the select element from the drop down list.

animalSelect.addEventListener("change", function () {

    const selectedAnimal = animalSelect.value;

    // function to update the DOM based on the selected animal

    console.log("Selected animal:", selectedAnimal);

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiger";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tiger";
        animalDescription.textContent =
            "Tigers are the largest members of the cat family.";
    }

});

function updateAnimalInfo(selectedAnimal) {
    switch (selectedAnimal) {
        case "tiger":
            animalName.textContent = "Tiger";
            animalImage.src = "images/tiger.png";
            animalImage.alt = "Tiger";
            animalDescription.textContent =
                "Tigers are the largest members of the cat family.";
            break;
        case "elephant":
            animalName.textContent = "Elephant";
            animalImage.src = "images/elephant.png";
            animalImage.alt = "Elephant";
            animalDescription.textContent =
                "Elephants are the largest land animals on Earth.";
            break;
        case "giraffe":
            animalName.textContent = "Giraffe";
            animalImage.src = "images/giraffe.png";
            animalImage.alt = "Giraffe";
            animalDescription.textContent =
                "Giraffes are the tallest land animals in the world.";
            break;
        default:
            animalName.textContent = "";
            animalImage.src = "";
            animalImage.alt = "";
            animalDescription.textContent = "";
    }
}
animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;
    updateAnimalInfo(selectedAnimal);
});*/

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// Data lookup object (cleaner alternative to switch/case)
const animalData = {
    tiger: {
        name: "Tiger",
        image: "images/tiger.png",
        alt: "Tiger",
        description: "Tigers are the largest members of the cat family."
    },
    elephant: {
        name: "Elephant",
        image: "images/elephant.png",
        alt: "Elephant",
        description: "Elephants are the largest land animals on Earth."
    },
    giraffe: {
        name: "Giraffe",
        image: "images/giraffe.png",
        alt: "Giraffe",
        description: "Giraffes are the tallest land animals in the world."
    }
};

function updateAnimalInfo(selectedAnimal) {
    const data = animalData[selectedAnimal];

    if (data) {
        animalName.textContent = data.name;
        animalImage.src = data.image;
        animalImage.alt = data.alt;
        animalDescription.textContent = data.description;
    } else {
        animalName.textContent = "";
        animalImage.src = "";
        animalImage.alt = "";
        animalDescription.textContent = "";
    }
}

// Single event listener
animalSelect.addEventListener("change", function () {
    updateAnimalInfo(animalSelect.value);
});
