import React, { CSSProperties } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import AddTask from './AddTask';

const controlsStyle: CSSProperties = {
  width: '100px',
  height: '30px'
};

const labelStyle: CSSProperties = {
  padding: '7px 10px',
  marginRight: '17px',
  borderRadius: '6px',
  background: 'rgb(85, 85, 85)'
};

const valeStyle: CSSProperties = {
  paddingRight: '10px'
};

const containerStyle: CSSProperties = {
  marginTop: '20px',
  marginBottom: '20px'
};

type Props = {
  tasks: TaskData[];
  proxies: ProxyData[];
  stores: StoreData[];
  addTasks: (tasks: TaskData[]) => void;
};

export default function ControlHeader(props: Props) {
  const { tasks, proxies, stores, addTasks } = props;
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Row style={containerStyle}>
        <Col className="d-flex flex-row my-auto">
          <div style={labelStyle}>
            <span style={valeStyle}>{tasks.length}</span>
            <span>Tasks</span>
          </div>
          <div style={labelStyle}>
            <span style={valeStyle}>{proxies.length}</span>
            <span>Proxies</span>
          </div>
        </Col>
        <Col className="d-flex flex-row-reverse my-auto">
          <Row style={controlsStyle}>
            <Col className="my-auto" xs={6}>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setModalShow(true)}
              >
                <i className="fa fa-plus" />
              </Button>
            </Col>
            <Col className="my-auto" xs={6}>
              <Button variant="secondary" size="sm">
                <i className="fa fa-redo-alt" />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <AddTask
        show={modalShow}
        stores={stores}
        proxies={proxies}
        onAdd={addTasks}
        onHide={() => setModalShow(false)}
        // onAdd={onAddProxiesString}
      />
    </>
  );
}

ControlHeader.defaultProps = {
  tasks: [],
  proxies: [],
  stores: []
};
