import React from 'react'
import { Outlet } from 'react-router-dom'
import './GuestLayout.scss'

const GuestLayout = () => {
   return (
      <div className="guest-layout">
         <Outlet />
      </div>
   )
}

export default GuestLayout
