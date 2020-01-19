import React from 'react';
import styles from './messageList.module.scss';

const MessageList = ({
  messages, sendMessage, changeValue, newMessageBody,
}) => (
  <section className={styles.wrap}>
    <div className={styles.messages}>
      {messages.map((item) => <p className={styles.item} key={item.id}>{item.message}</p>)}
    </div>
    <div className={styles.form}>
      <textarea onChange={changeValue} value={newMessageBody} />
      <button type="button" onClick={sendMessage}>Send message</button>
    </div>
  </section>
);

export default MessageList;
