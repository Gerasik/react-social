import { connect } from 'react-redux';
import Users from './Users';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/usersReducer';

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(followActionCreator(userId)),
  unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
  setUsers: (data) => dispatch(setUsersActionCreator(data)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
