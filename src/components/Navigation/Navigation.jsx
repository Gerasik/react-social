import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

const Navigation = () => {
  const active = styles['_link--active'];
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}><NavLink to="/profile" className={styles.link} activeClassName={active}>Profile</NavLink></li>
        <li className={styles.item}><NavLink to="/users" className={styles.link} activeClassName={active}>Users</NavLink></li>
        <li className={styles.item}><NavLink to="/dialogs" className={styles.link} activeClassName={active}>Messages</NavLink></li>
        <li className={styles.item}><NavLink to="/news" className={styles.link} activeClassName={active}>News</NavLink></li>
        <li className={styles.item}><NavLink to="/music" className={styles.link} activeClassName={active}>Music</NavLink></li>
        <li className={styles.item}><NavLink to="/settings" className={styles.link} activeClassName={active}>Settings</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
