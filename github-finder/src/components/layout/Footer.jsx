import React from 'react'
import {FaSlackHash} from "react-icons/fa"

function Footer() {
  
    const footerYear = new Date().getFullYear();

  
    return (
    <footer className='footer p-3 gap-y-2  bg-gray-700 text-primary-content footer-center'>

        <div>

        <FaSlackHash className='text-5xl '></FaSlackHash>
        </div>

        <div>
            Copyright &copy; {footerYear} All right reserved
        </div>
    </footer >
  )
}

export default Footer