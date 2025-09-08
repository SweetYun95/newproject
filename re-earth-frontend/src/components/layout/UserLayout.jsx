import React from 'react'
import { Outlet } from 'react-router-dom'
import './UserLayout.scss'

const UserLayout = () => {
   return (
      <div className="user-layout">
         {/* Header */}
         <header className="user-header">{/* 헤더 내용 추가 예정 */}</header>

         {/* Main Content */}
         <main className="user-main">
            <Outlet />
         </main>

         {/* Footer */}
         <footer className="user-footer">{/* 푸터 내용 추가 예정 */}</footer>
      </div>
   )
}

export default UserLayout
