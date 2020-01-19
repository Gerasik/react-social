import React, { Component } from 'react';
import User from './User/User';
import styles from './users.module.scss';

class Users extends Component {
  componentDidMount() {
    const { setUsers } = this.props;
    fetch('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => response.json())
      .then((response) => {
        setUsers(response.items);
      });
  }

  render() {
    const {
      users,
      setUsers,
      unfollow,
      follow,
      pageSize,
      totalUsersCount,
      currentPage,
    } = this.props;
    const pagesCount = totalUsersCount / pageSize;
    const pages = [];

    for (let index = 1; index < pagesCount + 1; index += 1) {
      pages.push(index);
    }
    return (
      <section>
        <div className={styles.pagination}>
          {pages.map((i) => (
            <span className={[styles.page, i === currentPage ? styles.page__select : null].join(' ')}>{i}</span>
          ))}
        </div>
        <ul className={styles.list}>
          {
            users.map((user) => (
              <User
                key={user.id}
                user={user}
                buttonAction={user.followed ? unfollow : follow}
                setUsers={setUsers}
              />
            ))
          }
        </ul>
      </section>
    );
  }
}

export default Users;
