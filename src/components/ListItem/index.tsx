import React from 'react';
import { ReactComponent as RemoveIcon } from 'icons/remove.svg';
import styles from './index.module.css';

export interface ItemProps {
  item: string;
  onRemove: (item: string) => void;
}

function ListItem({ item, onRemove }: ItemProps) {
  return (
    <li className={styles.listItem}>
      {item}
      <button onClick={() => onRemove(item)} className={styles.listItem__button}>
        <RemoveIcon />
      </button>
    </li>
  );
}

export default ListItem;
