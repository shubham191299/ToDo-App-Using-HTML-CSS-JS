let taskList = document.getElementById("taskList");
let addTaskBtn = document.querySelector(".addTask");

const addTask = ()=> {
    addTaskBtn.addEventListener("click", ()=> {
        let taskInput = document.getElementById("taskInput");

        if(taskInput.value === "") {
            alert("Please enter a task");
            return;
        }
        
        let li = document.createElement("li");
        li.innerHTML = `<span>${taskInput.value}</span><button class="delete">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
        saveTask();
    });
}

const deleteTask = () => {
    taskList.addEventListener("click", (e)=>{
        if(e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
            saveTask();
        }
        else if(e.target.tagName === "SPAN") {
            e.target.classList.toggle("checked");
            saveTask();
        }
    })
}

const saveTask = () => {
    localStorage.setItem("todo", taskList.innerHTML);
}

const loadTask = () => {
    taskList.innerHTML = localStorage.getItem("todo");
}

const time = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    document.querySelector('.time').innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(time, 1000);
}

const date = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toString().substring(4, 7);
    const year = date.getFullYear();
    document.querySelector('.date').innerHTML = day + " " + month;
    document.querySelector('.year').innerHTML = year;
}

const init = () => {    
    time();
    date();
    addTask();
    deleteTask();
    loadTask();
}

init();





