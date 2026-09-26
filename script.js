
const nameInput = document.getElementById("nameInput");
const nameButton = document.getElementById("nameButton");
const welcomeMessage = document.getElementById("welcomeMessage");


nameButton.addEventListener("click", function () {

    const name = nameInput.value.trim();

    if (name === "") {

        welcomeMessage.textContent = "Please enter your name.";

    } else {

        welcomeMessage.textContent =
            "Welcome, " + name + "!";

    }

});


// TASK MANAGER
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");

const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");



// UPDATE TASK COUNTER


function updateCounter() {

    const totalTasks = taskList.children.length;

    taskCounter.textContent =
        "Total Tasks: " + totalTasks;
}



// ADD TASK


addButton.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }


    const existingTasks = taskList.querySelectorAll("li");


    for (let task of existingTasks) {

        const existingText =
            task.firstChild.textContent.trim();


        if (existingText.toLowerCase() ===
            taskText.toLowerCase()) {

            alert("Task already exists!");

            return;
        }
    }


    const listItem = document.createElement("li");


    listItem.appendChild(
        document.createTextNode(taskText + " ")
    );


    const deleteButton =
        document.createElement("button");


    deleteButton.textContent = "Delete";


    deleteButton.addEventListener("click", function () {

        listItem.remove();

        updateCounter();

    });


    listItem.appendChild(deleteButton);


    taskList.appendChild(listItem);


    taskInput.value = "";


    updateCounter();

});


// CLEAR ALL TASKS

clearButton.addEventListener("click", function () {

    taskList.innerHTML = "";

    updateCounter();

});