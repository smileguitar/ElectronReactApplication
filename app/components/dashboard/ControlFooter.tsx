import React, { CSSProperties } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Clock from './Clock';

const controlsStyle: CSSProperties = {
  width: '100px',
  height: '30px'
};

const marginLeft: CSSProperties = {
  marginLeft: '10px',
  background: 'rgb(39, 39, 39)'
};

const marginRight: CSSProperties = {
  marginRight: '10px',
  background: 'rgb(39, 39, 39)'
};

const redStyle: CSSProperties = {
  color: 'red'
};

const greenStyle: CSSProperties = {
  color: 'green'
};

export default function ControlFooter() {
  return (
    <Row>
      <Col className="d-flex flex-row my-auto">
        <Button variant="success" size="sm" style={marginRight}>
          <i className="fa fa-play" style={greenStyle} />
          &nbsp; Start All
        </Button>
        <Button variant="danger" size="sm" style={marginLeft}>
          <i className="fa fa-stop" style={redStyle} />
          &nbsp; Stop All
        </Button>
      </Col>
      <Col>
        <Row style={{ justifyContent: 'center', height: '100%' }}>
          <Clock />
        </Row>
      </Col>
      <Col className="d-flex flex-row-reverse my-auto">
        <Row>
          <Button variant="danger" size="sm" style={marginRight}>
            <i className="fa fa-window-close" style={redStyle} />
            &nbsp; Clear All
          </Button>
          <Button variant="success" size="sm" style={marginLeft}>
            <i className="fa fa-pen" style={greenStyle} />
            &nbsp; Mass Edit
          </Button>
        </Row>
      </Col>
    </Row>
  );
}
