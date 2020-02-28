import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './index.module.css';

function Form({ onAdd }: { onAdd: (item: string) => void }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value.length) return;

    onAdd(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        placeholder="Enter new task"
      />

      <button type="submit" className={styles.button}>Add task</button>
    </form>
  );
}

export default Form;
