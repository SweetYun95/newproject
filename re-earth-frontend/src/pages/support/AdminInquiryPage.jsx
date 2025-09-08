import React, { useState } from 'react'
import SupportLayout from '@/components/support/SupportLayout'
import DashboardWidget from '@/components/admin/DashboardWidget'
import './AdminInquiryPage.scss'

const AdminInquiryPage = () => {
   const [selectedInquiry, setSelectedInquiry] = useState(null)
   const [inquiries] = useState([
      {
         id: 1,
         title: '포인트 적립이 안되는 것 같아요',
         category: '포인트/적립',
         status: 'pending',
         username: '김환경',
         createdAt: '2025-09-04',
         priority: 'high',
         content: '어제 친환경 제품을 구매했는데 포인트가 적립되지 않았습니다...',
         attachments: ['receipt.jpg'],
      },
      // 더미 데이터...
   ])

   const [inquiryStats] = useState({
      total: 150,
      pending: 45,
      inProgress: 25,
      completed: 80,
      urgent: 12,
   })

   const getStatusClass = (status) => {
      const statusMap = {
         pending: 'status-pending',
         inProgress: 'status-progress',
         completed: 'status-completed',
      }
      return statusMap[status] || ''
   }

   const handleReply = (inquiry) => {
      setSelectedInquiry(inquiry)
   }

   return (
      <SupportLayout isAdmin>
         <div className="admin-inquiry-page">
            <div className="page-header">
               <h1>1:1 문의 관리</h1>
               <div className="header-stats">
                  <span className="stat urgent">긴급 문의 {inquiryStats.urgent}건</span>
                  <span className="stat pending">대기중 {inquiryStats.pending}건</span>
               </div>
            </div>

            <div className="dashboard-grid">
               {/* 문의 현황 통계 */}
               <div className="grid-item">
                  <DashboardWidget title="문의 처리 현황">
                     <div className="inquiry-stats">
                        <div className="stat-item">
                           <span className="label">전체</span>
                           <span className="value">{inquiryStats.total}</span>
                        </div>
                        <div className="stat-item pending">
                           <span className="label">대기중</span>
                           <span className="value">{inquiryStats.pending}</span>
                        </div>
                        <div className="stat-item progress">
                           <span className="label">처리중</span>
                           <span className="value">{inquiryStats.inProgress}</span>
                        </div>
                        <div className="stat-item completed">
                           <span className="label">완료</span>
                           <span className="value">{inquiryStats.completed}</span>
                        </div>
                     </div>
                  </DashboardWidget>
               </div>

               {/* 카테고리별 통계 */}
               <div className="grid-item">
                  <DashboardWidget title="카테고리별 문의">
                     <div className="chart-container">
                        {/* TODO: 차트 컴포넌트 추가 */}
                        <div className="placeholder-chart">카테고리별 문의 분포도</div>
                     </div>
                  </DashboardWidget>
               </div>
            </div>

            {/* 문의 관리 테이블 */}
            <div className="inquiry-management card">
               <div className="table-header">
                  <div className="filters">
                     <select defaultValue="all">
                        <option value="all">전체 문의</option>
                        <option value="pending">대기중</option>
                        <option value="inProgress">처리중</option>
                        <option value="completed">완료</option>
                     </select>
                     <select defaultValue="all">
                        <option value="all">전체 카테고리</option>
                        <option value="point">포인트/적립</option>
                        <option value="donation">기부</option>
                        <option value="account">계정</option>
                     </select>
                  </div>
                  <div className="search">
                     <input type="text" placeholder="문의 검색..." />
                     <button className="btn-search">검색</button>
                  </div>
               </div>

               <table>
                  <thead>
                     <tr>
                        <th>우선순위</th>
                        <th>제목</th>
                        <th>카테고리</th>
                        <th>상태</th>
                        <th>문의자</th>
                        <th>등록일</th>
                        <th>관리</th>
                     </tr>
                  </thead>
                  <tbody>
                     {inquiries.map((inquiry) => (
                        <tr key={inquiry.id}>
                           <td>
                              <span className={`priority ${inquiry.priority}`}>{inquiry.priority === 'high' ? '긴급' : '일반'}</span>
                           </td>
                           <td>{inquiry.title}</td>
                           <td>{inquiry.category}</td>
                           <td>
                              <span className={`status ${getStatusClass(inquiry.status)}`}>{inquiry.status === 'pending' ? '대기중' : inquiry.status === 'inProgress' ? '처리중' : '완료'}</span>
                           </td>
                           <td>{inquiry.username}</td>
                           <td>{inquiry.createdAt}</td>
                           <td className="actions">
                              <button className="btn-reply" onClick={() => handleReply(inquiry)}>
                                 답변하기
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>

            {/* 자동 응답 추천 */}
            <div className="auto-response card">
               <h2>AI 답변 추천</h2>
               <div className="response-suggestions">
                  <div className="suggestion-item">
                     <div className="suggestion-content">
                        <h3>추천 답변 템플릿</h3>
                        <p className="template">안녕하세요, {selectedInquiry?.username}님. 포인트 적립과 관련하여 불편을 드려 죄송합니다. 구매하신 상품의 포인트는 결제 완료 후 24시간 이내에 자동으로 적립됩니다...</p>
                     </div>
                     <button className="btn-use-template">템플릿 사용</button>
                  </div>
               </div>
            </div>
         </div>
      </SupportLayout>
   )
}

export default AdminInquiryPage
