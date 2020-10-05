import React, { CSSProperties } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import AddProxies from './AddProxies';

const marginLeft: CSSProperties = {
  width: '123px',
  marginLeft: '10px',
  background: 'rgb(39, 39, 39)'
};

const marginRight: CSSProperties = {
  width: '123px',
  marginRight: '10px',
  background: 'rgb(39, 39, 39)'
};

const redStyle: CSSProperties = {
  color: 'red'
};

const greenStyle: CSSProperties = {
  color: 'green'
};

interface StoreData {
  name: string;
}

type Props = {
  onAdd: (value: string) => void;
  onDelete: () => void;
  onTest: () => void;
  onDeleteFailed: () => void;
  onChangeStore: (index: number) => void;
  stores: StoreData[];
};

export default function ControlFooter(props: Props) {
  const {
    onAdd,
    onDelete,
    onTest,
    onDeleteFailed,
    onChangeStore,
    stores
  } = props;
  const [modalShow, setModalShow] = React.useState(false);

  const storeList = stores.map((v, i) => {
    return (
      <option key={i} value={i}>
        {v.name}
      </option>
    );
  });

  function onAddProxiesString(value: string) {
    setModalShow(false);
    onAdd(value);
  }

  function onStoreChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onChangeStore(parseInt(event.target.value, 10));
  }

  return (
    <>
      <Row>
        <Col className="d-flex flex-row" xs={5}>
          <Button
            variant="success"
            size="sm"
            style={marginRight}
            onClick={() => setModalShow(true)}
          >
            <i className="fa fa-plus" style={greenStyle} />
            &nbsp; Add Proxies
          </Button>
          <Button
            variant="danger"
            size="sm"
            style={marginLeft}
            onClick={() => onDelete()}
          >
            <i className="fa fa-trash-alt" style={redStyle} />
            &nbsp; Clear Proxies
          </Button>
        </Col>
        <Col xs={5}>
          <Row>
            <select
              style={{
                width: '123px',
                marginRight: '10px',
                background: 'rgb(39, 39, 39)',
                color: 'white'
              }}
              onChange={onStoreChange}
            >
              {storeList}
            </select>
            <Button
              variant="success"
              size="sm"
              style={marginLeft}
              onClick={() => onTest()}
            >
              Test Proxies
            </Button>
          </Row>
        </Col>
        <Col className="d-flex flex-row-reverse" xs={2}>
          <Row>
            <Button
              variant="danger"
              size="sm"
              style={marginLeft}
              onClick={() => onDeleteFailed()}
            >
              <i className="fa fa-window-close" style={redStyle} />
              &nbsp; Clear Failed
            </Button>
          </Row>
        </Col>
      </Row>
      <AddProxies
        show={modalShow}
        onHide={() => setModalShow(false)}
        onAdd={onAddProxiesString}
      />
    </>
  );
}

function createWarning(funcName: string) {
  return () => console.warn(`${funcName} is not defined`);
}

ControlFooter.defaultProps = {
  onAdd: (value: string) => {
    createWarning('onAdd');
  },
  onDelete: () => {
    createWarning('onDelete');
  },
  onTest: () => {
    createWarning('onTest');
  }
};
