import React from 'react';
import Post from './Post/Post';
import styles from './myPosts.module.scss';

const MyPosts = ({
  posts, newPostText, addPost, editMessage,
}) => (
  <article>
    <header className={styles.head}><span>My posts</span></header>
    <section className={styles['_post-add']}>
      <textarea value={newPostText} onChange={editMessage} />
      <button onClick={addPost} type="button">Add post</button>
    </section>
    <section className={styles['_posts-list']}>
      {posts.map((item) => <Post key={item.id} message={item.message} likesCount={item.likes} />)}
    </section>
  </article>
);

export default MyPosts;
