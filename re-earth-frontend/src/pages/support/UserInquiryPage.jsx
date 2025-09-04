import React, { useState } from 'react'
import SupportLayout from '@/components/support/SupportLayout'
import './UserInquiryPage.scss'

const UserInquiryPage = () => {
   const [inquiryForm, setInquiryForm] = useState({
      type: '',
      title: '',
      content: '',
      file: null,
   })

   const [inquiries] = useState([
      {
         id: 1,
         type: '기부',
         title: '기부금 영수증 발급 문의',
         createdAt: '2025-09-04',
         status: 'pending',
      },
      {
         id: 2,
         type: '포인트',
         title: '포인트 적립이 안되는 것 같아요',
         createdAt: '2025-09-03',
         status: 'completed',
      },
   ])

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setInquiryForm((prev) => ({
         ...prev,
         [name]: value,
      }))
   }

   const handleFileChange = (e) => {
      setInquiryForm((prev) => ({
         ...prev,
         file: e.target.files[0],
      }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      // TODO: Submit inquiry
      console.log(inquiryForm)
   }

   const getStatusColor = (status) => {
      switch (status) {
         case 'pending':
            return 'status-pending'
         case 'completed':
            return 'status-completed'
         default:
            return ''
      }
   }

   const getStatusText = (status) => {
      switch (status) {
         case 'pending':
            return '대기'
         case 'completed':
            return '완료'
         default:
            return status
      }
   }

   return (
      <SupportLayout>
         <div className="user-inquiry-page">
            <div className="page-header">
               <h1>1:1 문의하기</h1>
            </div>

            {/* 문의 작성 폼 */}
            <div className="inquiry-form card">
               <form onSubmit={handleSubmit}>
                  <div className="form-group">
                     <label>문의 유형</label>
                     <select name="type" value={inquiryForm.type} onChange={handleInputChange} required>
                        <option value="">선택해주세요</option>
                        <option value="donation">기부</option>
                        <option value="point">포인트</option>
                        <option value="service">서비스 이용</option>
                        <option value="other">기타</option>
                     </select>
                  </div>

                  <div className="form-group">
                     <label>제목</label>
                     <input type="text" name="title" value={inquiryForm.title} onChange={handleInputChange} placeholder="문의 제목을 입력해주세요" required />
                  </div>

                  <div className="form-group">
                     <label>내용</label>
                     <textarea name="content" value={inquiryForm.content} onChange={handleInputChange} placeholder="문의하실 내용을 자세히 적어주세요" rows="6" required />
                  </div>

                  <div className="form-group">
                     <label>파일 첨부</label>
                     <div className="file-input">
                        <input type="file" onChange={handleFileChange} accept="image/*,.pdf" />
                        <small>이미지 파일 또는 PDF 파일만 첨부 가능합니다.</small>
                     </div>
                  </div>

                  <button type="submit" className="btn-submit">
                     문의하기
                  </button>
               </form>
            </div>

            {/* 문의 내역 리스트 */}
            <div className="inquiry-list card">
               <h2>나의 문의 내역</h2>
               <table>
                  <thead>
                     <tr>
                        <th>유형</th>
                        <th>제목</th>
                        <th>작성일</th>
                        <th>상태</th>
                     </tr>
                  </thead>
                  <tbody>
                     {inquiries.map((inquiry) => (
                        <tr key={inquiry.id}>
                           <td>{inquiry.type}</td>
                           <td className="title">{inquiry.title}</td>
                           <td>{inquiry.createdAt}</td>
                           <td>
                              <span className={`status ${getStatusColor(inquiry.status)}`}>{getStatusText(inquiry.status)}</span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </SupportLayout>
   )
}

export default UserInquiryPage
