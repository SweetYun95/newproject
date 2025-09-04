import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import './AdminLayout.scss'

const AdminLayout = ({ children }) => {
   const location = useLocation()
   const admin = useSelector((state) => state.auth.user)

   const menuItems = [
      { path: '/admin/dashboard', label: '대시보드 메인', icon: 'chart-line' },
      { path: '/admin/dashboard/settings', label: '대시보드 설정', icon: 'cog' },
      { path: '/admin/users', label: '유저 관리', icon: 'users' },
      { path: '/admin/transport', label: '대중교통 연동 관리', icon: 'bus' },
      { path: '/admin/community', label: '커뮤니티 관리', icon: 'comments' },
      { path: '/admin/statistics', label: '통계', icon: 'chart-bar' },
      { path: '/admin/donations', label: '기부 관리', icon: 'hand-holding-heart' },
      { path: '/admin/shop', label: '포인트샵 관리', icon: 'store' },
      { path: '/admin/partners', label: '제휴사 관리', icon: 'handshake' },
      { path: '/admin/settings', label: '설정', icon: 'cogs' },
   ]

   return (
      <div className="admin-layout">
         <aside className="sidebar">
            <div className="admin-profile">
               <div className="profile-image">
                  <img src={admin?.profileImage || '/default-admin-avatar.png'} alt="Admin" />
               </div>
               <div className="admin-info">
                  <h3>{admin?.name || 'Administrator'}</h3>
                  <span className="role">System Admin</span>
               </div>
            </div>

            <nav className="menu">
               {menuItems.map((item) => (
                  <Link key={item.path} to={item.path} className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}>
                     <i className={`fas fa-${item.icon}`}></i>
                     <span>{item.label}</span>
                  </Link>
               ))}
            </nav>
         </aside>

         <main className="main-content">{children}</main>
      </div>
   )
}

export default AdminLayout
