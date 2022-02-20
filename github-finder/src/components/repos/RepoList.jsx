import React from 'react'
import RepoItems from './RepoItems';

function RepoList({repos}) {
    console.log(repos);
  return (
    <div className='rounded-lg  shadow-lg card bg-base-100'>
        <div className='card-body'>
            <h2 className='text-3xl my-4 font-bold card-title'>
             Latest Repositories
            </h2>
             {repos.map((repo)=>(
                  <RepoItems  key={repo.id} repo={repo}></RepoItems>
             ))}
        </div>
    </div>
  )
}

export default RepoList