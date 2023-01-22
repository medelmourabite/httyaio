import { useEffect } from 'react';
import { useState } from 'react';
import * as styles from './index.module.css';

function Chat({ messages = [], options = [], onSelect }) {
  const [inputValue, setInputValue] = useState(undefined);

  useEffect(() => {
    setInputValue(undefined);
  }, [options, messages]);

  const onInputChange = ({ target }) => {
    const value = target.valueAsNumber ?? null;
    if (value !== null && value >= 0 && value < options.length) {
      setInputValue(value);
      onSelect(value);
    } else {
      setInputValue('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.messages}>
        {messages.map(({ id, text }) => (
          <div key={id} className={styles.message}>
            # {text}
          </div>
        ))}
      </div>
      <div className={styles.options}>
        {options.map(({ id, text }, index) => (
          <div key={id} className={styles.option}>
            {index} - {text}
          </div>
        ))}
      </div>
      <div className={styles.input}>
        <input
          type="number"
          value={inputValue}
          onChange={onInputChange}
          disabled={!options.length}
        ></input>
      </div>
    </div>
  );
}

export default Chat;
