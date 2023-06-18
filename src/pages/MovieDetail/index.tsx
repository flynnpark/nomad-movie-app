import { useNavigate } from 'react-router-dom';

import { makeBackdropUrl } from '../../api';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
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
  useLockBodyScroll();

  const movieDetail = useMovieDetailData() as GetMovieDetailResponse;
  const navigate = useNavigate();

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
          {[
            movieDetail.budget,
            movieDetail.revenue,
            movieDetail.runtime,
            movieDetail.runtime,
            movieDetail.homepage,
          ].map((item) => (
            <>
              {item && (
                <Information>
                  <ItemName>Budget:</ItemName> {movieDetail.budget}
                </Information>
              )}
            </>
          ))}
        </DetailArea>
      </Modal>
    </Container>
  );
}

export default MovieDetail;
