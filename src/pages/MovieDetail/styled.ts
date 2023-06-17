import styled, { css } from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
`;

export const Modal = styled.div`
  position: relative;
  width: 600px;
  margin: 150px auto;
  background-color: #485460;
  border-radius: 20px;
  overflow: hidden;
`;

export const BackdropArea = styled.div<{
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
