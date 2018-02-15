import {combineReducers} from 'redux';
import todos from './todo/reducerToDo';
import  weather from '../sagas/reducerSaga'

export default combineReducers({todos, weather});