import {combineReducers} from 'redux'

const searchReducer = (search = "" , action) =>{
    if(action.type === 'SEARCH')
    {
        return action.payload
    }
    return search
}

const allReducers = combineReducers({
    search: searchReducer,
})


export default allReducers