import postsList from '../data/posts'

const postReducer = function posts(state = postsList, action) {
    switch(action.type) {
        case 'REMOVE_POST': return [...state.slice(0,action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST': return [...state,action.post]
        default: return state
    }
}

export default postReducer