export const addTask = (task: string) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const deleteTask = (index: number) => ({
    type: 'DELETE_TASK',
    payload: index,
  });
  