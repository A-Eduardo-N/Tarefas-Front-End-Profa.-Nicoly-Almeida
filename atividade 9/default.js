let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let filterStatus = 'all'; // Valores: all, completed, pending
let filterPriority = 'none'; // Valores: none, alta, media, baixa

document.getElementById('task-form').addEventListener('submit', addTask);
document.getElementById('filter-status').addEventListener('click', filterByStatus);
document.getElementById('filter-priority').addEventListener('click', filterByPriority);
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask(event) {
    event.preventDefault();
    const name = document.getElementById('task-name').value;
    const deadline = document.getElementById('task-deadline').value;
    const priority = document.getElementById('task-priority').value;

    const task = {
        id: Date.now(),
        name,
        deadline,
        priority,
        completed: false
    };

    tasks.push(task);
    saveTasks();
    displayTasks();
    event.target.reset();
}

function loadTasks() {
    displayTasks();
    checkUrgentTasks();
}

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    const filteredTasks = tasks.filter(task => {
        return (filterStatus === 'all' || (filterStatus === 'completed' && task.completed) || (filterStatus === 'pending' && !task.completed)) &&
               (filterPriority === 'none' || task.priority === filterPriority);
    });

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `${task.name} - ${task.deadline} - ${task.priority} 
                        <button onclick="toggleComplete(${task.id})">${task.completed ? 'Desmarcar' : 'Completar'}</button>
                        <button onclick="editTask(${task.id})">Editar</button>
                        <button onclick="deleteTask(${task.id})">Excluir</button>`;
        if (isUrgent(task.deadline)) {
            li.classList.add('urgente');
        }
        taskList.appendChild(li);
    });
}

function toggleComplete(taskId) {
    const task = tasks.find(t => t.id === taskId);
    task.completed = !task.completed;
    saveTasks();
    displayTasks();
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    displayTasks();
}

function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    document.getElementById('task-name').value = task.name;
    document.getElementById('task-deadline').value = task.deadline;
    document.getElementById('task-priority').value = task.priority;
    
    deleteTask(taskId);
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function filterByStatus() {
    const statuses = ['all', 'completed', 'pending'];
    const currentIndex = statuses.indexOf(filterStatus);
    filterStatus = statuses[(currentIndex + 1) % statuses.length];
    displayTasks();
}

function filterByPriority() {
    const priorities = ['none', 'alta', 'media', 'baixa'];
    const currentIndex = priorities.indexOf(filterPriority);
    filterPriority = priorities[(currentIndex + 1) % priorities.length];
    displayTasks();
}

function isUrgent(deadline) {
    const today = new Date();
    const taskDate = new Date(deadline);
    const timeDiff = taskDate - today;
    return timeDiff <= 2 * 24 * 60 * 60 * 1000 && timeDiff >= 0; // 2 dias
}

function checkUrgentTasks() {
    const urgentTasks = tasks.filter(task => isUrgent(task.deadline));
    if (urgentTasks.length > 0) {
        alert('Você tem tarefas próximas do prazo de conclusão!');
    }
}
