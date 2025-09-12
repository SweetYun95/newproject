import { useRef } from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const StyledCard = styled(Card)`
   margin: 1rem;
   height: 400px;
   display: flex;
   flex-direction: row;
   background-color: ${({ theme }) => theme.palette.background.paper};
`

const ContentSection = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 2rem;
`

const carouselData = [
   {
      id: 1,
      title: '기후변화의 위기',
      description: '지구 온난화로 인한 해수면 상승과 생태계 파괴',
      image: 'src/assets/images/landing/climate-change.jpg',
   },
   {
      id: 2,
      title: '플라스틱의 위협',
      description: '해양 생태계를 위협하는 플라스틱 쓰레기',
      image: 'src/assets/images/landing/plastic-waste.jpg',
   },
   {
      id: 3,
      title: '산업화의 그늘',
      description: '대기오염과 온실가스 배출로 인한 환경 파괴',
      image: 'src/assets/images/landing/industrial-pollution.jpg',
   },
]

const EarthCarousel = () => {
   const swiperRef = useRef(null)

   return (
      <Swiper ref={swiperRef} modules={[Pagination, Navigation, Autoplay]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} navigation autoplay={{ delay: 5000 }}>
         {carouselData.map((slide) => (
            <SwiperSlide key={slide.id}>
               <StyledCard>
                  <CardMedia component="img" sx={{ width: '50%' }} image={slide.image} alt={slide.title} />
                  <ContentSection>
                     <CardContent>
                        <Typography variant="h4" component="h3" gutterBottom>
                           {slide.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                           {slide.description}
                        </Typography>
                     </CardContent>
                  </ContentSection>
               </StyledCard>
            </SwiperSlide>
         ))}
      </Swiper>
   )
}

export default EarthCarousel
