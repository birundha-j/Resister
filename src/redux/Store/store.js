import { createStore ,applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import AllReducers from "../Reducer";

const middleware = [thunk];

const store = createStore(
    AllReducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
