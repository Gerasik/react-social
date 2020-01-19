import React from 'react';
import styles from './profile.module.scss';
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Main = () => (
  <article className={styles.wrap}>
    <ProfileInfo />
    <MyPostsContainer />
  </article>
);

export default Main;
