import axios from 'axios';
import * as types from './types';

export const authUser = () => async dispatch => {
  dispatch({ type: types.REQUEST_AUTH, payload: true });
  try {
    const request = await axios.get('/api/current_user');
    const { data } = request;
    dispatch({ type: types.AUTH_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: types.AUTH_ERROR, payload: e });
  }
};

export const fetchUnsplashPhoto = () => async dispatch => {
  dispatch({ type: types.REQUEST_UNSPLASH_PHOTO, payload: true });
  try {
    const request = await axios.get('/api/get_photo');
    const { data } = request;
    dispatch({ type: types.RECEIVE_UNSPLASH_PHOTO, payload: data });
  } catch (e) {
    dispatch({ type: types.REJECT_UNSPLASH_PHOTO, payload: e });
  }
};
