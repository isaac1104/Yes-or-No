import { REQUEST_UNSPLASH_PHOTO, RECEIVE_UNSPLASH_PHOTO, REJECT_UNSPLASH_PHOTO } from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  error: ''
};

const unsplashPhotoReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case REQUEST_UNSPLASH_PHOTO:
      return {
        ...state,
        isFetching: action.payload,
        data: [],
        error: ''
      };
    case RECEIVE_UNSPLASH_PHOTO:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: ''
      };
    case REJECT_UNSPLASH_PHOTO:
      return {
        ...state,
        isFetching: false,
        data: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default unsplashPhotoReducer;
