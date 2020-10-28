import {combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import newsReducer from "./reducers/newsReducer";

const reducers = combineReducers({
    auth: authReducer,
    sidebar: sidebarReducer,
    news: newsReducer,
});

const store = createStore(reducers);

export default store;