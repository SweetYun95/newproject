import React, { useState } from 'react'
import SupportLayout from '@/components/support/SupportLayout'
import DashboardWidget from '@/components/admin/DashboardWidget'
import './AdminFaqPage.scss'

const AdminFaqPage = () => {
   const [editingFaq, setEditingFaq] = useState(null)
   const [faqs] = useState([
      {
         id: 1,
         question: '현금 기부는 어떻게 진행되나요?',
         answer: '현금 기부는 적립된 포인트를 통해서만 가능합니다...',
         category: 'donation',
         views: 1250,
      },
      // 더미 데이터...
   ])

   const [topFaqs] = useState([
      { id: 1, question: '기부 영수증 발급 방법', views: 2500 },
      { id: 2, question: '포인트 적립 안내', views: 2100 },
      { id: 3, question: '기부금 사용 내역 확인', views: 1800 },
      { id: 4, question: '회원 등급 혜택', views: 1500 },
      { id: 5, question: '포인트 환급 정책', views: 1200 },
   ])

   const handleEdit = (faq) => {
      setEditingFaq(faq)
   }

   const handleDelete = (id) => {
      // TODO: Implement delete
      console.log('Delete FAQ:', id)
   }

   return (
      <SupportLayout isAdmin>
         <div className="admin-faq-page">
            <div className="page-header">
               <h1>FAQ 관리</h1>
            </div>

            <div className="dashboard-grid">
               {/* Top5 인기 질문 */}
               <div className="grid-item">
                  <DashboardWidget title="Top 5 인기 질문">
                     <div className="top-faqs">
                        {topFaqs.map((faq, index) => (
                           <div key={faq.id} className="top-faq-item">
                              <span className="rank">{index + 1}</span>
                              <span className="question">{faq.question}</span>
                              <span className="views">{faq.views.toLocaleString()}회</span>
                           </div>
                        ))}
                     </div>
                  </DashboardWidget>
               </div>

               {/* FAQ 조회수 그래프 */}
               <div className="grid-item">
                  <DashboardWidget title="FAQ 조회수 통계">
                     <div className="chart-container">
                        {/* TODO: 차트 컴포넌트 추가 */}
                        <div className="placeholder-chart">FAQ 조회수 그래프</div>
                     </div>
                  </DashboardWidget>
               </div>
            </div>

            {/* FAQ 관리 테이블 */}
            <div className="faq-management card">
               <div className="table-header">
                  <h2>FAQ 목록</h2>
                  <button className="btn-add">FAQ 추가하기</button>
               </div>

               <table>
                  <thead>
                     <tr>
                        <th>질문</th>
                        <th>카테고리</th>
                        <th>조회수</th>
                        <th>작성일</th>
                        <th>관리</th>
                     </tr>
                  </thead>
                  <tbody>
                     {faqs.map((faq) => (
                        <tr key={faq.id}>
                           <td>{faq.question}</td>
                           <td>{faq.category}</td>
                           <td>{faq.views.toLocaleString()}</td>
                           <td>2025-09-04</td>
                           <td className="actions">
                              <button className="btn-edit" onClick={() => handleEdit(faq)}>
                                 수정
                              </button>
                              <button className="btn-delete" onClick={() => handleDelete(faq.id)}>
                                 삭제
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>

            {/* AI 추천 FAQ */}
            <div className="ai-suggestions card">
               <h2>AI 추천 FAQ</h2>
               <div className="suggestions-list">
                  <div className="suggestion-item">
                     <div className="suggestion-content">
                        <h3>추천 질문: "환경 포인트는 어떻게 적립되나요?"</h3>
                        <p>최근 검색어 분석 결과 다수의 사용자가 검색한 키워드입니다.</p>
                     </div>
                     <button className="btn-add-suggestion">FAQ 등록</button>
                  </div>
                  {/* 추가 추천 항목... */}
               </div>
            </div>
         </div>
      </SupportLayout>
   )
}

export default AdminFaqPage
