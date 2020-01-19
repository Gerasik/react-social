import React from 'react';
import logo from './logo.svg';
import styles from './header.module.scss'

const Header = () => (
    <header className={styles._wrap}>
      <img src={logo} className={styles._logo} alt='logo'/>
    </header>
  );

export default Header;
