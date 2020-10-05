import React, { CSSProperties } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logoimg from '../../assets/image/logo.png';

const logoStyle: CSSProperties = {
  width: '2rem',
  height: '2rem'
};

const badgeStyle: CSSProperties = {
  width: '160px',
  height: '40px',
  background: 'rgb(39, 39, 39)'
};

const badgeTextStyle: CSSProperties = {
  fontSize: '12px'
};

export default function Title() {
  return (
    <Row>
      <Col className="d-flex flex-row my-auto">
        <h2> Dashboard </h2>
      </Col>
      <Col className="d-flex flex-row-reverse my-auto">
        <Row style={badgeStyle}>
          <Col className="my-auto" xs={4}>
            <img style={logoStyle} src={logoimg} alt="" />
          </Col>
          <Col className="my-auto" xs={8}>
            <div style={badgeTextStyle}>orion#1997</div>
            <div style={badgeTextStyle}>Renewal</div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
