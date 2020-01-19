import React from 'react';
import styles from './dialogs.module.scss';
import DialogList from './DialogList/DialogList';
import MessageListContainer from './MessageList/MessageListContainer';

const Dialogs = () => (
  <div className={styles.wrap}>
    <h1 className={styles.head}>Dialogs</h1>
    <article className={styles.container}>
      <DialogList userList={['', '', '']} />
      <MessageListContainer />
    </article>
  </div>
);

export default Dialogs;
