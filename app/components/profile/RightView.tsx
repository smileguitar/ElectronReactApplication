// import React, { CSSProperties } from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

// const bodyStyle: CSSProperties = {
//   height: '100%',
//   borderRadius: '5px',
//   padding: '10px',
//   background: 'rgb(39, 39, 39)'
// };

// const inputStyle: CSSProperties = {
//   width: '100%',
//   fontSize: '15px',
//   color: 'white',
//   border: 'none',
//   borderRadius: '5px',
//   paddingLeft: '10px',
//   backgroundColor: '#464646'
// };

// // Shipping Information Style
// const shippingStyle: CSSProperties = {
//   height: '40%',
//   marginBottom: '20px'
// };

// const shippingRowStyle: CSSProperties = {
//   height: '20%'
// };

// // Billing Information Style
// const billingStyle: CSSProperties = {
//   height: '32%',
//   marginBottom: '20px'
// };

// const billingRowStyle: CSSProperties = {
//   height: '25%'
// };

// // Row 3 Style
// const row3Style: CSSProperties = {
//   marginBottom: '20px'
// };

// const row3CheckIconStyle: CSSProperties = {
//   color: 'rgb(33, 150, 243)',
//   background: 'white',
//   borderRadius: '50%'
// };

// const row3TextStyle: CSSProperties = {
//   color: 'rgb(170, 170, 170)'
// };

// export default function RightView() {
//   return (
//     <div style={bodyStyle}>
//       <div style={shippingStyle}>
//         <Row style={shippingRowStyle}>
//           <Col>
//             <h5>Payment Information</h5>
//           </Col>
//         </Row>
//         <Row style={shippingRowStyle}>
//           <Col xs={4}>
//             <select style={inputStyle}>
//               <option>Card Type</option>
//             </select>
//           </Col>
//           <Col xs={8}>
//             <input placeholder="Card Number" style={inputStyle} />
//           </Col>
//         </Row>
//         <Row style={shippingRowStyle}>
//           <Col xs={4}>
//             <select style={inputStyle}>
//               <option>Month</option>
//             </select>
//           </Col>
//           <Col xs={4}>
//             <select style={inputStyle}>
//               <option>Year</option>
//             </select>
//           </Col>
//           <Col xs={4}>
//             <select style={inputStyle}>
//               <option>CVV</option>
//             </select>
//           </Col>
//         </Row>
//       </div>
//       <div style={billingStyle}>
//         <Row style={billingRowStyle}>
//           <Col >
//             <h5>Profile Management</h5>
//           </Col>
//         </Row>
//         <Row style={billingRowStyle}>
//           <Col xs={6}>
//             <input placeholder="Profile Name" style={inputStyle} />
//           </Col>
//           <Col xs={6} style={{ textAlign: 'center' }}>
//             <Button size="sm" >Save</Button>
//           </Col>
//         </Row>
//         <Row style={billingRowStyle}>
//           <Col xs={6}>
//             <input placeholder="Delete Profile" style={inputStyle} />
//           </Col>
//           <Col xs={6} style={{ textAlign: 'center' }}>
//             <Button variant="danger" size="sm">Delet</Button>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// }

import React, { CSSProperties } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

import card1 from '../../assets/image/card1.jpg';
import card2 from '../../assets/image/card2.jpg';

const bodyStyle: CSSProperties = {
  height: '98%',
  padding: '5px'
};

const mainStyle: CSSProperties = {
  height: '100%',
  padding: '20px',
  borderRadius: '5px',
  background: 'rgb(160, 160, 160)'
};

const cardStyle: CSSProperties = {
  margin: '20px',
  borderRadius: '15px'
};

export default function RightView() {
  return (
    <div style={bodyStyle}>
      <div style={mainStyle}>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={card1} style={{ borderRadius: '15px' }} />
        </Card>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={card2} style={{ borderRadius: '15px' }} />
        </Card>
      </div>
    </div>
  );
}
