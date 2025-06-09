////////////////////////////////////////////////////////////
var tasks = [];
// fun to addtask 
function addTask(title) {
    var newTask = {
        id: tasks.length + 1,
        title: title,
        done: false
    };
    tasks.push(newTask);
    console.log("Successfully added: \"".concat(title, "\""));
}
// list of tasks
function listTasks() {
    console.log("\n All Tasks:");
    tasks.forEach(function (task) {
        var status = task.done ? "done" : "not done";
        console.log("".concat(task.id, ". ").concat(task.title, " - ").concat(status));
    });
}
// fun to play with boolean now
function markDone(id) {
    var task = tasks.find(function (t) { return t.id === id; });
    if (task) {
        task.done = true;
        console.log(" / Marked \"".concat(task.title, "\" as done"));
    }
    else {
        console.log(" X Task not Found, Please Check ");
    }
}

addTask("Learn Typescrit by developing TO-DO App");
addTask("Build HTML and CSS boilerplate");
addTask("CONNECT DOM with TS");
addTask("Get working student in Germany");
addTask("Learn Python advanced");
addTask("Learn GenAI");
listTasks();
markDone(1);
markDone(2);
markDone(4);
markDone(5);
listTasks();
