import {createContext, useReducer} from 'react'
import axios from 'axios';
import { githubReducer } from './GithubReducers';

export var githubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) =>{

    const initalState = {
        users: [],
        isLoading: false 
    }

    const [state, dispatch] = useReducer(githubReducer, initalState)

  
//get search results but for testing purpose
  const searchUsers = async (text)=>{
    setLoading();

    const config = {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`
      }
    }

    const params = new URLSearchParams({
        q:text
    })

    const res = await axios.get(`${GITHUB_URL}/search/users?${params}`, config)
    console.log(res);

    dispatch({
        type:"GET_USERS",
        payload: res.data.items,
       
    })
    // console.log(res.data)
  }

  // SetLoading=>

  const setLoading = () => dispatch({type:"SET_LOADING"});

  // clear Search=>

  const clearSearch = () =>{

    dispatch({
        type:"CLEAR_SEARCH",
        payload: []
    })

  }

  return <githubContext.Provider value={{searchUsers, clearSearch, users:state.users, isLoading:state.isLoading}}>{children}</githubContext.Provider>

}