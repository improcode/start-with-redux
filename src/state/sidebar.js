export const OPEN = 'sidebar/OPEN'
export const CLOSE = 'sidebar/CLOSE'

export const  open = () => ({type: OPEN})
export const  close = () => ({type: CLOSE})

const initialState = {
    isSidebarOpen: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN:
            return {
                ...state,
                isSidebarOpen: true
            }
        case CLOSE:
            return {
                ...state,
                isSidebarOpen: false
            }
        default:
            return state
    }
}