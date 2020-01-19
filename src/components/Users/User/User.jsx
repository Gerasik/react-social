import React from 'react';
import styles from './user.module.scss';

const User = ({ user, buttonAction }) => (
  <li className={styles.container}>
    <div className={styles.control}>
      <img
        className={styles.photo}
        src={user.photos.small ? user.photos.small : 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg'}
        alt="user portrait"
      />
      {
        user.followed ? <button type="button" onClick={() => buttonAction(user.id)} className={styles.follow}>Follow</button> : <button type="button" onClick={() => buttonAction(user.id)} className={styles.unfollow}>Unfollow</button>
      }
    </div>
    <div className={styles.user_info}>
      <span className={styles.fullname}>{user.name}</span>
      <span className={styles.status}>{user.status}</span>
      {/* <span className={styles.city}>{user.location.city}</span> */}
      {/* <span className={styles.country}>{user.location.country}</span> */}
    </div>
  </li>
);


export default User;
