let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}

function renderTasks(){

const taskList=document.getElementById("taskList");

taskList.innerHTML="";

tasks.forEach((task,index)=>{

const li=document.createElement("li");

li.innerHTML=`
<div>
<h3 class="${task.completed ? 'completed' : ''}">
${task.name}
</h3>
<p>${task.date}</p>
</div>

<div class="actions">
<button onclick="toggleTask(${index})">✓</button>
<button onclick="editTask(${index})">Edit</button>
<button onclick="deleteTask(${index})">Delete</button>
</div>
`;

taskList.appendChild(li);

});

}

function addTask(){

const taskInput=document.getElementById("taskInput");
const taskDate=document.getElementById("taskDate");

if(taskInput.value==="") return;

tasks.push({
name:taskInput.value,
date:taskDate.value,
completed:false
});

saveTasks();
renderTasks();

taskInput.value="";
taskDate.value="";
}

function toggleTask(index){

tasks[index].completed=!tasks[index].completed;

saveTasks();
renderTasks();
}

function editTask(index){

let updated=prompt("Edit Task",tasks[index].name);

if(updated){
tasks[index].name=updated;
saveTasks();
renderTasks();
}

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
renderTasks();
}

renderTasks();