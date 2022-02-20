import {useEffect, useState} from 'react'
import UsersResults from '../components/users/UsersResults'
import axios from "axios"

function Home() {

  return (
    <>
    {/* search component */}
        <UsersResults></UsersResults>
    </>
  )
}

export default Home