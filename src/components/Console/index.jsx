import { useState } from 'react';
import * as styles from './index.module.css';

function Console({ logs = [] }) {
  return (
    <div className={styles.container}>
      <ul>
        {logs.map(({ id, text }) => (
          <li key={id}>---- {text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Console;
