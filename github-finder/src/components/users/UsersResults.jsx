import {useEffect, useContext} from 'react'
import Spinner from '../layout/Spinner';
import UsersItem from './UsersItem';
import { githubContext } from '../context/github/GithubContext';


function UsersResults() {

    const {isLoading, users} = useContext(githubContext)
    
    

//   console.log(users);

  return isLoading ? <Spinner></Spinner> : (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {
            users.map((user)=>{
            console.log(user.login);
           return <UsersItem key={user.id} user={user}></UsersItem>
        })}
    </div>
  )
 
}

export default UsersResults