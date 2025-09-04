import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const GuestOnly = () => {
   const { isAuthenticated, user } = useSelector((state) => state.auth)

   if (isAuthenticated) {
      if (user?.role === 'admin') {
         return <Navigate to="/admin/dashboard" replace />
      }
      return <Navigate to="/main" replace />
   }

   return <Outlet />
}

export default GuestOnly
