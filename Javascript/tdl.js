window.onload = loadTasks;

function loadTasks() {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    tasks.forEach(task => {
        const list = document.querySelector("ul");
        const listItem = document.createElement("li");
        listItem.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
        <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
        <button onclick="removeTask(this)" class="remove">Delete</button>`;
        list.insertBefore(listItem, list.children[0]);
    })
}

function addTask() {
    const task = document.querySelector("form input");
    const list = document.querySelector("ul");

    if(task.value === ''){
        alert('Please enter the to do list item');
    }

    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    tasks.forEach((todo) => {
      if (todo.task === task.value) {
        alert("Task already exist!");
        task.value = "";
        return;
      }
    });
    // localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]));
}