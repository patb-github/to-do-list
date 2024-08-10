package com.example.backend.task;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    
    private final TaskRepository taskRepository;

    public TaskController(final TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping("/")
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
    
    @PostMapping("/")
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }
    
    // Updates the task by setting the completed field to true
    @PatchMapping("/{id}")
    public Task completeTaskById(@PathVariable String id) {
        Optional<Task> taskToUpdateOptional = taskRepository.findById(id);

        if (taskToUpdateOptional.isPresent()) {
            Task taskToUpdate = taskToUpdateOptional.get();
            taskToUpdate.setCompleted(true);
            return taskRepository.save(taskToUpdate);
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteTaskById(@PathVariable String id) {
        taskRepository.deleteById(id);
    }
}