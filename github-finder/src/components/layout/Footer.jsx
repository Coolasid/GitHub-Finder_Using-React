import React from 'react'
import {FaSlackHash} from "react-icons/fa"

function Footer() {
  
    const footerYear = new Date().getFullYear();

  
    return (
    <footer className='footer p-3 gap-y-2  mt-6 bg-gray-700 text-primary-content footer-center'>

        <div>

        <FaSlackHash className='text-4xl '></FaSlackHash>
        </div>

        <div>
            Copyright &copy; {footerYear} All right reserved
        </div>
    </footer >
  )
}

export default Footer