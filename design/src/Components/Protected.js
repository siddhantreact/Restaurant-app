import { Login } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { auth } from '../Firebase/Firebase'

function Protected() {

  const [user, setUser] = useState()

  useEffect(()=>{

     const user = auth.currentUser

     setUser(user)

  },[])



  return (
    <div>

      {(!user) ? <Login/>: <Outlet/>}


    </div>
  )
}

export default Protected
