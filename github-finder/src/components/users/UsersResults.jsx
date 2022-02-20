import {useEffect, useState} from 'react'
import axios from "axios"
import Spinner from '../layout/Spinner';
import UsersItem from './UsersItem';


function UsersResults() {

    
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    
    fetchUsers()

  },[])

  const fetchUsers = async ()=>{

    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    }

    const res = await axios.get(`${process.env.REACT_APP_GITHUB_URL}/users`, config)
    
    setUsers(res.data);
    setIsLoading(false);
    // console.log(res.data);


  }
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