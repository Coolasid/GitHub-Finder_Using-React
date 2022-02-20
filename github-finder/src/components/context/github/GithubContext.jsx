import {createContext, useReducer} from 'react'
import { githubReducer } from './GithubReducers';

export var githubContext = createContext();


export const GithubProvider = ({children}) =>{

    const initalState = {
        users: [],
        user:{},
        repos:[],
        isLoading: false 
    }
    
    const [state, dispatch] = useReducer(githubReducer, initalState)
    


  // clear Search=>

  

  return <githubContext.Provider value={{ ...state, dispatch}}>{children}</githubContext.Provider>

}