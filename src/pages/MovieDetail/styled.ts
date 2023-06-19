import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Backdrop = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
`;

export const Modal = styled(motion.div)`
  position: relative;
  width: 600px;
  margin: 150px auto;
  background-color: #485460;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
`;

export const BackdropArea = styled(motion.div)<{
  backdropUrl: string;
}>`
  width: 600px;
  height: 330px;
  ${(props) =>
    props.backdropUrl
      ? css`
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0),
              rgba(72, 84, 96, 1)
            ),
            url(${props.backdropUrl});
          background-size: 100% auto;
          background-repeat: no-repeat;
        `
      : ''}
`;

export const DetailArea = styled.div`
  margin: 24px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

export const Overview = styled.p`
  margin: 24px 0;
  line-height: 160%;
  font-size: 18px;
`;

export const Information = styled.p`
  line-height: 160%;
  font-size: 18px;
`;

export const ItemName = styled.span`
  font-weight: 700;
`;
