import { getTasks } from "@/lib/tasks";
import React from "react";
import TasksCard from "@/components/TasksCard";
import { TaskModal } from "@/components/TaskModal";
import { CreateTask } from "@/lib/actions";


const TasksPage = async() => {
    const tasks = await getTasks()
    return (
        <div>
            <TaskModal CreateTask ={CreateTask}/>
            {
               tasks.map(task=> <TasksCard key={task.id} task={task}></TasksCard>) 
            }
        </div>
    );
};

export default TasksPage;