import { motion } from 'framer-motion'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import styled from '@emotion/styled'

const StyledCard = styled(motion(Card))`
   width: 100%;
   height: 100%;
   background-color: white;
   border-radius: 15px;
   overflow: hidden;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
   transition: transform 0.3s ease-in-out;

   &:hover {
      transform: translateY(-10px);
   }
`

const StyledCardMedia = styled(CardMedia)`
   height: 200px;
   object-fit: cover;
`

const StyledCardContent = styled(CardContent)`
   padding: 2rem;
`

const ActionCard = ({ image, title, description, index }) => {
   const cardVariants = {
      hidden: {
         opacity: 0,
         y: 50,
         x: index % 2 === 0 ? -50 : 50,
      },
      visible: {
         opacity: 1,
         y: 0,
         x: 0,
         transition: {
            duration: 0.8,
            delay: index * 0.2,
         },
      },
   }

   return (
      <StyledCard variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
         <StyledCardMedia component="img" image={image} alt={title} />
         <StyledCardContent>
            <Typography variant="h5" component="h3" gutterBottom>
               {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
               {description}
            </Typography>
         </StyledCardContent>
      </StyledCard>
   )
}

export default ActionCard
