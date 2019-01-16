import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import unsplashPhotoReducer from './unsplash_photo_reducer';
import likedPhotosReducer from './liked_photos_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  photo: unsplashPhotoReducer,
  likedPhotos: likedPhotosReducer
});

export default rootReducer;
