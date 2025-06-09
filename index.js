"use strict";
////////////////////////////////////////////////////////////
let tasks = [];
// fun to addtask 
function addTask(title) {
    const newTask = {
        id: tasks.length + 1,
        title,
        done: false
    };
    tasks.push(newTask);
    console.log(`Successfully added: "${title}"`);
}
// list of tasks
function listTasks() {
    console.log("\n All Tasks:");
    tasks.forEach((task) => {
        const status = task.done ? "done" : "not done";
        console.log(`${task.id}. ${task.title} - ${status}`);
    });
}
// fun to play with boolean now
function markDone(id) {
    const task = tasks.find((t) => t.id === id);
    if (task) {
        task.done = true;
        console.log(` / Marked "${task.title}" as done`);
    }
    else {
        console.log(" X Task not Found, Please Check ");
    }
}
