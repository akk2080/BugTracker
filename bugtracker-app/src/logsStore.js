import {createStore} from 'redux';
import logsReducer from './logsReducer';

const store = createStore(logsReducer);

export default store;
