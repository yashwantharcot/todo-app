import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store/reducers/taskReducer';
import { RootState } from '../store/store';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function TaskList() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add some tasks to get started!</p>
      ) : (
        <ul>
          {tasks.map((task: Task) => (
            <li key={task.id}>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
