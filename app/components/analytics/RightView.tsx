import React, { CSSProperties } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Value from './Value';

export default function RightView() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        style={{
          width: '100%',
          height: '85%',
          display: 'grid',
          paddingLeft: '20px',
          paddingRight: '20px'
        }}
      >
        <Card
          className="my-auto"
          style={{
            height: '70%',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderRadius: '5px'
          }}
        >
          <Card.Header
            style={{
              color: 'black',
              textAlign: 'center',
              backgroundColor: 'rgb(164, 240, 154)'
            }}
          >
            <h3>
              <strong>Analytics</strong>
            </h3>
          </Card.Header>
          <Card.Body
            style={{
              backgroundColor: 'rgba(164, 240, 154, 0.5)'
            }}
          >
            <Row style={{ height: '50%' }}>
              <Col xs={6} style={{ padding: '10px' }}>
                <Value
                  bg="rgb(164, 240, 154)"
                  iclass="fa fa-check-circle my-auto"
                  istyle={{
                    fontSize: '24px',
                    color: 'rgb(84, 214, 90)',
                    background: 'white',
                    borderRadius: '50%'
                  }}
                  value="0"
                  desc="Checkouts"
                />
              </Col>
              <Col xs={6} style={{ padding: '10px' }}>
                <Value
                  bg="rgb(226, 48, 48)"
                  iclass="fa fa-trash my-auto"
                  istyle={{
                    fontSize: '24px',
                    color: 'rgb(254, 108, 78)'
                  }}
                  value="0"
                  desc="Failed"
                />
              </Col>
            </Row>
            <Row style={{ height: '50%' }}>
              <Col xs={6} style={{ padding: '10px' }}>
                <Value
                  bg="rgb(174, 86, 228)"
                  iclass="fa fa-shopping-cart my-auto"
                  istyle={{
                    fontSize: '24px',
                    color: 'rgb(0, 0, 0)'
                  }}
                  value="0"
                  desc="Orders"
                />
              </Col>
              <Col xs={6} style={{ padding: '10px' }}>
                <Value
                  bg="rgb(85, 85, 254)"
                  iclass="fa fa-wallet my-auto"
                  istyle={{
                    fontSize: '24px',
                    color: 'rgb(0, 0, 0)'
                  }}
                  value="$0"
                  desc="Spent"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      <div
        style={{
          width: '100%',
          height: '15%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button
          className="my-auto"
          variant="danger"
          style={{ width: '160px', background: 'rgb(39, 39, 39)' }}
        >
          Clear history
        </Button>
      </div>
    </div>
  );
}
