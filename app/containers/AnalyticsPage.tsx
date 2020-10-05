import React, { CSSProperties } from 'react';
import Body from '../components/analytics/Body';

import styles from './Content.css';

import bgimg from '../assets/image/bg-analytics.jpg';

// type Props = {
//   children: ReactNode;
// };

const style: CSSProperties = {
  background: `url(${bgimg})`,
  width: '4.6rem',
  height: '100vh',
  float: 'left',
  padding: '10px',
  textAlign: 'center'
};

export default function AnalyticsPage() {
  return (
    <div
      className={styles['content-wrapper']}
      style={{ background: `url(${bgimg})` }}
    >
      <Body />
    </div>
  );
}
