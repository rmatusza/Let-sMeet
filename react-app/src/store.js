import { createStore } from 'redux';
import {eventReducer} from './reducers/eventReducer';

export const store = createStore(eventReducer);
