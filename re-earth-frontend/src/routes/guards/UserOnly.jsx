import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserOnly = () => {
   const { isAuthenticated, user } = useSelector((state) => state.auth)

   if (!isAuthenticated) {
      return <Navigate to="/login" replace />
   }

   if (user?.role === 'admin') {
      return <Navigate to="/admin/dashboard" replace />
   }

   return <Outlet />
}

export default UserOnly
