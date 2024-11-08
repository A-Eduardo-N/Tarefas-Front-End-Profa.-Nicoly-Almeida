const taskForm = document.getElementById('task-form');
const taskNameInput = document.getElementById('task-name');
const taskDateInput = document.getElementById('task-date');
const taskPriorityInput = document.getElementById('task-priority');
const taskList = document.getElementById('task-list');
const filterBtn = document.getElementById('filter-btn');

let tasks = [];
let filterStatus = 'all'; 

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = taskNameInput.value.trim();
  const taskDate = taskDateInput.value;
  const taskPriority = taskPriorityInput.value;

  if (taskName && taskDate) {
    addTask(taskName, taskDate, taskPriority);
    taskForm.reset();
  }
});

filterBtn.addEventListener('click', () => {
  if (filterStatus === 'all') {
    filterStatus = 'completed';
  } else if (filterStatus === 'completed') {
    filterStatus = 'pending';
  } else {
    filterStatus = 'all';
  }
  renderTasks();
});

function addTask(name, date, priority) {
  const task = {
    id: Date.now(),
    name,
    date,
    priority,
    completed: false,
  };
  tasks.push(task);
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';
  
  const filteredTasks = tasks.filter(task => {
    if (filterStatus === 'completed') {
      return task.completed;
    } else if (filterStatus === 'pending') {
      return !task.completed;
    }
    return true; // show all
  });

  filteredTasks
    .sort((a, b) => a.priority.localeCompare(b.priority) || new Date(a.date) - new Date(b.date))
    .forEach(task => {
      const li = document.createElement('li');
      if (task.completed) {
        li.classList.add('completed');
      }
      if (isUrgent(task)) {
        li.classList.add('urgent');
      }

      li.innerHTML = `
        <span>${task.name} - ${task.date} - ${task.priority}</span>
        <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTaskCompletion(${task.id})">
        <button onclick="editTask(${task.id})">Editar</button>
        <button onclick="deleteTask(${task.id})">Excluir</button>
      `;
      
      taskList.appendChild(li);
    });
}

function toggleTaskCompletion(taskId) {
  const task = tasks.find(t => t.id === taskId);
  task.completed = !task.completed;
  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter(t => t.id !== taskId);
  renderTasks();
}

function editTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  const newName = prompt('Editar nome da tarefa:', task.name);
  const newDate = prompt('Editar data de conclusão:', task.date);
  const newPriority = prompt('Editar prioridade (alta, media, baixa):', task.priority);

  if (newName) task.name = newName;
  if (newDate) task.date = newDate;
  if (newPriority) task.priority = newPriority;

  renderTasks();
}

function isUrgent(task) {
  const today = new Date();
  const dueDate = new Date(task.date);
  return dueDate - today < 86400000; // Menos de 24 horas
}

renderTasks();
