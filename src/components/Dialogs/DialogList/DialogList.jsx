import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import styles from './dialoglist.module.scss';

const DialogList = ({ userList }) => (
  <section className={styles.list}>
    {userList.map((item) => <DialogItem name={item.name} id={item.id} key={item.id} />)}
  </section>
);

export default DialogList;
