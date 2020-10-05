import React, { CSSProperties } from 'react';

import logoimg from '../assets/image/logo.png';

const style: CSSProperties = {
  width: '4.6rem',
  height: '4.6rem',
  marginBottom: '15px'
};

export default function Logo() {
  return <img src={logoimg} style={style} alt="Elite Unified" />;
}
