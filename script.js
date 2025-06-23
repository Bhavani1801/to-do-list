function addTask() {
  const taskInput = document.getElementById("taskInput");
  const categoryInput = document.getElementById("categoryInput");
  const priorityInput = document.getElementById("priorityInput");

  const taskText = taskInput.value.trim();
  const category = categoryInput.value;
  const priority = priorityInput.value;

  if (taskText === '') return;

  const li = document.createElement("li");

  const taskContent = document.createElement("div");
  taskContent.className = "task-content";

  const span = document.createElement("span");
  span.textContent = taskText;

  const meta = document.createElement("div");
  meta.className = "task-meta";
  meta.innerHTML = `<strong>Category:</strong> ${category} | <strong>Priority:</strong> ${priority}`;

  taskContent.appendChild(span);
  taskContent.appendChild(meta);

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔ Done";
  completeBtn.onclick = () => taskContent.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏ Edit";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== '') {
      span.textContent = newTask.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑 Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskContent);
  li.appendChild(actions);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
