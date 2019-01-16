import { REQUEST_LIKED_PHOTO, RECEIVE_LIKED_PHOTO, REJECT_LIKED_PHOTO } from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  error: ''
};

const likedPhotosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_LIKED_PHOTO:
      return {
        ...state,
        isFetching: action.payload,
        data: [],
        error: ''
      };
    case RECEIVE_LIKED_PHOTO:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: ''
      };
    case REJECT_LIKED_PHOTO:
      return {
        ...state,
        data: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default likedPhotosReducer;
