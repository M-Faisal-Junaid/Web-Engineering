const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", function() {
  const newTask = newTaskInput.value;
  if (newTask) {
    const listItem = document.createElement("li");
    listItem.textContent = newTask;

    // Create and add remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
      taskList.removeChild(listItem);
    });
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);
    newTaskInput.value = "";
  }
});
