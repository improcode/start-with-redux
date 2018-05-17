import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import counter, {inc, dec} from './state/counter'
import todos, {add, del} from './state/todos'
import textlive, {write} from './state/textlive'
import counter2, {inc as incCounter2, dec as decCounter2} from './state/counter2'
import randomUsers, {setUsersList, fetchUsers} from './state/randomUsers'
import asyncReduxCounter, {initCounterSync} from './state/asyncReduxCounter'
import auth, {initAuthUserSync} from "./state/auth";
import sidebar from './state/sidebar'

const reducer = combineReducers({
    sidebar,
    auth,
    asyncReduxCounter,
    counter2,
    counter,
    todos,
    textlive,
    randomUsers

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
)

store.dispatch(initAuthUserSync())
store.dispatch(initCounterSync())