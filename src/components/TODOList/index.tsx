import React, { useState } from 'react';
import styles from './index.module.css';
import ListItem from '../ListItem';

function TODOList() {
  const [items, setItems] = useState(['buy milk', 'tidy up']);

  const handleItemRemove = (item: string) => {
    setItems((prevItemsState) => prevItemsState.filter(el => el !== item));
  }

  return (
    <ul className={styles.todoList}>
      {items.length === 0 && (
        <li>There is no any tasks</li>
      )}

      {items.map((item) => (
        <ListItem item={item} onRemove={handleItemRemove} />
      ))}
    </ul>
  );
}

export default TODOList;
