import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import Unauthorized from './Unauthorized'

const ProtectedRoute = ({role}) => {
    const user = {
      "firstName":"user1",
      "lastName":"user1",
      "username":"user1",
      "email":"user1@email.com",
      "role":"admin",
    }
    if(!user) {
        return <Navigate to="login/" />
    }
  return user.role === role || user.role === "admin" ? <Outlet/> : <Unauthorized role={role}/>  
}

export default ProtectedRoute