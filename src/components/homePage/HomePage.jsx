import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
const HomePage = () => {
  return (
    <div className='homepage' >
      <h1>STUDENTS GRADE APP</h1>
      <div className='buttons'>
      <div className='b1'><Link to="/studentlist">Students List</Link></div>
      
      <div className='badd'><Link to="/addstudent"> Add Student</Link></div>
      
      
      </div>
    </div>
  )
}

export default HomePage
