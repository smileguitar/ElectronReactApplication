import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
// import { History } from 'history';
// import counter from './counter';
import proxies from './proxy';
import tasks from './task';

// export default function createRootReducer(history: History) {
//   return combineReducers({
//     router: connectRouter(history),
//     counter
//   });
// }

export default combineReducers({ proxies, tasks });
