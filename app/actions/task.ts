export const ADD_TASKS = 'ADD_TASKS';
export const CLEAR_TASKS = 'CLEAR_TASKS';
export const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS';

export function addTasks(tasks: TaskData[]) {
  return {
    type: ADD_TASKS,
    tasks
  };
}

export function clearTasks() {
  return {
    type: CLEAR_TASKS
  };
}

export function updateTaskStatus(id: number, status: number, actions: number) {
  return {
    type: UPDATE_TASK_STATUS,
    id,
    status,
    actions
  };
}
