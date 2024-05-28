document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
}
