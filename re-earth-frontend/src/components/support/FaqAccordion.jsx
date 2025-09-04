import React, { useState } from 'react'
import './FaqAccordion.scss'

const FaqAccordion = ({ faq }) => {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div className={`faq-accordion ${isOpen ? 'active' : ''}`}>
         <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
            <div className="question">
               <span className="q-mark">Q</span>
               <span>{faq.question}</span>
            </div>
            <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
         </button>
         <div className="accordion-content">
            <div className="answer">
               <span className="a-mark">A</span>
               <p>{faq.answer}</p>
            </div>
         </div>
      </div>
   )
}

export default FaqAccordion
