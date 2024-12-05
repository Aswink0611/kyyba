import React, { useState } from 'react';

import './App.css';

const Todolist = () => {
  const [task, settask] = useState([]);
  const [value, setvalue] = useState(" ");
  

  const AddHandler = () => {
    console.log(value,"value@@@");
    
    if (value !== "") {
     settask([...task, { id: task.length + 1, name: value, completed: false}]);
      setvalue("");
    }
  };

  const deleteHandler = (Taskid) => {
    settask(task.filter((task) => task.id !== Taskid));
  };

  const completeHandler = (Taskid) => {
   
    settask(task.map((task) => 

      { return task.id === Taskid ? { ...task, completed: ! task.completed } : task}
    
    ));
    
    
  };
 

const pending=task.filter(tasks=>!tasks.completed).length;
const completed=task.filter(tasks=>tasks.completed).length;

  return (
    <div className='bag'>
    <div className="header">
      <div className="input">
        <h2>Task Details</h2>
        <input
          type="text"
          placeholder="Enter your task"
          onChange={(e) => setvalue(e.target.value)}
          value={value}
        />
      </div>
      
      
      <div className="button">
        <button onClick={AddHandler}> ADD</button>
      </div>

      
      <div className="remaining-tasks">
        <h3>Tasks Remaining: {pending}</h3>
      </div>
      <div className="completed-tasks">
        <h3> completedTasks: {completed}</h3>
      </div>
      

      <div className="task">
       <ul>
            {task.map((taskItem) => (
              <li  style={{ display: 'flex', alignItems: 'left' }}>
                <span style={{ textDecoration: taskItem.completed === true ? 'line-through' : 'none', flex: 1 }}>
                  {taskItem.name }
                </span>
                <button onClick={() => completeHandler(taskItem.id)}>Complete</button>
                <button onClick={() => deleteHandler(taskItem.id)}>Remove</button>
              </li>
            ))}
          </ul>
      </div>
    </div>
    </div>
  );
};

export default Todolist;
