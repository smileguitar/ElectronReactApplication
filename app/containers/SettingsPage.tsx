import React, { CSSProperties } from 'react';

import Body from '../components/settings/Body';

import styles from './Content.css';

// type Props = {
//   children: ReactNode;
// };

export default function SettingsPage() {
  return (
    <div className={styles['content-wrapper']}>
      <h2>Settings</h2>
      <Body />
    </div>
  );
}
