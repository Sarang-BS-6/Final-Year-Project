import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <h1>Water Body Extraction Application</h1>
        <div className="submit-container">
            <div className="submit-log">New User</div>
            <div className="submit-reg">Already a User</div>
        </div>
    </div>
  )
}

export default Home