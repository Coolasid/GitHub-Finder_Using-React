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

  
//get initial users but for testing purposes
  const fetchUsers = async ()=>{
    setLoading();
    const config = {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`
      }
    }

    const res = await axios.get(`${GITHUB_URL}/users`, config)
    
    dispatch({
        type:"GET_USERS",
        payload: res.data,
       
    })
    // console.log(res.data)
  }

  // SetLoading=>

  const setLoading = () => dispatch({type:"SET_LOADING"});

  return <githubContext.Provider value={{fetchUsers, users:state.users, isLoading:state.isLoading}}>{children}</githubContext.Provider>

}