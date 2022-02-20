import {useEffect, useState} from 'react'
import UsersResults from '../components/users/UsersResults'
import axios from "axios"
import userSearch from '../components/users/userSearch'

function Home() {

  return (
    <>
        <userSearch></userSearch>
        <UsersResults></UsersResults>
    </>
  )
}

export default Home