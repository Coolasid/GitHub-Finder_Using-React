
export const githubReducer = (state, action) =>{
    
    switch(action.type){
        case "GET_USERS":
            return {
                ...state, 
                users: action.payload,
                isLoading:false
            }
        case "CLEAR_SEARCH":
            return {
                ...state,
                users: action.payload,
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading:true
            }
        case "GET_SINGLE_USER":
            return {
                ...state,
                user: action.payload,
                isLoading:false
            }

        default:
            return state;
    }
}

