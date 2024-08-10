import Task from "../types/Task";

const BASE_URL: string = "http://localhost:8080/api/tasks/"

async function getAllTasks(): Promise<Task[]> {
    try {
        const response = await fetch(BASE_URL);
        const tasks = await response.json();
        return tasks;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}

async function createTask(description: string): Promise<Task> {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ description: description })
        })
        const task = await response.json();
        return task;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
}

async function markTaskById(id: string): Promise<Task> {
    try {
        const response = await fetch(`${BASE_URL}${id}`, {
            method: "PATCH"
        })
        const task = await response.json();
        return task;
    } catch (error) {
        console.error('Error marking task by ID:', error);
        throw error;
    }
}

async function deleteTaskById(id: string): Promise<void> {
    try {
        await fetch(`${BASE_URL}${id}`, {
            method: "DELETE"
        });
    } catch (error) {
        console.error('Error deleting task by ID:', error);
        throw error;
    }
}

export { getAllTasks, createTask, markTaskById, deleteTaskById }