import React, { CSSProperties } from 'react';

export default function Clock() {
  return (
    <div className="my-auto" style={{ display: 'flex' }}>
      <div
        style={{
          background: 'rgb(39, 39, 39)',
          marginRight: '2px',
          padding: '5px',
          borderRadius: '5px',
          fontSize: '14px'
        }}
      >
        <span style={{ color: 'darkgray' }}>HH:MMSS</span>
        &nbsp;&nbsp;
        <span>AM</span>
      </div>
      <div
        style={{
          background: 'rgb(39, 39, 39)',
          marginLeft: '2px',
          padding: '5px',
          borderRadius: '5px'
        }}
      >
        <i className="fa fa-clock" />
      </div>
    </div>
  );
}
