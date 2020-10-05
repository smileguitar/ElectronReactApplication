import React, { CSSProperties } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import logoimg from '../../assets/image/logo.png';

const bodyStyle: CSSProperties = {
  height: 'calc(100% - 45px)',
  marginTop: '10px'
};

export default function Body() {
  let webhookInput: HTMLInputElement;

  function onSave() {
    // console.log("onSave");
    if (webhookInput.value !== '')
      localStorage.setItem('web-hook', webhookInput.value);
  }

  return (
    <Row style={bodyStyle}>
      <Col xs={11} style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '75%', height: '100%' }}>
          <div
            style={{
              width: '100%',
              height: '20%',
              marginBottom: '20px',
              borderRadius: '5px',
              backgroundColor: 'rgb(39, 39, 39)'
            }}
          >
            <Row style={{ margin: '0px', height: '100%' }}>
              <Col className="my-auto" xs={2}>
                <img
                  style={{ width: '3rem', height: '3rem' }}
                  src={logoimg}
                  alt=""
                />
              </Col>
              <Col className="my-auto" xs={3}>
                <div>
                  orion#1997
                  <br />
                  Renewal
                </div>
              </Col>
              <Col className="my-auto" xs={5}>
                <div>
                  Membership Details
                  <br />
                  <span style={{ fontSize: '12px' }}>Expires: Oct 6,2020</span>
                </div>
              </Col>
              <Col className="my-auto" xs={2}>
                <span style={{ color: 'red', fontSize: '12px' }}>
                  <strong>Deactivate</strong>
                </span>
              </Col>
            </Row>
          </div>
          <div
            style={{
              width: '100%',
              height: '30%',
              marginBottom: '20px',
              borderRadius: '5px',
              padding: '15px',
              backgroundColor: 'rgb(39, 39, 39)'
            }}
          >
            <div
              style={{
                height: '25%',
                display: 'flex',
                fontSize: '18px',
                color: 'gray'
              }}
            >
              <span className="my-auto">License Details</span>
            </div>
            <div
              style={{
                height: '25%',
                display: 'flex',
                fontSize: '18px',
                color: 'gray'
              }}
            >
              <span className="my-auto">Key : &nbsp;</span>
              <span className="my-auto">*****************</span>
            </div>
            <div
              style={{
                height: '25%',
                display: 'flex',
                fontSize: '18px',
                color: 'gray'
              }}
            >
              <span className="my-auto">Type : &nbsp;</span>
              <span className="my-auto" style={{ color: 'dodgerblue' }}>
                Lifetime
              </span>
            </div>
            <div
              style={{
                height: '25%',
                display: 'flex'
              }}
            >
              <div className="my-auto" style={{ width: '100%' }}>
                <Button variant="success" size="sm" style={{ width: '120px' }}>
                  Show Key
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  variant="secondary"
                  size="sm"
                  style={{ width: '120px' }}
                >
                  Deactivate
                </Button>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              height: '10%',
              marginBottom: '20px',
              padding: '15px',
              borderRadius: '5px',
              backgroundColor: 'rgb(39, 39, 39)',
              display: 'flex'
            }}
          >
            <div className="my-auto" style={{ width: '100%' }}>
              <div
                className="float-left"
                style={{ fontSize: '18px', color: 'gray' }}
              >
                Monitor Delays
              </div>
              <div
                className="float-right"
                style={{
                  width: '25%',
                  backgroundColor: 'black',
                  textAlign: 'center'
                }}
              >
                0
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              height: '10%',
              marginBottom: '20px',
              padding: '15px',
              borderRadius: '5px',
              backgroundColor: 'rgb(39, 39, 39)',
              display: 'flex'
            }}
          >
            <div className="my-auto" style={{ width: '100%' }}>
              <div
                className="float-left"
                style={{ fontSize: '18px', color: 'gray' }}
              >
                Discord Webhook
              </div>
              <input
                className="float-right"
                style={{
                  width: '60%',
                  color: 'white',
                  backgroundColor: 'black',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '0px 5px'
                }}
                placeholder="Webhook url"
                ref={c => {
                  webhookInput = c as HTMLInputElement;
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: '100%',
              height: '10%'
            }}
          >
            <Row style={{ height: '100%' }}>
              <Col className="my-auto" style={{ textAlign: 'center' }}>
                <Button variant="light" size="sm">
                  Test Webhook
                </Button>
              </Col>
              <Col className="my-auto" style={{ textAlign: 'center' }}>
                <Button variant="success" size="sm">
                  Check for Updates
                </Button>
              </Col>
              <Col className="my-auto" style={{ textAlign: 'center' }}>
                <Button variant="info" size="sm" onClick={onSave}>
                  Save Settings
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
      <Col xs={1} style={{ height: '98%' }}>
        <Row style={{ position: 'absolute', bottom: '0' }}>
          <Button variant="light" size="sm">
            <i className="fa fa-download" />
          </Button>
          &nbsp;&nbsp;
          <Button variant="light" size="sm">
            <i className="fa fa-upload" />
          </Button>
        </Row>
      </Col>
    </Row>
  );
}
