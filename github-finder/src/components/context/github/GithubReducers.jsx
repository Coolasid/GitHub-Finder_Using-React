
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
        case "GET_USER_AND_REPOS":
            return {
                ...state,
                repos:action.payload.repos,
                user: action.payload.user,
                isLoading:false

            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading:true
            }

        default:
            return state;
    }
}

