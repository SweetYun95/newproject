import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import DashboardWidget from '@/components/admin/DashboardWidget';
import './DashboardPage.css';

const DashboardPage = () => {
   return (
      <AdminLayout>
         <div className="dashboard-page">
            <div className="dashboard-grid">
               {/* 일간 포인트 적립량 */}
               <div className="grid-item wide">
                  <DashboardWidget title="일간 포인트 적립량">
                     <div className="chart-container">
                        {/* 차트 컴포넌트 추가 예정 */}
                        <div className="placeholder-chart">포인트 적립량 그래프</div>
                     </div>
                  </DashboardWidget>
               </div>

               {/* 실시간 접속자 수 */}
               <div className="grid-item">
                  <DashboardWidget title="실시간 접속자 수">
                     <div className="stat-container">
                        <div className="stat-number">2,458</div>
                        <div className="stat-label">현재 접속자</div>
                     </div>
                  </DashboardWidget>
               </div>

               {/* 유저별 기여도 분포 */}
               <div className="grid-item">
                  <DashboardWidget title="유저별 기여도 분포">
                     <div className="chart-container">
                        {/* 도넛 차트 추가 예정 */}
                        <div className="placeholder-chart">기여도 분포도</div>
                     </div>
                  </DashboardWidget>
               </div>

               {/* 기부 순위 */}
               <div className="grid-item">
                  <DashboardWidget title="기부 순위">
                     <div className="list-content">
                        <div className="list-item">
                           <div className="item-info">
                              <div className="item-title">김환경</div>
                              <div className="item-subtitle">누적 기부액</div>
                           </div>
                           <div className="item-value">50,000 P</div>
                        </div>
                        {/* 추가 리스트 아이템 */}
                     </div>
                  </DashboardWidget>
               </div>

               {/* 최근 게시물 */}
               <div className="grid-item">
                  <DashboardWidget title="최근 게시물">
                     <div className="list-content">
                        <div className="list-item">
                           <div className="item-info">
                              <div className="item-title">오늘 자전거 타고 출근했어요!</div>
                              <div className="item-subtitle">커뮤니티 게시판</div>
                           </div>
                        </div>
                        {/* 추가 리스트 아이템 */}
                     </div>
                  </DashboardWidget>
               </div>

               {/* 문의글 현황 */}
               <div className="grid-item">
                  <DashboardWidget title="문의글 현황">
                     <div className="progress-container">
                        <div className="progress-item">
                           <div className="progress-label">
                              <span>처리 대기</span>
                              <span>15</span>
                           </div>
                           <div className="progress-bar">
                              <div className="progress" style={{ width: '60%' }}></div>
                           </div>
                        </div>
                        <div className="progress-item">
                           <div className="progress-label">
                              <span>처리 완료</span>
                              <span>42</span>
                           </div>
                           <div className="progress-bar">
                              <div className="progress" style={{ width: '80%' }}></div>
                           </div>
                        </div>
                     </div>
                  </DashboardWidget>
               </div>
            </div>
         </div>
      </AdminLayout>
   )
}

export default DashboardPage
