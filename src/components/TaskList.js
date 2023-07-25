import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onTaskDelete }) => {
  
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onTaskDelete={onTaskDelete} />
      ))}
    </div>
  );
};

export default TaskList;
