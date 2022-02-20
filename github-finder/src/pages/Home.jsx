import {useEffect, useState} from 'react'
import UsersResults from '../components/users/UsersResults'
import axios from "axios"
import UserSearch from '../components/users/UserSearch'


function Home() {

  return (
    <>
        <UserSearch></UserSearch> 
        <UsersResults></UsersResults>
    </>
  )
}

export default Home