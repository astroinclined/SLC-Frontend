import Search from "../components/Search";

export const changeSearch = (payload) => {
    return{
        type: 'SEARCH',
        payload: payload

    }
}

export const tagSearch = (payload) =>{
    return{
        type: 'TAG',
        payload: payload
    }
}
export const increment = (payload) =>
{
    return{
        type: 'INCREMENT',
        payload: payload
    }
}

export const sourceSearch = (payload) =>{
    return{
        type: 'SOURCE',
        payload: payload
    }
}