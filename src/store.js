import {createStore, combineReducers} from 'redux'
import counter, {inc, dec} from './state/counter'
import todos, {add, del} from './state/todos'


const reducer = combineReducers({
    counter,
    todos

})

export const store = createStore(
    reducer,

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = (number) => store.dispatch(inc(number))
window.dec = (number) => store.dispatch(dec(number))

window.addTask = (taskText) => store.dispatch(add(taskText))
// window.addTask = (taskText) => store.dispatch(add(taskText))