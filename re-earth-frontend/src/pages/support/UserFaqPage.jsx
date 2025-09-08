import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SupportLayout from '@/components/support/SupportLayout'
import FaqAccordion from '@/components/support/FaqAccordion'
import './UserFaqPage.scss'

const UserFaqPage = () => {
   const navigate = useNavigate()
   const [searchTerm, setSearchTerm] = useState('')
   const [selectedCategory, setSelectedCategory] = useState('all')

   // 임시 데이터
   const categories = [
      { value: 'all', label: '전체' },
      { value: 'donation', label: '기부' },
      { value: 'point', label: '포인트' },
      { value: 'service', label: '서비스 이용' },
   ]

   const faqs = [
      {
         id: 1,
         category: 'donation',
         question: '현금 기부는 어떻게 진행되나요?',
         answer: '현금 기부는 적립된 포인트를 통해서만 가능합니다. 포인트를 기부하시면 저희가 해당 금액만큼 기부단체에 전달해 드립니다.',
      },
      {
         id: 2,
         category: 'donation',
         question: '기부 영수증은 어떻게 발급받나요?',
         answer: '기부 완료 후 마이페이지에서 기부 영수증을 바로 출력하실 수 있습니다. 연말정산용 영수증은 매년 1월에 일괄 발급됩니다.',
      },
      // 추가 FAQ 항목들...
   ]

   const filteredFaqs = faqs.filter((faq) => (selectedCategory === 'all' || faq.category === selectedCategory) && (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase())))

   return (
      <SupportLayout>
         <div className="user-faq-page">
            <div className="page-header">
               <h1>자주 묻는 질문 (FAQ)</h1>
               <div className="search-bar">
                  <select className="category-filter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                     {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                           {category.label}
                        </option>
                     ))}
                  </select>
                  <input type="text" className="search-input" placeholder="검색어를 입력하세요" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
               </div>
               <button className="btn-primary" onClick={() => navigate('/support/inquiry/new')}>
                  1:1 문의 등록하기
               </button>
            </div>

            <div className="faq-list">
               {filteredFaqs.map((faq) => (
                  <FaqAccordion key={faq.id} faq={faq} />
               ))}
            </div>
         </div>
      </SupportLayout>
   )
}

export default UserFaqPage
