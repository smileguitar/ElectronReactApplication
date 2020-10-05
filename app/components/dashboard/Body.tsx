import React, { CSSProperties } from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import logoimg from '../../assets/image/logo_gray.png';
import styles from '../../assets/css/scrollbar.css';

const bodyStyle: CSSProperties = {
  height: 'calc(100vh - 14.2rem)',
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
  data: TaskData[];
};

export default function Body(props: Props) {
  const { data } = props;

  const list = data.map(v => {
    return (
      <tr key={v.id}>
        <td>{v.id}</td>
        <td>{v.store}</td>
        <td>{v.size}</td>
        <td>{v.profile}</td>
        <td>{v.proxies}</td>
        <td>{v.status}</td>
        <td style={{ width: '140px' }}>
          <i
            className="fa fa-play"
            style={{ marginRight: '10px', color: 'aqua' }}
          />
          <i
            className="fa fa-stop"
            style={{ marginRight: '10px', color: 'crimson' }}
          />
          <i className="fa fa-edit" style={{ marginRight: '10px' }} />
          <i
            className="fa fa-copy"
            style={{ marginRight: '10px', color: 'cornflowerblue' }}
          />
          <i className="fa fa-trash-alt" style={{ color: 'firebrick' }} />
        </td>
      </tr>
    );
  });

  return (
    <Row className={styles['scrollbar-primary']} style={bodyStyle}>
      <Table borderless size="sm" style={tableStyle}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Store</th>
            <th>Size</th>
            <th>Profile</th>
            <th>Proxy Group</th>
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
  data: [] as TaskData[]
};
