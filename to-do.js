document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const clearBtn = document.getElementById('clearBtn');

    // Load tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Render existing tasks from local storage
    renderTasks();

    // Event listener for form submission
    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = todoInput.value.trim();

        if (taskText !== '') {
            // Create new task object
            const task = {
                id: Date.now(),
                text: taskText,
                completed: false
            };

            // Add task to array and local storage
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));

            // Clear input field
            todoInput.value = '';

            // Render tasks
            renderTasks();
        }
    });

    // Function to render tasks
    function renderTasks() {
        // Clear existing list
        todoList.innerHTML = '';

        // Render each task
        tasks.forEach(function(task) {
            const li = document.createElement('li');
            li.dataset.id = task.id;
            li.className = task.completed ? 'completed' : '';

            li.innerHTML = `
                <span>${task.text}</span>
                <button class="deleteBtn">Delete</button>
                <input type="checkbox" ${task.completed ? 'checked' : ''}>
            `;

            // Toggle task completion
            const checkbox = li.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', function() {
                task.completed = !task.completed;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            });

            // Delete task
            const deleteBtn = li.querySelector('.deleteBtn');
            deleteBtn.addEventListener('click', function() {
                tasks = tasks.filter(function(item) {
                    return item.id !== task.id;
                });
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            });

            todoList.appendChild(li);
        });
    }

    // Event listener for clear button
    clearBtn.addEventListener('click', function() {
        tasks = tasks.filter(function(task) {
            return !task.completed;
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    });
});
