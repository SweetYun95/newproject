import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import EarthCarousel from '../components/EarthCarousel'
import ActionCard from '../components/ActionCard'

import './LandingPage.scss'

// 컬러 상수
const COLORS = {
   main1: 'rgb(146,195,164)',
   main2: 'rgb(242,246,235)',
   sub1: 'rgb(86,130,101)',
   sub2: 'rgb(219,245,142)',
   point1: 'rgb(255,206,85)',
   point2: 'rgb(251,110,82)',
   text1: 'rgb(51,51,51)',
   text2: 'rgb(158,158,158)',
   text3: 'rgb(245,245,245)',
   text4: 'rgb(255,255,255)',
}

// 회전 애니메이션
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

// 스타일 컴포넌트
const MainContainer = styled.div`
   width: 100%;
   overflow-x: hidden;
`

const Section = styled.section`
   width: 100%;
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 2rem;
`

const FirstSection = styled(Section)`
   flex-direction: column;
   text-align: center;
   background-color: ${COLORS.main2};

   img {
      width: 80%;
      max-width: 1200px;
      margin-top: 2rem;
   }
`

const SecondSection = styled(Section)`
   position: relative;
   background-color: ${COLORS.main1};

   .rotating-text {
      animation: ${rotate} 20s linear infinite;
   }
`

const ThirdSection = styled(Section)`
   .content {
      display: grid;
      grid-template-columns: 4fr 8fr;
      gap: 2rem;
   }

   .carousel-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
   }
`

const SixthSection = styled(Section)`
   .cards-container {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
   }

   .card {
      flex: 0 0 calc(33.333% - 2rem);
      text-align: center;
   }
`

const SeventhSection = styled(Section)`
   text-align: center;
   background-color: ${COLORS.main2};

   .stats {
      margin: 4rem 0;
   }

   .auth-buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
   }
`

const EighthSection = styled(Section)`
   flex-direction: column;

   .carousel {
      width: 100%;
      max-width: 1200px;
      overflow: hidden;
   }
`

const LandingPage = () => {
   const navigate = useNavigate()
   const { scrollYProgress } = useScroll()
   const [currentTab, setCurrentTab] = useState(0)

   // 이미지 트랜스폼 효과
   const firstSectionImageY = useTransform(scrollYProgress, [0, 0.1], ['50%', '0%'])

   return (
      <MainContainer>
         {/* 첫 번째 섹션: 메인 슬로건 */}
         <FirstSection>
            <motion.h1>
               우리의 작은 실천이
               <br />
               지구를 살립니다
            </motion.h1>
            <motion.img src="/assets/earth-image.png" style={{ y: firstSectionImageY }} />
         </FirstSection>

         {/* 두 번째 섹션: 순환 문구 */}
         <SecondSection>
            <h2>함께 만드는 지속 가능한 미래</h2>
            <div className="rotating-text">
               <span>탄소절감</span>
               <span>포인트적립</span>
               <span>아이템구매</span>
               <span>환경기부</span>
            </div>
         </SecondSection>

         {/* 세 번째 섹션: 탭 캐러셀 */}
         <ThirdSection>
            <div className="content">
               <div>
                  <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                     지구의 아픔을 들여다보아요
                  </motion.h2>
               </div>
               <div className="carousel-container">
                  <EarthCarousel />
               </div>
            </div>
         </ThirdSection>

         {/* 네 번째 섹션: 물음 문구 */}
         <Section>
            <h2>지금까지의 방식은 너무 복잡하죠?</h2>
         </Section>

         {/* 다섯 번째 섹션: 앱 소개 */}
         <Section>
            <h2>이제 이 앱 하나면 끝</h2>
         </Section>

         {/* 여섯 번째 섹션: 실천 방법 카드 */}
         <SixthSection>
            <motion.h2 style={{ alignSelf: 'flex-start' }} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
               이렇게 실천할 수 있어요
            </motion.h2>
            <div className="cards-container">
               <ActionCard index={0} image="/assets/images/landing/eco-transport.jpg" title="친환경 이동수단 이용하기" description="자전거, 대중교통 이용으로 탄소발자국 줄이기" />
               <ActionCard index={1} image="/assets/images/landing/recycling.jpg" title="올바른 분리수거" description="재활용을 통한 자원 순환 실천하기" />
               <ActionCard index={2} image="/assets/images/landing/eco-products.jpg" title="친환경 제품 사용" description="일회용품 줄이고 친환경 제품 선택하기" />
            </div>
         </SixthSection>

         {/* 일곱 번째 섹션: 통계 및 인증 */}
         <SeventhSection>
            <div className="stats">
               <h2>지금까지 절감한 탄소배출량 1,234kg</h2>
               <p>나무 567그루 심은것과 동일한 효과</p>
               <h3>누적된 포인트 89,012P</h3>
            </div>
            <div className="auth-buttons">
               <p>저희와 함께하시겠어요?</p>
               <button onClick={() => navigate('/signup')}>Re:earth 프로젝트 참여하기</button>
               <button onClick={() => navigate('/login')}>회원이신가요? 로그인하러가기</button>
            </div>
         </SeventhSection>

         {/* 여덟 번째 섹션: 파트너사 */}
         <EighthSection>
            <h2>함께하는 기업들</h2>
            <div className="carousel">{/* 파트너사 로고 캐러셀 */}</div>
         </EighthSection>
      </MainContainer>
   )
}

export default LandingPage
