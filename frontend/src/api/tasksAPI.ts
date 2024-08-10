import Task from "../types/Task";

const BASE_URL: string = "http://localhost:8080/api/tasks/"

async function getAllTasks(): Promise<Task[]> {
    const response = await fetch(BASE_URL);
    const tasks = await response.json();
    return tasks;
}

async function createTask(description: string): Promise<Task> {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ description: description })
    })
    const task = await response.json();
    return task;
}

export { getAllTasks, createTask }