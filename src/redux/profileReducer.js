const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
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
  newPostText: 'new post',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newMess = {
        id: state.postData.length + 1,
        message: state.newPostText,
        likes: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newMess],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (value) => ({
  type: UPDATE_NEW_POST_TEXT, text: value,
});

export default profileReducer;
