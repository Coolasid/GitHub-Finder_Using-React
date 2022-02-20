import {useState, useContext} from 'react'
import { githubContext } from '../context/github/GithubContext'
import { AlertContext} from "../context/alertContext/AlertContext"
import {searchUsers} from "../context/github/GithubActions"

function UserSearch() {

    const {users, dispatch } = useContext(githubContext)
    const {setAlert, alert }  = useContext(AlertContext);
    

    const [text, setText] = useState("")

    const handleChange = (e)=> (setText(e.target.value))

    const submitText = async  (e) =>{
        e.preventDefault()

        if(text.trim() === ""){
            setAlert("Please Enter Something", "error")
        }else{
            // to do search users

            dispatch({type:"SET_LOADING"})
           const users =  await searchUsers(text)

            dispatch({
                type:"GET_USERS",
                payload:users
            })
            setText("")
        }
        console.log(text);
    }

    const clearSearch = () =>{

    dispatch({
        type:"CLEAR_SEARCH",
        payload: []
    })

  }

    

  return (
    <div className=' grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form  className='form-control' onSubmit={submitText}>
                <div className='relative'>
                        <input type="text" className='w-full pr-40 bg-gray-200 input input-lg text-black' value={text} onChange={handleChange} placeholder='Search... '/>
                        <button type='submit' className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>Go</button>
                </div>
            </form>
        </div>
        {users.length > 0 && (<div>
            <button className='btn btn-ghost btn-lg' onClick={clearSearch}>
                Clear
            </button>
        </div>) }
        
    </div>
  )
}

export default UserSearch