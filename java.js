const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);
function addTask() {
    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }
    console.log('Add button clicked');
    const val = taskInput.value.trim();
    console.log(val);
    taskList.innerHTML += `<li>${val}</li>`;
    taskInput.value = '';
}
                                                                                                                                                          