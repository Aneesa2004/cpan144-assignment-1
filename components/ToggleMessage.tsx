'use client';

import { useState } from 'react';
import styles from './ToggleMessage.module.css';

export default function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(true);

  const toggle = () => {
    setShowMessage(prev => !prev);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggle} className={styles.button}>
        {showMessage ? 'Hide' : 'Show'} Message
      </button>
      {showMessage && <p className={styles.message}>This is the toggled message!</p>}
    </div>
  );
}
