/* eslint-disable no-underscore-dangle */
import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';

const store = {
  _state: {
    profile: {
      postData: [
        { id: 1, message: 'Hi, how are you?', likes: 7 },
        { id: 2, message: "It's my first post", likes: 7 },
        {
          id: 3,
          message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
          likes: 7,
        },
      ],
      newPostText: 'new massage',
    },
    messages: {
      userList: [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Anna' },
        { id: 3, name: 'David' },
        { id: 4, name: 'Lesha' },
        { id: 5, name: 'Anton' },
        { id: 6, name: 'Valera' },
        { id: 7, name: 'Stas' },
        { id: 8, name: 'Stepa' },
      ],
      chat: [
        {
          id: 1,
          message: 'Hi',
        },
        {
          id: 2,
          message: 'How are you?',
        },
        {
          id: 3,
          message: 'Yo',
        },
      ],
      newMessageBody: 'New message',
    },
  },
  _callSubscriber() {
    window.console.log('empty observer');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messages = dialogReducer(this._state.messages, action);
    this._callSubscriber();
  },
};

export default store;
