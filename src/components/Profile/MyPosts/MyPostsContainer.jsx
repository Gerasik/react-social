// import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  posts: state.profilePage.postData,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: () => {
    dispatch(addPostActionCreator());
  },
  editMessage: (e) => {
    dispatch(updateNewPostTextActionCreator(e.target.value));
  },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
