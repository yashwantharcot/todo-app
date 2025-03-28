import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/reducers/taskReducer';

function TaskInput() {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskText.trim(),
        completed: false
      };
      dispatch(addTask(newTask));
      setTaskText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="task-input">
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a task" 
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
