import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = {
  bg: string;
  iclass: string;
  istyle: object;
  value: string;
  desc: string;
};

export default function Counter(props: Props) {
  const { bg, iclass, istyle, value, desc } = props;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: bg,
        borderRadius: '5px',
        display: 'flex'
      }}
    >
      <div className="my-auto" style={{ display: 'flex', flexWrap: 'wrap', width: '200px' }}>
        <Col xs={3} style={{ display: 'flex' }}>
          <i className={iclass} style={istyle} />
        </Col>
        <Col xs={9} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '20px' }}>{value}</div>
          <div style={{ fontSize: '20px' }}>{desc}</div>
        </Col>
      </div>
    </div>
  );
}
