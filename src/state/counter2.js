const INC = 'counter2/INC'
const DEC = 'counter2/DEC'

export const inc = () =>  ({type: INC})
export const dec = () =>  ({type: DEC})

const initialState = 0

export default (state = initialState, action)=> {
    switch (action.type) {
        case INC:
            return state + 1
        case DEC:
            return state - 1
        default:
            return state
    }
}