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

export const fetchLikedPhotos = () => async dispatch => {
  dispatch({ type: types.REQUEST_LIKED_PHOTO, payload: true });
  try {
    const request = await axios.get('/api/liked_photos');
    const { data } = request;
    dispatch({ type: types.RECEIVE_LIKED_PHOTO, payload: data });
  } catch (e) {
    dispatch({ type: types.REJECT_LIKED_PHOTO, payload: e });
  }
};

export const saveUnsplashPhoto = (url, callback) => async dispatch => {
  dispatch({ type: types.INITIALIZE_SAVING_PHOTO, payload: true });
  try {
    const request = await axios.post('/api/liked_photos', url);
    const { data } = request;
    dispatch({ type: types.SAVING_PHOTO_SUCCESS, payload: data });
    callback();
  } catch (e) {
    dispatch({ type: types.SAVING_PHOTO_FAIL, payload: e });
  }
};

export const deleteSavedPhoto = url => async dispatch => {
  try {
    await axios.delete('/api/liked_photos', { params: { url } });
    dispatch({ type: types.DELETE_LIKED_PHOTO, payload: url });
  } catch (e) {
    dispatch({ type: types.DELETE_LIKED_PHOTO, payload: e });
  }
};
