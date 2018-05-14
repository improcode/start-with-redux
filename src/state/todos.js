const ADD = 'todos/ADD'
const DEL = 'todos/DEL'

export const add = (taskText) => ({type: ADD, taskText})
export const del = (index) => ({type: DEL, index})

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return action.taskText ?
                state.concat({
                    text: action.taskText,
                    completed: false
                })
                :
                state
        case DEL:
            return state.filter((task, index) => index !== action.index
        )
        default:
            return state
    }

}