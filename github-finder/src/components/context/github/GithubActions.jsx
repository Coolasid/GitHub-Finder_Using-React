import axios  from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


    const github = axios.create({
        baseURL: GITHUB_URL,
        headers:{Authorization: `token ${GITHUB_TOKEN}`}
    }) 

    //get search results but for testing purpose
  export  const searchUsers = async (text)=>{

    const params = new URLSearchParams({
        q:text
    })

    const res = await github.get(`/search/users?${params}`)
    // console.log(res);

    return res.data.items;
    // console.log(res.data)
  }

  
  //get a single user and repos
 export const getUserAndRepos = async (login) =>{
    // setLoading();

    const [user, repos] = await Promise.all([github.get(`/users/${login}`), github.get(`/users/${login}/repos`) ]) 

    console.log(user, repos);
    if(user.status === 404){
        window.location = "/notfound"
    }

    // console.log(res);

    return {user:user.data, repos:repos.data}

  } 
