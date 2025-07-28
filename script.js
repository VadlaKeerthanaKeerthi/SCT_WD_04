const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskDate = document.getElementById('task-date');
const taskEmoji = document.getElementById('emoji-select');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  const taskTime = taskDate.value;
  const emoji = taskEmoji.value;

  if (!taskText || !taskTime) return;

  const listItem = document.createElement('li');
  listItem.classList.add('task-item');
  listItem.innerHTML = `
    <div class="task-header">
      <strong>${emoji} ${taskText}</strong>
      <small>📅 ${new Date(taskTime).toLocaleString()}</small>
    </div>
    <div class="task-controls">
      <button class="complete">✔ Done</button>
      <button class="edit">✏ Edit</button>
      <button class="delete">🗑 Delete</button>
    </div>
  `;

  listItem.querySelector('.complete').addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  listItem.querySelector('.edit').addEventListener('click', () => {
    const newTask = prompt("Edit your task:", taskText);
    if (newTask) {
      listItem.querySelector('strong').textContent = `${emoji} ${newTask}`;
    }
  });

  listItem.querySelector('.delete').addEventListener('click', () => {
    listItem.remove();
  });

  taskList.appendChild(listItem);
  taskForm.reset();
});
