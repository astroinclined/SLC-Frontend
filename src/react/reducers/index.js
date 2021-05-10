import {combineReducers} from 'redux'

const searchReducer = (search = "" , action) =>{
    if(action.type === 'SEARCH')
    {
        return action.payload
    }
    return search
}


const tagReducer = (tag = "", action) =>{
    if(action.type === 'TAG')
    {
        return action.payload
    }
    return tag
}

const countReducer = (count = 0, action) =>
{
    if(action.type == 'INCREMENT')
    {
        return count+1
    }
    return count
}

const sourceReducer = (source="" , action) =>
{
    if(action.type =='SOURCE'){
        return action.payload
    }
    return source
}
const allReducers = combineReducers({
    search: searchReducer,
    tag: tagReducer,
    count: countReducer,
    source: sourceReducer
})


export default allReducers