const INC = 'counter/INC'
const DEC = 'counter/DEC'

//action creators declarations
export const inc = (number = 1) => ({type: INC, number: number})
export const dec = (number = 1) => ({type: DEC, number: number})

//initial state - state that is present before any action
const initialState = 0

// state = initialState -> jeśli nie ma nic w stanie to użyj wartości initialState
export default (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return state + action.number
        case DEC:
            return state - action.number
        default:
            return state
    }
}