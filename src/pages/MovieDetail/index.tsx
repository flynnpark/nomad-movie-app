import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { makeBackdropUrl } from '../../api';
import useMovieDetailData from '../../hooks/useMovieDetailData';
import {
  Backdrop,
  BackdropArea,
  Container,
  DetailArea,
  Information,
  ItemName,
  Modal,
  Overview,
  Title,
} from './styled';

function MovieDetail() {
  const movieDetail = useMovieDetailData() as GetMovieDetailResponse;
  const navigate = useNavigate();

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = `0px`;
    };
  }, []);

  const handleModalClose = () => {
    navigate(-1);
  };

  const backdropUrl = makeBackdropUrl(movieDetail.backdrop_path);

  return (
    <Container>
      <Backdrop
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={handleModalClose}
      />
      <Modal layoutId={String(movieDetail.id)}>
        <BackdropArea backdropUrl={backdropUrl} />
        <DetailArea>
          <Title>{movieDetail.title}</Title>
          <Overview>{movieDetail.overview}</Overview>
          <Information>
            {!!movieDetail.budget && (
              <>
                <ItemName>Budget:</ItemName> {movieDetail.budget}
              </>
            )}
          </Information>
          <Information>
            {!!movieDetail.revenue && (
              <>
                <ItemName>Revenue:</ItemName> {movieDetail.revenue}
              </>
            )}
          </Information>
          <Information>
            {!!movieDetail.runtime && (
              <>
                <ItemName>Runtime:</ItemName> {movieDetail.runtime}
              </>
            )}
          </Information>
          <Information>
            {!!movieDetail.runtime && (
              <>
                <ItemName>Rating:</ItemName> {movieDetail.runtime}
              </>
            )}
          </Information>
          <Information>
            {!!movieDetail.homepage && (
              <>
                <ItemName>Homepage:</ItemName> {movieDetail.homepage}
              </>
            )}
          </Information>
        </DetailArea>
      </Modal>
    </Container>
  );
}

export default MovieDetail;
