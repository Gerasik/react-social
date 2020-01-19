const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.text,
      };
    }
    case SEND_MESSAGE: {
      const newMess = {
        id: state.chat.length + 1,
        message: state.newMessageBody,
      };
      return {
        ...state,
        newMessageBody: '',
        chat: [...state.chat, newMess],
      };
    }
    default:
      return state;
  }
};

export const newMessageBodyActionCreactor = (value) => ({
  type: UPDATE_NEW_MESSAGE_BODY, text: value,
});

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

export default dialogsReducer;
