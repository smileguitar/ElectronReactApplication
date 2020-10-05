import React, { CSSProperties } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LeftView from './LeftView';
import RightView from './RightView';

const bodyStyle: CSSProperties = {
  height: 'calc(100% - 45px)',
  marginTop: '10px'
};

export default function Body() {
  return (
    <Row style={bodyStyle}>
      <Col xs={7}>
        <LeftView />
      </Col>
      <Col xs={5}>
        <RightView />
      </Col>
    </Row>
  );
}
