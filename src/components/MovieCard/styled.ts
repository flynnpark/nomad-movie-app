import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Poster = styled(motion.img)`
  border-radius: 12px;
  max-width: 100%;
`;

export const Title = styled.h1`
  margin-top: 12px;
  text-align: center;
`;
