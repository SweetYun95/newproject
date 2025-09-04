import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SupportLayout.scss'

const SupportLayout = ({ children, isAdmin = false }) => {
   const location = useLocation()

   const userMenuItems = [
      { path: '/support/faq', label: 'FAQ', icon: 'question-circle' },
      { path: '/support/inquiry', label: '1:1 문의', icon: 'envelope' },
      { path: '/support/notice', label: '공지사항', icon: 'bullhorn' },
   ]

   const adminMenuItems = [
      { path: '/admin/support/faq', label: 'FAQ 관리', icon: 'cog' },
      { path: '/admin/support/inquiry', label: '1:1 문의 관리', icon: 'comments' },
   ]

   const menuItems = isAdmin ? adminMenuItems : userMenuItems

   return (
      <div className="support-layout">
         <aside className="sidebar">
            <div className="menu-header">
               <h2>{isAdmin ? '고객센터 관리' : '고객센터'}</h2>
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

export default SupportLayout
