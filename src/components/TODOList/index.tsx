import React, { useState } from 'react';

import Form from 'components/Form';
import ListItem from 'components/ListItem';

import styles from './index.module.css';

function TODOList() {
  const [items, setItems] = useState(['buy milk', 'tidy up']);

  const handleItemRemove = (item: string) => {
    setItems((prevItemsState: Array<string>) => prevItemsState.filter(el => el !== item));
  }

  const handleItemAdd = (item: string) => {
    setItems((prevItemsState: Array<string>) => prevItemsState.concat(item));
  }

  return (
    <>
      <ul className={styles.todoList}>
        {items.length === 0 && (
          <li>There is no any tasks</li>
        )}

        {items.map((item) => (
          <ListItem item={item} onRemove={handleItemRemove} key={item} />
        ))}
      </ul>

      <Form onAdd={handleItemAdd} />
    </>
  );
}

export default TODOList;
