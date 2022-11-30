import { legacy_createStore as createStore } from "redux";
import reducer from './reducer'

export const myStore = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())