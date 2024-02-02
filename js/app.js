function generateRandomNumber() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);

    if (isNaN(minValue) || isNaN(maxValue)) {
        alert("Min va Max Raqam kiriting");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById('randomNumber').innerText = `Random Number: ${randomNumber}`;
}


// Just codes

// HTML elements
const inputTask = document.getElementById('task');
const addButton = document.getElementById('add');
const taskList = document.getElementById('taskList');

// Event listener for adding a task
addButton.addEventListener('click', addTask);

// Function to add a task
function addTask() {
  const taskText = inputTask.value.trim();

  if (taskText !== '') {
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
    inputTask.value = '';
  }
}

// Function to create a task element
function createTaskElement(taskText) {
  const taskItem = document.createElement('li');
  const taskCheckbox = document.createElement('input');
  const taskTextElement = document.createElement('span');
  const deleteButton = document.createElement('button');

  taskCheckbox.type = 'checkbox';
  taskTextElement.textContent = taskText;
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteTask);

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(deleteButton);

  return taskItem;
}

// Function to delete a task
function deleteTask(event) {
  const taskItem = event.target.parentNode;
  taskList.removeChild(taskItem);
}
const questions = 
    {
        question: 'What is the capital of France?',
        choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which programming language is often used for web development?',
        choices: ['Java', 'Python', 'JavaScript', 'C++'],
        correctAnswer: 'JavaScript'
    },