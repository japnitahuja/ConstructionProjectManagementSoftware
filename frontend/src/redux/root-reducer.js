import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import projectReducer from './all-projects/all-projects.reducer';
import stepReducer from './all-steps/all-steps.reducer';
import taskReducer from './all-tasks/all-tasks.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
      'user',
      'project',
      'task'
    ],
  };

  
const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  task: taskReducer,
  step: stepReducer
});

export default persistReducer(persistConfig, rootReducer);