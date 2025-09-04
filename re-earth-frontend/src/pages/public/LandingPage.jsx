import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.scss'

const LandingPage = () => {
   const [activeTab, setActiveTab] = useState(0)
   const [visibleCards, setVisibleCards] = useState([])
   const section6Ref = useRef(null)

   const rotatingTexts = ['탄소 배출 절감', '친환경 실천', '포인트 적립', '환경 보호']

   const tabContents = [
      {
         title: '탄소 배출량 증가',
         description: '매년 증가하는 탄소 배출량으로 인해 지구의 온도는 계속해서 상승하고 있습니다.',
         image: '/images/landing/carbon-emission.jpg',
      },
      {
         title: '해수면 상승',
         description: '빙하가 녹으면서 해수면이 상승하고, 이로 인해 연안 지역이 침수될 위험이 커지고 있습니다.',
         image: '/images/landing/sea-level.jpg',
      },
      {
         title: '생태계 파괴',
         description: '기후 변화로 인해 많은 생물들이 서식지를 잃고 멸종 위기에 처해있습니다.',
         image: '/images/landing/ecosystem.jpg',
      },
   ]

   const practiceCards = [
      {
         title: '대중교통 이용하기',
         description: '자가용 대신 대중교통을 이용하면 탄소 배출량을 크게 줄일 수 있어요',
         image: '/images/landing/public-transport.jpg',
      },
      {
         title: '일회용품 줄이기',
         description: '텀블러와 장바구니를 사용하면 플라스틱 사용을 줄일 수 있어요',
         image: '/images/landing/reusable.jpg',
      },
      {
         title: '에너지 절약하기',
         description: '사용하지 않는 전자기기의 플러그를 뽑으면 에너지를 절약할 수 있어요',
         image: '/images/landing/energy-save.jpg',
      },
      {
         title: '분리수거 실천하기',
         description: '올바른 분리수거로 재활용률을 높이고 환경을 보호해요',
         image: '/images/landing/recycling.jpg',
      },
   ]

   const partnerLogos = ['/images/partners/logo1.png', '/images/partners/logo2.png', '/images/partners/logo3.png', '/images/partners/logo4.png']

   useEffect(() => {
      const handleScroll = () => {
         if (section6Ref.current) {
            const cards = section6Ref.current.querySelectorAll('.practice-card')
            cards.forEach((card, index) => {
               const rect = card.getBoundingClientRect()
               if (rect.top < window.innerHeight * 0.8) {
                  setVisibleCards((prev) => [...new Set([...prev, index])])
               }
            })
         }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   useEffect(() => {
      const interval = setInterval(() => {
         setActiveTab((prev) => (prev + 1) % tabContents.length)
      }, 5000)
      return () => clearInterval(interval)
   }, [])

   return (
      <div className="landing-page">
         {/* Section 1: Hero */}
         <section className="hero-section">
            <div className="container">
               <h1 className="main-slogan">
                  당신의 작은 실천이
                  <br />
                  지구를 지키는 힘이 됩니다
               </h1>
               <div className="hero-image">
                  <img src="/images/landing/hero.png" alt="Re:earth Hero" />
               </div>
            </div>
         </section>

         {/* Section 2: Rotating Text */}
         <section className="rotating-section">
            <div className="container">
               <div className="rotating-content">
                  <h2 className="sub-slogan">함께라면 변화를 만들 수 있습니다</h2>
                  <div className="rotating-words">
                     {rotatingTexts.map((text, index) => (
                        <span
                           key={index}
                           style={{
                              transform: `rotate(${index * 90}deg) translateY(-150%)`,
                              opacity: index === activeTab ? 1 : 0.3,
                           }}
                        >
                           {text}
                        </span>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Section 3: Earth Problems */}
         <section className="problems-section">
            <div className="container">
               <div className="row">
                  <div className="col-md-4">
                     <h2 className="section-title">지구의 아픔을 들여다보아요</h2>
                  </div>
                  <div className="col-md-8">
                     <div className="tab-content">
                        {tabContents.map((content, index) => (
                           <div key={index} className={`tab-pane ${activeTab === index ? 'active' : ''}`}>
                              <div className="row">
                                 <div className="col-md-6">
                                    <div className="tab-image">
                                       <img src={content.image} alt={content.title} />
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="tab-text">
                                       <h3>{content.title}</h3>
                                       <p>{content.description}</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Section 4: Question */}
         <section className="question-section">
            <div className="container">
               <h2 className="text-center">지금까지의 방식은 너무 복잡하지 않나요?</h2>
            </div>
         </section>

         {/* Section 5: Solution */}
         <section className="solution-section">
            <div className="container">
               <h2 className="text-center">이제 이 앱 하나면 끝!</h2>
            </div>
         </section>

         {/* Section 6: Practice Cards */}
         <section className="practice-section" ref={section6Ref}>
            <div className="container">
               <h2 className="text-left">이렇게 실천할 수 있어요</h2>
               <div className="practice-cards">
                  {practiceCards.map((card, index) => (
                     <div key={index} className={`practice-card ${visibleCards.includes(index) ? 'visible' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="card-image">
                           <img src={card.image} alt={card.title} />
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Section 7: Stats & CTA */}
         <section className="stats-section">
            <div className="container">
               <div className="stats-content">
                  <div className="stats-item">
                     <h2>지금까지 절감한 탄소배출량</h2>
                     <div className="number">1,234,567kg</div>
                     <p>나무 12,345그루 심은것과 동일한 효과</p>
                  </div>

                  <div className="stats-item">
                     <h2>누적된 포인트</h2>
                     <div className="number">9,876,543P</div>
                  </div>

                  <div className="cta-buttons">
                     <p>저희와 함께하시겠어요?</p>
                     <Link to="/register" className="btn btn-primary">
                        Re:earth 프로젝트 참여하기
                     </Link>
                     <p className="login-text">
                        회원이신가요?{' '}
                        <Link to="/login" className="btn btn-outline">
                           로그인하러가기
                        </Link>
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Section 8: Partners */}
         <section className="partners-section">
            <div className="container">
               <h2>함께하는 파트너사</h2>
               <div className="partner-logos">
                  {partnerLogos.map((logo, index) => (
                     <div key={index} className="logo-item">
                        <img src={logo} alt={`Partner ${index + 1}`} />
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   )
}

export default LandingPage
