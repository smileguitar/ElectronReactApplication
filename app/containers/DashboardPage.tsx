import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { addTasks, clearTasks, updateTaskStatus } from '../actions/task';
import Dashboard from '../components/dashboard/Dashboard';

function mapStateToProps(state) {
  return {
    proxies: state.proxies,
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      addTasks,
      clearTasks,
      updateTaskStatus
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
