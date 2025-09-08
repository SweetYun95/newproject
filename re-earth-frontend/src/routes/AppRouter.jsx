import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import GuestOnly from './guards/GuestOnly'
import UserOnly from './guards/UserOnly'
import AdminOnly from './guards/AdminOnly'

// Layouts
import GuestLayout from '../components/layout/GuestLayout'
import UserLayout from '../components/layout/UserLayout'
import AdminLayout from '../components/layout/AdminLayout'

// Public pages
import LandingPage from '../pages/public/LandingPage'
// import LoginPage from '../pages/public/LoginPage'
// import SignupPage from '../pages/public/SignupPage'

// User pages
// import MainPage from '../pages/user/MainPage'
// import PointEarnPage from '../pages/user/PointEarnPage'
// import ShopListPage from '../pages/user/ShopListPage'
// import ShopDetailPage from '../pages/user/ShopDetailPage'
// import OrderListPage from '../pages/user/OrderListPage'
// import ProfilePage from '../pages/user/ProfilePage'
// import QnaCreatePage from '../pages/user/QnaCreatePage'
// import DonatePage from '../pages/user/DonatePage'
// import MapBinsPage from '../pages/user/MapBinsPage'

// Market pages
// import MarketListPage from '../pages/market/MarketListPage'
// import MarketDetailPage from '../pages/market/MarketDetailPage'
// import MarketFormPage from '../pages/market/MarketFormPage'
// import ExchangeInboxPage from '../pages/market/ExchangeInboxPage'

// Chat pages
// import ChatRoomPage from '../pages/chat/ChatRoomPage'

// Admin pages
// import AdminLoginPage from '../pages/admin/AdminLoginPage'
// import DashboardPage from '../pages/admin/DashboardPage'
// import MemberPage from '../pages/admin/MemberPage'
// import PostPage from '../pages/admin/PostPage'
// import ProductPage from '../pages/admin/ProductPage'
// import OrderAdminPage from '../pages/admin/OrderAdminPage'
// import QnaAdminPage from '../pages/admin/QnaAdminPage'

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            {/* Public Routes */}
            <Route element={<GuestOnly />}>
               <Route element={<GuestLayout />}>
                  <Route path="/" element={<LandingPage />} />
               </Route>
            </Route>

            {/* 나머지 라우트는 필요할 때 주석 해제 */}
            {/* User Routes */}
            {/* <Route element={<UserOnly />}>
               <Route element={<UserLayout />}>
                  <Route path="/main" element={<MainPage />} />
               </Route>
            </Route> */}

            {/* Admin Routes */}
            {/* <Route element={<AdminOnly />}>
               <Route element={<AdminLayout />}>
                  <Route path="/admin/dashboard" element={<DashboardPage />} />
               </Route>
            </Route> */}

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/" replace />} />
         </Routes>
      </BrowserRouter>
   )
}

export default AppRouter
