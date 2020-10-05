import React, { ReactNode, CSSProperties } from 'react';

type Props = {
  children: ReactNode;
};

const style: CSSProperties = {
  background: 'rgb(17, 17, 17)',
  width: '6rem',
  height: '100vh',
  float: 'left',
  padding: '10px',
  textAlign: 'center'
};

export default function MenuSection(props: Props) {
  const { children } = props;
  return <aside style={style}>{children}</aside>;
}
