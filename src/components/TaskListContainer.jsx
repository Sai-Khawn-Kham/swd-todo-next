"use client";
import React from "react";
import TaskList from "./TaskList";
import useTaskStore from "@/store/useTaskStore";

const TaskListContainer = () => {
   const { tasks } = useTaskStore();
   return (
      <div className="flex flex-col gap-3 max-h-[calc(100vh-12rem)] md:max-h-[calc(100vh-16rem)] overflow-y-auto hsb">
         {tasks.map((task) => (
            <TaskList key={task.id} task={task} />
         ))}
      </div>
   );
};

export default TaskListContainer;
