import React, { CSSProperties } from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import logoimg from '../../assets/image/logo_gray.png';

import styles from '../../assets/css/scrollbar.css';

const bodyStyle: CSSProperties = {
  height: 'calc(100vh - 11rem)',
  marginTop: '20px',
  marginBottom: '20px',
  marginLeft: '0px',
  overflowY: 'scroll',
  background: 'rgb(37,37,37)',
  backgroundImage: `url(${logoimg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPositionY: '15px'
};

const tableStyle: CSSProperties = {
  color: 'white'
};

type Props = {
  data: ProxyData[];
};

function statusToString(status: ProxyStatus): any {
  switch (status) {
    case 0: {
      return <span style={{ color: 'gray' }}>Added</span>;
    }
    case 1: {
      return <span style={{ color: 'burlywood' }}>Testing</span>;
    }
    case 2: {
      return <span style={{ color: 'aqua' }}>Success</span>;
    }
    case 3: {
      return <span style={{ color: 'crimson' }}>Failed</span>;
    }
    default: {
      return <span style={{ color: 'gray' }}>Unknown</span>;
    }
  }
}

export default function Body(props: Props) {
  const { data } = props;

  const list = data.map(v => {
    return (
      <tr key={v.id}>
        <td>{v.ip}</td>
        <td>{v.port}</td>
        <td>{v.username}</td>
        <td>{v.password}</td>
        <td>{v.store}</td>
        <td>{statusToString(v.status)}</td>
        <td>{v.actions > 0 ? `${v.actions}MS` : ''}</td>
      </tr>
    );
  });

  return (
    <Row className={styles['scrollbar-primary']} style={bodyStyle}>
      <Table borderless size="sm" style={tableStyle}>
        <thead>
          <tr>
            <th>IP</th>
            <th>Port</th>
            <th>Username</th>
            <th>Password</th>
            <th>Store</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </Table>
    </Row>
  );
}

Body.defaultProps = {
  data: [] as ProxyData[]
};
