import {createStore, combineReducers} from 'redux'
import counter, {inc, dec} from './state/counter'
import todos, {add, del} from './state/todos'
import textlive, {write} from './state/textlive'
import counter2, {inc as incCounter2, dec as decCounter2} from './state/counter2'

const reducer = combineReducers({
    counter2,
    counter,
    todos,
    textlive

})

export const store = createStore(
    reducer,

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


window.inc = (number) => store.dispatch(inc(number))
window.dec = (number) => store.dispatch(dec(number))

window.addTask = (taskText) => store.dispatch(add(taskText))
// window.addTask = (taskText) => store.dispatch(add(taskText))

store.dispatch(add('Wstań jak budzik zadzwoni'))