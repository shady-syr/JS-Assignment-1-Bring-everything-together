let tasks = []
const taskForm = document.getElementById('taskForm')
const taskTitle = document.getElementById('taskTitle')
const taskDescription = document.getElementById('taskDescription')
const taskPriority = document.getElementById('taskPriority')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskListBody = document.getElementById('taskListBody')

let taskId = 1;

function addTask() {
    const title = taskTitle.value.trim()
    const description = taskDescription.value.trim()
    const priorityValue = taskPriority.value
    const duedate = new Date(document.getElementById('dueDate').value)
    const task = {
        id: taskId,
        title: title,
        description: description,
        dueDate: duedate,
        priority: priorityValue,
        comments: ''
    };
    tasks.push(task);
    taskId++;
    taskForm.reset()
    displayTasks();
}

function displayTasks() {
    taskListBody.innerHTML = ''
    tasks.forEach(function (task) {
        const row = document.createElement('tr')
        const formattedDate = task.dueDate.toISOString().split('T')[0]
        row.innerHTML = `
            <td>${task.id}</td>
            <td>${task.title}</td>
            <td>${formattedDate}</td>
            <td>${task.priority}</td>
            <td><input type="text" class="form-control" placeholder="Add comment" value="${task.comments}"></td>
        `
        taskListBody.appendChild(row)
    })
}

addTaskBtn.addEventListener('click', addTask)
