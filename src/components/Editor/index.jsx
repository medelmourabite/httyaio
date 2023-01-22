import { useState } from 'react';
import * as styles from './index.module.css';

function Editor() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button type="button" className={styles.button}>
          RUN
        </button>
        <button type="button" className={styles.button}>
          CLEAR
        </button>
      </div>
      <div className={styles.editor}>
        <textarea></textarea>
      </div>
    </div>
  );
}

export default Editor;
