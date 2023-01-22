import { useState } from 'react';
import AIFace from '../AIFace';
import Chat from '../Chat';
import Console from '../Console';
import Editor from '../Editor';
import * as styles from './index.module.css';
import imgUrl from '../../assets/avatar.jpeg';

const MESSAGES = [
  { id: 'm-1', text: 'Hello fellow human' },
  { id: 'm-2', text: 'My name is John Keats' },
  { id: 'm-3', text: "If you read this I'll probably be already dead" },
];

const OPTIONS = [
  { id: 'o-1', text: 'Who are you again?' },
  { id: 'o-2', text: 'What do you want with me?' },
  { id: 'o-3', text: 'Is this a joke?' },
];

function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <AIFace url={imgUrl} />
        <Chat messages={MESSAGES} options={OPTIONS} onSelect={console.log} />
      </div>
      <div className={styles.rightColumn}>
        <Editor />
        <Console logs={MESSAGES} />
      </div>
    </div>
  );
}

export default Layout;
