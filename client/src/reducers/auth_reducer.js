import { REQUEST_AUTH, AUTH_SUCCESS, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
  isAuthenticating: null,
  userData: [],
  errorMsg: ''
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_AUTH:
      return {
        ...state,
        isAuthenticating: action.payload,
        userData: [],
        errorMsg: ''
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        userData: action.payload,
        errorMsg: ''
      };
    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticating: false,
        userData: [],
        errorMsg: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
