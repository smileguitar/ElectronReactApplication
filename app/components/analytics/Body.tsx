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
      <Col xs={5}>
        <LeftView rate={0} />
      </Col>
      <Col xs={7}>
        <RightView />
      </Col>
    </Row>
  );
}
