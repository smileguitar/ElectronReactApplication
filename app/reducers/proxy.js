// import { Action } from 'redux';
import {
  ADD_PROXIES,
  CLEAR_PROXIES,
  UPDATE_PROXY_STATUS,
  CLEAR_FAILED
} from '../actions/proxy';

export default function proxies(state = [], action) {
  switch (action.type) {
    case ADD_PROXIES:
      return state.concat(action.proxies);
    case CLEAR_PROXIES:
      return [];
    case UPDATE_PROXY_STATUS:
      return state.map(p => {
        if (p.id === action.id) {
          return { ...p, status: action.status, actions: action.time };
        }
        return p;
      });
    case CLEAR_FAILED:
      return state.filter(p => {
        return p.status !== 3;
      });
    default:
      return state;
  }
}
