document.addEventListener("DOMContentLoaded", loadTodos);// Wait for the DOM to be fully loaded

let todos = []; // Array to store to-do items

// Load todos from localStorage or fetch from API if not available
function loadTodos() {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
        todos = storedTodos; // Load stored to-dos from localStorage
        renderTodos(); // Render the to-dos
    } else {
		// Fetch to-dos from a mock API
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => response.json())
            .then(data => {
                todos = data;
                localStorage.setItem("todos", JSON.stringify(todos)); // Store fetched todos in localStorage
                renderTodos(); // Render the to-dos
            });
    }
}

// Add a new to-do to the list
function addTodo() {
    const input = document.getElementById("newTodo");
    const title = input.value.trim(); // Get the trimmed input value
    if (title === "") return; // Don't add empty to-do


    const newTask = { id: Date.now(), title, completed: false };// Create new to-do object
    todos.push(newTask); // Add to the todos array
    input.value = ""; // Clear the input field

    updateLocalStorage(); // Update localStorage with the new list
    renderTodos(); // Re-render the to-dos
}

// Toggle the completion status of a to-do item
function toggleCompletion(id) {
    todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    updateLocalStorage(); // Update localStorage with the changed list
    renderTodos(); // Re-render the to-dos
}

 // Delete a to-do item from the list
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id); // Filter out the deleted to-do
    updateLocalStorage(); // Update localStorage with the changed list
    renderTodos(); // Re-render the to-dos
}

 // Set the filter for the to-do list (all, completed, or not completed)
function setFilter(filter) {
    renderTodos(filter); // Re-render the to-dos based on the selected filter
}

// Render the to-do list based on the filter
function renderTodos(filter = "all") {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = ""; // Clear the existing list


    todos
        .filter(todo => filter === "all" || (filter === "completed" && todo.completed) || (filter === "notCompleted" && !todo.completed))
        .forEach(todo => {
            const li = document.createElement("li");// Create a new list item for each to-do
            li.className = todo.completed ? "completed" : ""; // Apply completed class if the to-do is completed


            // Add checkbox, title, and delete button for each to-do item
            li.innerHTML = `
                <label>
                    <input type="checkbox" ${todo.completed ? "checked" : ""} onclick="toggleCompletion(${todo.id})">
                    ${todo.title}
                </label>
                <button class="trash-btn" onclick="deleteTodo(${todo.id})">🗑</button>
            `;

            todoList.appendChild(li); // Append the list item to the to-do list
        });
}

// Update localStorage with the current state of the to-dos
function updateLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos)); // Save the to-do list in localStorage
}
