import React from 'react'

function About() {
  return (
    <div>

      <h1 className='text-6xl mb-4'>Github finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is build by
        <a href='https://github.com/Coolasid'>
          {' '}
          Siddesh Patil
        </a>{' '}
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By: 
        <a className='text-white' href='https://www.linkedin.com/in/siddesh-patil-922759218/'>
          Siddesh Patil
        </a>
      </p>
      
    </div>
  )
}

export default About