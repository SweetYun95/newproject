import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import './ProfileLayout.css'

const ProfileLayout = ({ children }) => {
   const location = useLocation()
   const user = useSelector((state) => state.auth.user)

   const menuItems = [
      { path: '/profile/transport', label: 'Public Transport', icon: 'bus' },
      { path: '/profile/donation', label: 'Old Clothes Donation', icon: 'tshirt' },
      { path: '/profile/shop', label: 'Point Shop', icon: 'shopping-cart' },
      { path: '/profile/edit', label: 'Edit Profile', icon: 'user-edit' },
   ]

   return (
      <div className="profile-layout">
         {/* 좌측 사이드바 */}
         <div className="sidebar">
            <div className="user-profile">
               <div className="profile-image">
                  <img src={user?.profileImage || '/default-avatar.png'} alt="Profile" />
               </div>
               <h3 className="nickname">{user?.nickname}</h3>
               <span className="rank">{user?.rank || 'New Member'}</span>
            </div>

            <nav className="menu">
               {menuItems.map((item) => (
                  <Link key={item.path} to={item.path} className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}>
                     <i className={`fas fa-${item.icon}`}></i>
                     <span>{item.label}</span>
                  </Link>
               ))}
            </nav>
         </div>

         {/* 메인 컨텐츠 영역 */}
         <div className="main-content">{children}</div>
      </div>
   )
}

export default ProfileLayout
