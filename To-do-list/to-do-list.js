// Selección de elementos
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Función para agregar una tarea
function addTask() {
    const taskText = taskInput.value.trim(); // Elimina espacios en blanco

    if (taskText === "") {
        alert("Escribe una tarea antes de agregarla.");
        return;
    }

    // Crear un elemento <li>
    const taskItem = document.createElement("li");

    // Añadir el texto de la tarea
    taskItem.textContent = taskText;

    // Botón para eliminar la tarea
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add("delete-btn");

    // Evento para eliminar la tarea
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    // Añadir el botón al <li>
    taskItem.appendChild(deleteBtn);

    // Añadir el <li> al <ul>
    taskList.appendChild(taskItem);

    // Limpiar el campo de entrada
    taskInput.value = "";
}

// Evento para el botón de agregar
addTaskBtn.addEventListener("click", addTask);

// Evento para agregar con la tecla "Enter"
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
