import spinner from "./assets/spinner.gif"

import React from 'react'

function Spinner() {

  return (
    <div className="w-100 mt-18">
        <img src={spinner} className="text-center mx-auto" width={180} alt="Loading..." />
    </div>
  )
}

export default Spinner