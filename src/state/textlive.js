
const LIVE_WRITING = 'textlive/LIVE_WRITING'

export const write = (text) => ({
    type: LIVE_WRITING,
    text
})

const initialState = ''

export default (state = initialState, action) => {
    switch (action.type) {
        case LIVE_WRITING:
            return action.text
        default:
            return state
    }
}