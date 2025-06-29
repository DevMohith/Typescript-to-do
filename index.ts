type Task = {
    id: number;
    title: string;
    done: boolean;
}

////////////////////////////////////////////////////////////

let tasks: Task[] = [];

// fun to addtask 
function addTask(title: string): void {
    const newTask: Task = {
        id: tasks.length + 1,
        title,
        done: false
    };
    tasks.push(newTask);
    console.log(`Successfully added: "${title}"`);
}

// list of tasks
function listTasks(): void {
    console.log("\n All Tasks:");
    tasks.forEach((task) => {
        const status = task.done ? "done" : "not done";
        console.log(`${task.id}. ${task.title} - ${status}`);
    });
}

// fun to play with boolean now
function markDone(id: number): void {
    const task = tasks.find((t)=> t.id === id);

    if (task) {
        task.done = true;
        console.log(` / Marked "${task.title}" as done`);
    } else {
        console.log(" X Task not Found, Please Check ");
    }
}


addTask("Learn Typescrit by developing TO-DO App")
addTask("Build HTML and CSS boilerplate")
addTask("CONNECT DOM with TS")
addTask("Get working student in Germany")
addTask("Learn Python advanced")
addTask("Learn GenAI")
listTasks()
markDone(1)
markDone(2)
markDone(4)
markDone(5)
listTasks()

