import React, { CSSProperties } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Profile.css';

const bodyStyle: CSSProperties = {
  height: '98%',
  borderRadius: '5px',
  padding: '10px',
  background: 'rgb(39, 39, 39)'
};

const inputStyle: CSSProperties = {
  width: '100%',
  fontSize: '15px',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  paddingLeft: '10px',
  backgroundColor: '#464646'
};

// Shipping Information Style
const shippingStyle: CSSProperties = {
  height: '40%',
  marginBottom: '20px'
};

const shippingRowStyle: CSSProperties = {
  height: '20%'
};

// Billing Information Style
const billingStyle: CSSProperties = {
  height: '32%',
  marginBottom: '20px'
};

const billingRowStyle: CSSProperties = {
  height: '25%'
};

// Row 3 Style
const row3Style: CSSProperties = {
  marginBottom: '20px'
};

const row3CheckIconStyle: CSSProperties = {
  color: 'rgb(33, 150, 243)',
  background: 'white',
  borderRadius: '50%'
};

const row3TextStyle: CSSProperties = {
  color: 'rgb(170, 170, 170)'
};

export default function LeftView() {
  return (
    <div style={bodyStyle}>
      <div style={shippingStyle}>
        <Row style={shippingRowStyle}>
          <Col xs={8}>
            <h5>Shipping Information</h5>
          </Col>
          <Col xs={4}>
            <select style={inputStyle}>
              <option>United States</option>
            </select>
          </Col>
        </Row>
        <Row style={shippingRowStyle}>
          <Col xs={6}>
            <input placeholder="First name" style={inputStyle} />
          </Col>
          <Col xs={6}>
            <input placeholder="Last name" style={inputStyle} />
          </Col>
        </Row>
        <Row style={shippingRowStyle}>
          <Col xs={8}>
            <input placeholder="Address" style={inputStyle} />
          </Col>
          <Col xs={4}>
            <input placeholder="Apt/Suite(optional)" style={inputStyle} />
          </Col>
        </Row>
        <Row style={shippingRowStyle}>
          <Col xs={4}>
            <input placeholder="City" style={inputStyle} />
          </Col>
          <Col xs={4}>
            <select placeholder="State" style={inputStyle}>
              <option>State</option>
            </select>
          </Col>
          <Col xs={4}>
            <input placeholder="Postal Code" style={inputStyle} />
          </Col>
        </Row>
        <Row style={shippingRowStyle}>
          <Col xs={6}>
            <input placeholder="Phone number" style={inputStyle} />
          </Col>
          <Col xs={6}>
            <input placeholder="Email" style={inputStyle} />
          </Col>
        </Row>
      </div>
      <div style={billingStyle}>
        <Row style={billingRowStyle}>
          <Col xs={8}>
            <h5>Billing Information</h5>
          </Col>
        </Row>
        <Row style={billingRowStyle}>
          <Col xs={6}>
            <input placeholder="First name" style={inputStyle} />
          </Col>
          <Col xs={6}>
            <input placeholder="Last name" style={inputStyle} />
          </Col>
        </Row>
        <Row style={billingRowStyle}>
          <Col xs={8}>
            <input placeholder="Address" style={inputStyle} />
          </Col>
          <Col xs={4}>
            <input placeholder="Apt/Suite(optional)" style={inputStyle} />
          </Col>
        </Row>
        <Row style={billingRowStyle}>
          <Col xs={4}>
            <input placeholder="City" style={inputStyle} />
          </Col>
          <Col xs={4}>
            <select placeholder="State" style={inputStyle}>
              <option>State</option>
            </select>
          </Col>
          <Col xs={4}>
            <input placeholder="Postal Code" style={inputStyle} />
          </Col>
        </Row>
      </div>
      <Row style={row3Style}>
        <Col>
          <span>
            <i className="fa fa-check-circle" style={row3CheckIconStyle} />
            <span style={row3TextStyle}>
              &nbsp;&nbsp;Billing address same as shipping
            </span>
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col
              className="d-flex flex-row-reverse"
              style={{ alignItems: 'center' }}
            >
              <i className="fa fa-trash-alt" />
            </Col>
            <Col style={{ textAlign: 'center' }}>
              <input
                style={{
                  color: 'rgb(148, 148, 148)',
                  textAlign: 'center',
                  border: 'solid 1px',
                  borderRadius: '5px',
                  borderColor: '#464646',
                  background: 'rgb(37,37,37)'
                }}
                placeholder="Profile name"
              />
            </Col>
            <Col className="d-flex flex-row" style={{ alignItems: 'center' }}>
              <i className="fa fa-save" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
