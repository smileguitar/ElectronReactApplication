import React, { CSSProperties } from 'react';

const style: CSSProperties = {
  background: 'rgb(37, 37, 37)',
  width: '100%'
};

const styleDiv: CSSProperties = {
  marginLeft: '100px'
};

export default function Footer() {
  return (
    <footer style={style}>
      <div style={styleDiv}>Elite v0.0.1</div>
    </footer>
  );
}
