const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

const addTask = () => {
    const taskText = todoInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">✔</button>
            <button class="delete-btn">✖</button>
        </div>
    `;

    todoList.appendChild(li);
    todoInput.value = '';
    attachTaskListeners(li);
};

const toggleTaskCompletion = (taskElement) => {
    taskElement.classList.toggle('completed');
};

const deleteTask = (taskElement) => {
    taskElement.remove();
};

const attachTaskListeners = (taskElement) => {
    const completeBtn = taskElement.querySelector('.complete-btn');
    const deleteBtn = taskElement.querySelector('.delete-btn');

    completeBtn.addEventListener('click', () => {
        toggleTaskCompletion(taskElement.querySelector('span'));
    });

    deleteBtn.addEventListener('click', () => {
        deleteTask(taskElement);
    });
};

addBtn.addEventListener('click', addTask);

todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
