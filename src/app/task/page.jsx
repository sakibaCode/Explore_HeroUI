import { getTasks } from "@/lib/tasks";
import React from "react";
import TasksCard from "@/components/TasksCard";


const TasksPage = async() => {
    const tasks = await getTasks()
    return (
        <div>
            <h1>Task</h1>
            {
               tasks.map(task=> <TasksCard key={task.id} task={task}></TasksCard>) 
            }
        </div>
    );
};

export default TasksPage;