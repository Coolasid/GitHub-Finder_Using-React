import {createContext, useReducer} from 'react'
import axios from 'axios';
import { githubReducer } from './GithubReducers';

export var githubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) =>{

    const initalState = {
        users: [],
        user:{},
        repos:[],
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
    // console.log(res);

    dispatch({
        type:"GET_USERS",
        payload: res.data.items,
       
    })
    // console.log(res.data)
  }

  //get a single user
  const singleUser = async (login) =>{
    // setLoading();

    setLoading();

    const config = {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`
      }
    }

    const res = await axios.get(`${GITHUB_URL}/users/${login}`, config)

    if(res.status === 404){
        window.location = "/notfound"
    }

    // console.log(res);

    dispatch({
        type:"GET_SINGLE_USER",
        payload:res.data
    })

  }

  //get repos 
  const getRepos = async(login) =>{

    setLoading();
    
    const config = {
        headers:{
            Authorization: `Bearer ${GITHUB_TOKEN}`
        }
    }

    const res = await axios.get(`${GITHUB_URL}/users/${login}/repos`,config )

    dispatch({
        type:"GET_USER_REPO",
        payload:res.data
    })

    // console.log(res);
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

  return <githubContext.Provider value={{searchUsers, singleUser, repos:state.repos, getRepos,   clearSearch, users:state.users, user:state.user, isLoading:state.isLoading}}>{children}</githubContext.Provider>

}