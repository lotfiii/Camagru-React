import { combineReducers } from 'redux';
import reducers_users from './reducers_users';
import {reducer as reducer_form} from 'redux-form';

const rootReducer = combineReducers({
  users: reducers_users,
  form: reducer_form,
  
});

export default rootReducer;
