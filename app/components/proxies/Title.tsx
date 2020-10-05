import React, { CSSProperties } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const addIconStyle: CSSProperties = {
  color: 'rgb(160, 198, 98)'
};

const selectorStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundColor: 'rgb(160, 198, 98)',
  fontSize: '20px'
};

const penIconStyle: CSSProperties = {
  color: 'white'
};

const deleteIconStyle: CSSProperties = {
  color: 'rgb(255, 60, 0)'
};

export default function Title() {
  return (
    <Row>
      <Col xs={4}>
        <h2> Proxies </h2>
      </Col>
      <Col xs={8}>
        <div
          className="float-right"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginRight: '-15px'
          }}
        >
          <div
            className="my-auto"
            style={{ width: '40px', marginLeft: '07px' }}
          >
            <Button variant="outline-dark" style={addIconStyle}>
              <i className="fa fa-plus" />
            </Button>
          </div>
          <div
            className="my-auto"
            style={{ width: '130px', marginLeft: '07px' }}
          >
            <select style={selectorStyle}>
              <option> </option>
            </select>
          </div>
          <div
            className="my-auto"
            style={{ width: '40px', marginLeft: '07px' }}
          >
            <Button variant="outline-dark" style={penIconStyle}>
              <i className="fa fa-save" />
            </Button>
          </div>
          <div
            className="my-auto"
            style={{ width: '40px', marginLeft: '07px' }}
          >
            <Button variant="outline-dark" style={penIconStyle}>
              <i className="fa fa-pen" />
            </Button>
          </div>
          <div
            className="my-auto"
            style={{ width: '40px', marginLeft: '07px' }}
          >
            <Button variant="outline-dark" style={deleteIconStyle}>
              <i className="fa fa-trash-alt" />
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
