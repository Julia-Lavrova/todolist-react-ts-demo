import React from 'react';
import styles from './index.module.css';

import TODOList from '../TODOList';

function App() {
  return (
    <section className={styles.app}>
      <h1>TODO list with TS</h1>

      <TODOList />
    </section>
  );
}

export default App;
