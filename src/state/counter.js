const INC = 'counter/INC'
const DEC = 'counter/DEC'

//action creators declarations
const inc = () => ({type: INC})
const dec = () => ({type: DEC})

//initial state - stte that is present before any action
const initialState = 0

// state = initialState -> jeśli nie ma nic w stanie to użyj wartości initialState
export default (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return state + 1
        case DEC:
            return state - 1
        default:
            return state
    }
}