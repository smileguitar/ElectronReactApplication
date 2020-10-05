import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
  addProxies,
  clearProxies,
  updateProxyStatus,
  onDeleteFailed
} from '../actions/proxy';
import Proxies from '../components/proxies/Proxies';

function mapStateToProps(state) {
  return {
    proxies: state.proxies
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      addProxies,
      clearProxies,
      updateProxyStatus,
      onDeleteFailed
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Proxies);
