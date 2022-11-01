import React from 'react'
import './About.css'

function About() {
  return (
    <>
    <div className='head-text'>
        <h1>End-to-End Library Management Solution</h1>
    </div>
    <div className='head-text-1'>
    <h6>Organise, digitise and manage library more efficiently with EduSys’s End-to-End Library Management Solution. The software simplifies the tasks of librarians and administrator by providing automation and robust platform to issue books, track the status of the items, impose and collect fines from defaulters, etc. Additionally, the system empowers the users with the digital capability to check the status of the books/ items and request extensions while borrowing.</h6>
    </div>
          <div className='lib-img'>
          <img className="image" src="/images/library.png"/>
          </div>
          </>
  )
}

export default About