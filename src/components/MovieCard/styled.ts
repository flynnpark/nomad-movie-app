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
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
`;

export const Title = styled.h1`
  margin-top: 12px;
  text-align: center;
`;
