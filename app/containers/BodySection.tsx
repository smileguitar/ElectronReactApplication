import React, { ReactNode, CSSProperties } from 'react';

type Props = {
  children: ReactNode;
};

const style: CSSProperties = {
  background: 'rgb(54, 54, 54)',
  width: '100%',
  height: 'calc(100vh - (1.5rem + 1px))'
};

export default function BodySection(props: Props) {
  const { children } = props;
  return <section style={style}>{children}</section>;
}
