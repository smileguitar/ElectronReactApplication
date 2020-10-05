import React, { CSSProperties } from 'react';

import Title from './Title';
import Body from './Body';
import ControlFooter from './ControlFooter';
import styles from '../../containers/Content.css';
// import getStores from '../../constants/config';
import proxyTest from '../../services/proxytest';

import { getStores } from '../../constants/configure';

declare global {
  const enum ProxyStatus {
    Undefined = 0,
    Testing,
    Success,
    Failed
  }

  interface ProxyData {
    id: number;
    ip: string;
    port: string;
    username: string;
    password: string;
    store: string;
    status: number;
    actions: number;
  }
}

let id = 0;

type Props = {
  addProxies: (proxies: ProxyData[]) => void;
  clearProxies: () => void;
  updateProxyStatus: (id: number, status: number, time: number) => void;
  onDeleteFailed: () => void;
  proxies: ProxyData[];
};

export default function Proxies(props: Props) {
  const {
    proxies,
    addProxies,
    clearProxies,
    updateProxyStatus,
    onDeleteFailed
  } = props;
  // const [proxies, setProxies] = React.useState([] as ProxyData[]);
  // let id = 0;

  const stores = getStores();

  let desktopUrl = stores.length > 0 ? stores[0].url : '';

  function onAdd(value: string) {
    const strProxies = value.split(/\r?\n/);
    const newProxies = [] as ProxyData[];
    strProxies.forEach(v => {
      if (v && ['localhost', ''].indexOf(v) < 0) {
        const strProxy = v.split(':');
        if (strProxy.length > 3) {
          newProxies.push({
            id,
            ip: strProxy[0],
            port: strProxy[1],
            username: strProxy[2],
            password: strProxy[3],
            store: 'Supreme',
            status: 0,
            actions: 0
          });
          id += 1;
        } else if (strProxy.length > 1) {
          newProxies.push({
            id,
            ip: strProxy[0],
            port: strProxy[1],
            username: '',
            password: '',
            store: 'Supreme',
            status: 0,
            actions: 0
          });
          id += 1;
        }
      }
    });
    addProxies(newProxies);
  }

  function onDelete() {
    clearProxies();
  }

  function onTest() {
    proxyTest([...proxies], desktopUrl, updateProxyStatus);
  }

  function onChangeStore(index: number) {
    desktopUrl = stores[index].url;
  }

  return (
    <div className={styles['content-wrapper']}>
      <Title />
      <Body data={proxies} />
      <ControlFooter
        onAdd={onAdd}
        onDelete={onDelete}
        onTest={onTest}
        onDeleteFailed={onDeleteFailed}
        onChangeStore={onChangeStore}
        stores={stores}
      />
    </div>
  );
}
