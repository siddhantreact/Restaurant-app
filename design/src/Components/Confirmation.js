import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Firebase/Firebase'
import "../Styles/Confirmation.css"


function Confirmation() {

  const navigate = useNavigate()


  function logout() {

    auth.signOut().then((response) => {

     

      console.log("from logout")
      navigate("/")
 
    }).catch((err) => {
      console.log(err)
    })

  }



  return (
    <div className='confirmation_container'>

      <h4>order placed please wait .... </h4>

      <div className='btn' onClick={logout}>
        logout
      </div>

    </div>
  )
}

export default Confirmation
