import React, { CSSProperties } from 'react';

import Title from './Title';
import ControlHeader from './ControlHeader';
import Body from './Body';
import ControlFooter from './ControlFooter';

import styles from '../../containers/Content.css';

import { getStores } from '../../constants/configure';

declare global {
  interface TaskData {
    id: number;
    store: string;
    size: string;
    profile: string;
    proxies: string;
    status: string;
    actions: string;
  }
}

type Props = {
  tasks: TaskData[];
  proxies: ProxyData[];
  addTasks: (tasks: TaskData[]) => void;
  clearTasks: () => void;
  updateTaskStatus: (id: number, status: number, actions: number) => void;
};

export default function Dashboard(props: Props) {
  const { tasks, proxies, addTasks, clearTasks, updateTaskStatus } = props;

  const stores = getStores();

  return (
    <div className={styles['content-wrapper']}>
      <Title />
      <ControlHeader
        tasks={tasks}
        proxies={proxies}
        stores={stores}
        addTasks={addTasks}
      />
      <Body data={tasks} />
      <ControlFooter />
    </div>
  );
}

Dashboard.defaultProps = {
  tasks: [],
  proxies: []
};
