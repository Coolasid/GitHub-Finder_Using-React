import {useContext, useEffect} from 'react'
import {githubContext} from "../components/context/github/GithubContext"
import {useParams} from "react-router-dom"
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from "react-icons/fa"
import {Link} from "react-router-dom";
import Spinner from '../components/layout/Spinner';

function User() {

    let { user, singleUser, isLoading} = useContext(githubContext)

    const params = useParams();

    let {
        name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    } = user

    useEffect(()=>{
        singleUser(params.login)
    }, [])

    console.log(user);

  return isLoading ? <Spinner></Spinner> : (
     <>
        <div className='w-full mx-auto lg:w-10/12'>
            <div className='mb-4'>
                <Link to={"/"} className='btn btn-ghost'>
                    Back To Search
                </Link>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
                <div className='custom-card'>

                </div>
            </div>
        </div>
    </>
  )
  
}

export default User