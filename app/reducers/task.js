import { ADD_TASKS, CLEAR_TASKS, UPDATE_TASK_STATUS } from '../actions/task';

export default function tasks(state = [], action) {
  switch (action.type) {
    case ADD_TASKS:
      return state.concat(action.tasks);
    case CLEAR_TASKS:
      return [];
    case UPDATE_TASK_STATUS:
      return state.map(t => {
        if (t.id === action.id) {
          return { ...t, status: action.status, actions: action.actions };
        }
        return t;
      });
    default:
      return state;
  }
}
