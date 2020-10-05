export const ADD_PROXIES = 'ADD_PROXIES';
export const CLEAR_PROXIES = 'CLEAR_PROXIES';
export const UPDATE_PROXY_STATUS = 'UPDATE_PROXY_STATUS';
export const CLEAR_FAILED = 'CLEAR_FAILED';

export function addProxies(proxies: ProxyData[]) {
  return {
    type: ADD_PROXIES,
    proxies
  };
}

export function clearProxies() {
  return {
    type: CLEAR_PROXIES
  };
}

export function updateProxyStatus(id: number, status: number, time: number) {
  return {
    type: UPDATE_PROXY_STATUS,
    id,
    status,
    time
  };
}

export function onDeleteFailed() {
  return {
    type: CLEAR_FAILED
  };
}
