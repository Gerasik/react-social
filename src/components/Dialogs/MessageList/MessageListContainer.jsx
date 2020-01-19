// import React from 'react';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import { sendMessageActionCreator, newMessageBodyActionCreactor } from '../../../redux/dialogsReducer';
// import Dialogs from '../Dialogs';

const mapStateToProps = (state) => ({
  messages: state.dialogPage.chat,
  newMessageBody: state.dialogPage.newMessageBody,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    dispatch(sendMessageActionCreator());
  },
  changeValue: (e) => {
    dispatch(newMessageBodyActionCreactor(e.target.value));
  },
});

const MessageListContainer = connect(mapStateToProps, mapDispatchToProps)(MessageList);

export default MessageListContainer;
