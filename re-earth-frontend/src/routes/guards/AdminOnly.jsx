import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminOnly = () => {
   const { isAuthenticated, user } = useSelector((state) => state.auth)

   if (!isAuthenticated) {
      return <Navigate to="/admin/login" replace />
   }

   if (user?.role !== 'admin') {
      return <Navigate to="/login" replace />
   }

   return <Outlet />
}

export default AdminOnly
