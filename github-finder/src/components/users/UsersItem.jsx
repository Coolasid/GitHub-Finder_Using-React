import React from 'react'

function UsersItem({user:{login, avatar_url}}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div className='flex-row items-center space-x-4 card-body'>
            <div>
                <div className='avatar'>
                    <div className='rounded-full shadow w-14 h-14'>
                            
                    </div>
                </div>
            </div>
            <div>

            </div>

        </div>
    </div>
  )
}

export default UsersItem