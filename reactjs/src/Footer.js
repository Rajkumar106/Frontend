import React from 'react'

const Footer = () => {

    const d=new Date()
  return (
    <div>
       <p>&copy; All Copyrights reserved {d.getFullYear()}</p> 
    </div>
  )
}

export default Footer