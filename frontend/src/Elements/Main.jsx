import React from 'react'
import Navbar from './Navbar'
import UserNavbar from './UserNavbar'

const Main = (props) => {
  return (
    <div>
      <UserNavbar/>
      {props.child}
    </div>
  )
}

export default Main
