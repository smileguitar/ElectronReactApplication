import React, { CSSProperties } from 'react';

import Body from '../components/profile/Body';

import styles from './Content.css';

// type Props = {
//   children: ReactNode;
// };

export default function ProfilePage() {
  return (
    <div className={styles['content-wrapper']}>
      <h2>Profile</h2>
      <Body />
    </div>
  );
}
