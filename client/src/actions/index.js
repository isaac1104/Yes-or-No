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
